import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, query, where, onSnapshot, orderBy, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const { currentUser } = useAuth();
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false); // Estado para o botão de loading
    const navigate = useNavigate();

    // --- 1. LER CAMPANHAS DO FIRESTORE ---
    useEffect(() => {
        if (!currentUser) return;

        // Busca campanhas onde eu sou o Mestre (gmId == meu id)
        const q = query(
            collection(db, "campaigns"),
            where("gmId", "==", currentUser.uid),
            orderBy("createdAt", "desc")
        );

        // onSnapshot cria um "listener" em tempo real. 
        // Se algo mudar no banco, a tela atualiza sozinha!
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const campaignsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setCampaigns(campaignsData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [currentUser]);

    // --- 2. CRIAR NOVA CAMPANHA ---
    const handleCreateCampaign = async () => {
        const campaignName = prompt("Qual o nome da nova Campanha?");
        if (!campaignName) return;

        setIsCreating(true);
        try {
            // Gera um código de convite simples (ex: XF2K9L)
            const inviteCode = Math.random().toString(36).substring(2, 8).toUpperCase();

            const docRef = await addDoc(collection(db, "campaigns"), {
                name: campaignName,
                gmId: currentUser.uid,
                gmName: currentUser.displayName || currentUser.email,
                createdAt: serverTimestamp(),
                status: 'lobby', // Começa no lobby
                inviteCode: inviteCode,
                players: [] // Lista vazia de jogadores
            });

            alert(`Campanha "${campaignName}" criada com sucesso!`);
            // Futuramente, redirecionaremos para o Lobby: navigate(/campaign/${docRef.id});
        } catch (error) {
            console.error("Erro ao criar campanha:", error);
            alert("Erro ao criar campanha. Verifique o console.");
        } finally {
            setIsCreating(false);
        }
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            {/* CABEÇALHO */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-slate-700 pb-4">
                <div>
                    <h1 className="text-3xl font-cinzel text-amber-300">Painel de Operações</h1>
                    <p className="text-slate-400">Bem-vindo, Liminar {currentUser?.displayName || currentUser?.email}</p>
                </div>
                <div className="mt-4 md:mt-0 space-x-4">
                    <button 
                        onClick={handleCreateCampaign} 
                        disabled={isCreating}
                        className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 px-6 rounded shadow-lg transition-all disabled:opacity-50"
                    >
                        {isCreating ? "Criando..." : "+ Nova Campanha"}
                    </button>
                    <button className="border border-slate-500 text-slate-300 hover:bg-slate-800 font-bold py-2 px-6 rounded transition-all">
                        Entrar com Código
                    </button>
                </div>
            </div>

            {/* LISTAGEM DE CAMPANHAS (MESTRE) */}
            <section className="mb-12">
                <h2 className="text-xl font-bold text-slate-200 mb-4 flex items-center">
                    <span className="w-2 h-8 bg-amber-500 mr-3 rounded-full"></span>
                    Campanhas como Mestre
                </h2>

                {loading ? (
                    <p className="text-slate-500">Carregando dados do Além...</p>
                ) : campaigns.length === 0 ? (
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
                        <p className="text-slate-400 mb-4">Você ainda não narra nenhuma história.</p>
                        <p className="text-sm text-slate-500">O véu está intacto... por enquanto.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {campaigns.map(camp => (
                            <div key={camp.id} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-amber-500/50 transition-colors group relative">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-amber-100">{camp.name}</h3>
                                    <span className={`text-xs px-2 py-1 rounded-full ${camp.status === 'lobby' ? 'bg-green-900/50 text-green-300' : 'bg-blue-900/50 text-blue-300'}`}>
                                        {camp.status === 'lobby' ? 'LOBBY ABERTO' : 'EM ANDAMENTO'}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-500 mb-4">Criado em: {camp.createdAt?.toDate().toLocaleDateString()}</p>
                                
                                <div className="bg-black/30 p-2 rounded mb-4">
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Código de Convite</p>
                                    <p className="text-lg font-mono text-amber-400 tracking-widest select-all">{camp.inviteCode}</p>
                                </div>

                                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded transition-colors">
                                    Gerenciar Mesa
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* LISTAGEM DE PERSONAGENS (JOGADOR) - Faremos na próxima etapa */}
            <section>
                <h2 className="text-xl font-bold text-slate-200 mb-4 flex items-center">
                    <span className="w-2 h-8 bg-sky-600 mr-3 rounded-full"></span>
                    Meus Personagens
                </h2>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 text-center opacity-75">
                    <p className="text-slate-500">Funcionalidade em breve. Aqui aparecerão as fichas que você usa em outras mesas.</p>
                </div>
            </section>
        </div>
    );
}