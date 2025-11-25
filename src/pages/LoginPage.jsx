import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { signup, login, loginWithGoogle } = useAuth();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await signup(email, password);
            navigate('/'); // Redireciona para a home após o sucesso
        } catch (err) {
            setError('Falha ao criar a conta. Verifique o e-mail e a senha (mínimo 6 caracteres).');
        }
        setLoading(false);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError('Falha ao entrar. E-mail ou senha incorretos.');
        }
        setLoading(false);
    };
    
    const handleGoogleLogin = async () => {
        setError('');
        setLoading(true);
        try {
            await loginWithGoogle();
            navigate('/');
        } catch (err) {
             setError('Falha ao entrar com Google.');
        }
        setLoading(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-slate-800 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-amber-300">Acessar o Limiar</h1>
                {error && <p className="bg-red-900/50 text-red-300 p-3 rounded text-center">{error}</p>}
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-400">E-mail</label>
                        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full mt-1 p-2 bg-slate-700 rounded border border-slate-600" />
                    </div>
                    <div>
                        <label htmlFor="password"  className="block text-sm font-medium text-slate-400">Senha</label>
                        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full mt-1 p-2 bg-slate-700 rounded border border-slate-600" />
                    </div>
                </form>
                <div className="space-y-4">
                    <button onClick={handleLogin} disabled={loading} className="w-full py-2 px-4 bg-amber-600 hover:bg-amber-500 rounded font-bold disabled:bg-slate-600">Entrar</button>
                    <button onClick={handleSignup} disabled={loading} className="w-full py-2 px-4 bg-slate-600 hover:bg-slate-500 rounded font-bold disabled:bg-slate-500">Registrar</button>
                    <button onClick={handleGoogleLogin} disabled={loading} className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded font-bold disabled:bg-slate-500">Entrar com Google</button>
                </div>
            </div>
        </div>
    );
}