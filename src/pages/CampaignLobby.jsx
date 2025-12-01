import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Para pegar o ID da URL
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export default function CampaignLobby() {
    const { id } = useParams(); // Pega o ID da campanha da URL (ex: /campaign/ABC123XYZ)
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;

        // Escuta apenas O DOCUMENTO desta campanha específica
        const docRef = doc(db, "campaigns", id);
        
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                setCampaign({ id: docSnap.id, ...docSnap.data() });
            } else {
                alert("Campanha não encontrada!");
                navigate('/');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [id, navigate]);

    if (loading) return <div className="p-8 text-white">Carregando Lobby...</div>;

    if (!campaign) return null;

    return (
        <div className="p-6 max-w-6xl mx-auto min-h-screen text-slate-200">
            {/* HEADER DA CAMPANHA */}
            <header className="mb-8 border-b border-slate-700 pb-6 flex flex-col md:flex-row justify-between items-end">
                <div>
                    <h2 className="text-sm text-amber-500 uppercase tracking-widest mb-1">Painel de Controle</h2>
                    <h1 className="text-4xl font-cinzel text-white">{campaign.name}</h1>
                    <p className="text-slate-400 mt-2">Mestre: {campaign.gmName}</p>
                </div>
                
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-600 text-center mt-4 md:mt-0">
                    <p className="text-xs text-slate-400 uppercase mb-1">Código de Convite</p>
                    <p className="text-2xl font-mono text-amber-400 font-bold tracking-widest select-all">
                        {campaign.inviteCode}
                    </p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* COLUNA DA ESQUERDA: JOGADORES */}
                <section className="lg:col-span-1 bg-slate-800/50 rounded-lg p-6 border border-slate-700 h-fit">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="w-2 h-6 bg-green-500 mr-2 rounded-full"></span>
                        Jogadores no Lobby
                    </h3>
                    
                    {(!campaign.players || campaign.players.length === 0) ? (
                        <p className="text-slate-500 italic">Nenhum jogador entrou ainda. Envie o código!</p>
                    ) : (
                        <ul className="space-y-2">
                            {/* Aqui listaremos os jogadores futuramente */}
                            <li className="text-slate-300">Aguardando...</li>
                        </ul>
                    )}
                </section>

                {/* COLUNA DA DIREITA: FICHAS PRÉ-DEFINIDAS */}
                <section className="lg:col-span-2">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-white flex items-center">
                            <span className="w-2 h-6 bg-purple-500 mr-2 rounded-full"></span>
                            Fichas Pré-definidas
                        </h3>
                        <button onClick={() => navigate(`/campaign/${id}/create-sheet`)} className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded transition-colors border border-slate-500">
                            + Criar Ficha
                        </button>
                    </div>

                    <div className="bg-slate-800/30 rounded-lg p-8 border-2 border-dashed border-slate-700 text-center">
                        <p className="text-slate-500 mb-2">Você ainda não criou fichas para os jogadores escolherem.</p>
                        <p className="text-sm text-slate-600">Clique em "+ Criar Ficha" para montar os personagens desta história.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}