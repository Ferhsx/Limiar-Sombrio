import { createContext, useState, useEffect, useContext } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig'; 

// Cria o Context
const AuthContext = createContext();

// Cria um hook customizado para facilitar o uso do contexto
export const useAuth = () => {
    return useContext(AuthContext);
};


// Cria o Provedor que vai envolver nossa aplicação
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true); // Para sabermos se a autenticação já foi verificada

    // Funções que estarão disponíveis para toda a aplicação
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const logout = () => {
        return signOut(auth);
    };

    // Efeito que roda uma vez para verificar o estado da autenticação
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false); // Verificação concluída
        });

        return unsubscribe; // Limpa o listener ao desmontar o componente
    }, []);


    // O valor que será compartilhado com os componentes filhos
    const value = {
        currentUser,
        signup,
        login,
        loginWithGoogle,
        logout
    };

    // Não renderiza a aplicação até que a verificação inicial seja feita
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};