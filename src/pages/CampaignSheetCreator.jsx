import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useCharacterSystem } from '../hooks/useCharacterSystem';
import CharacterSheetForm from '../components/character/CharacterSheetForm';

export default function CampaignSheetCreator() {
    const { id } = useParams(); // ID da Campanha
    const navigate = useNavigate();
    const [saving, setSaving] = useState(false);

    // Reutilizamos toda a lógica do sistema!
    const sistema = useCharacterSystem(); 

    const handleSaveToCampaign = async () => {
        if (!sistema.ficha.nome) {
            alert("O personagem precisa de um nome!");
            return;
        }

        setSaving(true);
        try {
            // Salva na sub-coleção 'premade_sheets' da campanha
            await addDoc(collection(db, `campaigns/${id}/premade_sheets`), {
                ...sistema.ficha,
                status: 'available', // Importante: marca como disponível para escolha
                createdAt: new Date()
            });
            
            navigate(`/campaign/${id}`); // Volta para o Lobby
        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert("Erro ao salvar a ficha.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="p-6 max-w-6xl mx-auto min-h-screen">
            <header className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
                <h1 className="text-3xl font-cinzel text-amber-300">Criar Ficha Pré-definida</h1>
                <div className="space-x-4">
                    <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-white">
                        Cancelar
                    </button>
                    <button 
                        onClick={handleSaveToCampaign}
                        disabled={saving}
                        className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow-lg disabled:opacity-50"
                    >
                        {saving ? "Salvando..." : "Salvar na Campanha"}
                    </button>
                </div>
            </header>

            {/* Aqui renderizamos o formulário "burro" passando todos os dados e funções do hook */}
            <CharacterSheetForm {...sistema} />
        </div>
    );
}