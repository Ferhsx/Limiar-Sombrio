import { useState, useEffect } from "react";
import StatRow from "../components/ui/StatRow";

// --- ESTADO INICIAL E CONSTANTES GLOBAIS ---
// Podemos deixar aqui o que NÃO depende do estado da ficha
const initialFichaState = {
    nome: "",
    conceito: "",
    ocupacao: "",
    vigor: 1,
    agilidade: 1,
    mente: 1,
    espirito: 1,
    pericias: {
        combate: 0,
        investigacao: 0,
        ocultismo: 0,
        interacao: 0,
        sobrevivencia: 0,
        tecnica: 0
    },
    vitalidadeAtual: 6, // Vigor (1) + 5
    estilhacosAtuais: 0,
};

const atributoBaseCost = { 1: 0, 2: 1, 3: 2 };
// Custo de perícia corrigido (nível 1 custa 1, 2 custa 2, 3 custa 3)
const periciaBaseCost = { 0: 0, 1: 1, 2: 3, 3: 6 }; // Custo acumulado para cada nível (1=1, 2=1+2=3, 3=1+2+3=6)

export default function FichaPage() {

    // --- ESTADO ---
    const [ficha, setFicha] = useState(() => {
        const savedFicha = localStorage.getItem('limiar-ficha');
        return savedFicha ? JSON.parse(savedFicha) : initialFichaState;
    });

    useEffect(() => {
        localStorage.setItem('limiar-ficha', JSON.stringify(ficha));
    }, [ficha]);

    // --- CÁLCULOS (VALORES DERIVADOS) ---
    // Agora DENTRO do componente, onde temos acesso a `ficha`
    const pontosAtributoGastos =
        atributoBaseCost[ficha.vigor] +
        atributoBaseCost[ficha.agilidade] +
        atributoBaseCost[ficha.mente] +
        atributoBaseCost[ficha.espirito];
    const pontosAtributoRestantes = 5 - pontosAtributoGastos;

    const pontosPericiaGastos = Object.values(ficha.pericias).reduce((total, nivel) => {
        return total + periciaBaseCost[nivel];
    }, 0);
    const pontosPericiaRestantes = 12 - pontosPericiaGastos;

    const vitalidadeMaxima = ficha.vigor + 5;
    const limiteEstilhacos = ficha.espirito * 2;


    // --- FUNÇÕES DE MANIPULAÇÃO DE ESTADO (HANDLERS) ---
    const handleAttributeChange = (attribute, change) => {
        const currentLevel = ficha[attribute];
        const newLevel = currentLevel + change;

        if (newLevel > 3 || newLevel < 1) return;
        // Precisamos recalcular os pontos gastos aqui para a validação
        const futureCost = atributoBaseCost[newLevel] - atributoBaseCost[currentLevel];
        if (change > 0 && pontosAtributoRestantes < futureCost) return;

        setFicha(prevFicha => ({
            ...prevFicha,
            [attribute]: newLevel
        }));
    };

    // **NOVO: LÓGICA PARA PERÍCIAS**
    const handlePericiaChange = (pericia, change) => {
        const currentLevel = ficha.pericias[pericia];
        const newLevel = currentLevel + change;

        // Regras de limite: Nível Máximo 3, Mínimo 0
        if (newLevel > 3 || newLevel < 0) return;

        const futureCost = periciaBaseCost[newLevel] - periciaBaseCost[currentLevel];
        if (change > 0 && pontosPericiaRestantes < futureCost) return;

        setFicha(prevFicha => ({
            ...prevFicha,
            pericias: {
                ...prevFicha.pericias,
                [pericia]: newLevel
            }
        }));
    };

    const handleStatusChange = (status, change) => {
        const newValue = ficha[status] + change;
        if (newValue < 0) return;
        if (status === 'vitalidadeAtual' && newValue > vitalidadeMaxima) return;
        if (status === 'estilhacosAtuais' && newValue > limiteEstilhacos) return;

        setFicha(prevFicha => ({
            ...prevFicha,
            [status]: newValue
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFicha(prevFicha => ({
            ...prevFicha,
            [name]: value
        }));
    };

    const handleResetFicha = () => {
        if (window.confirm("Você tem certeza que quer apagar a ficha e começar de novo?")) {
            setFicha(initialFichaState);
        }
    };

    return (
        <div className="bg-slate-900 text-white p-10 min-h-screen align-center">
            <h1 className="text-3xl font-bold mb-4">Criação de Personagem</h1>

            {/* PAINEL DE PONTOS */}
            <div className="bg-slate-800 p-4 rounded-lg mb-6 flex justify-around">
                <div className="text-center">
                    <span className="text-lg block">Pontos de Atributo</span>
                    <span className="text-3xl font-bold">{pontosAtributoRestantes} / 5</span>
                </div>
                <div className="text-center">
                    <span className="text-lg block">Pontos de Perícia</span>
                    <span className="text-3xl font-bold">{pontosPericiaRestantes} / 12</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* COLUNA 1: ATRIBUTOS E STATUS */}
                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold mb-2">Atributos</h2>
                        <div className="space-y-2">
                            <StatRow label="Vigor" value={ficha.vigor} onIncrease={() => handleAttributeChange('vigor', 1)} onDecrease={() => handleAttributeChange('vigor', -1)} />
                            <StatRow label="Agilidade" value={ficha.agilidade} onIncrease={() => handleAttributeChange('agilidade', 1)} onDecrease={() => handleAttributeChange('agilidade', -1)} />
                            <StatRow label="Mente" value={ficha.mente} onIncrease={() => handleAttributeChange('mente', 1)} onDecrease={() => handleAttributeChange('mente', -1)} />
                            <StatRow label="Espírito" value={ficha.espirito} onIncrease={() => handleAttributeChange('espirito', 1)} onDecrease={() => handleAttributeChange('espirito', -1)} />
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold mb-2">Condição Atual</h2>
                        <div className="space-y-2">
                            <StatRow label={`Vitalidade (${vitalidadeMaxima})`} value={ficha.vitalidadeAtual} onIncrease={() => handleStatusChange('vitalidadeAtual', 1)} onDecrease={() => handleStatusChange('vitalidadeAtual', -1)} />
                            <StatRow label={`Estilhaços (${limiteEstilhacos})`} value={ficha.estilhacosAtuais} onIncrease={() => handleStatusChange('estilhacosAtuais', 1)} onDecrease={() => handleStatusChange('estilhacosAtuais', -1)} />
                        </div>
                    </section>
                </div>

                {/* COLUNA 2: PERÍCIAS */}
                <section>
                    <h2 className="text-2xl font-bold mb-2">Perícias</h2>
                    <div className="space-y-2">
                        {Object.keys(ficha.pericias).map((periciaKey) => (
                            <StatRow
                                key={periciaKey}
                                label={periciaKey.charAt(0).toUpperCase() + periciaKey.slice(1)} // Deixa a primeira letra maiúscula
                                value={ficha.pericias[periciaKey]}
                                onIncrease={() => handlePericiaChange(periciaKey, 1)}
                                onDecrease={() => handlePericiaChange(periciaKey, -1)}
                            />
                        ))}
                    </div>
                </section>

                {/* COLUNA 3: DADOS DE IDENTIFICAÇÃO (ainda sem lógica) */}
                <section>
                    <h2 className="text-2xl font-bold mb-2">Identificação</h2>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="nome" className="block text-sm font-medium text-slate-400 mb-1">Nome do Liminar</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={ficha.nome}
                                onChange={handleInputChange}
                                className="w-full bg-slate-700 p-2 rounded border border-slate-600 focus:ring-2 focus:ring-amber-400 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="conceito" className="block text-sm font-medium text-slate-400 mb-1">Conceito</label>
                            <input
                                type="text"
                                id="conceito"
                                name="conceito"
                                value={ficha.conceito}
                                onChange={handleInputChange}
                                className="w-full bg-slate-700 p-2 rounded border border-slate-600 focus:ring-2 focus:ring-amber-400 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="ocupacao" className="block text-sm font-medium text-slate-400 mb-1">Ocupação Anterior</label>
                            <input
                                type="text"
                                id="ocupacao"
                                name="ocupacao"
                                value={ficha.ocupacao}
                                onChange={handleInputChange}
                                className="w-full bg-slate-700 p-2 rounded border border-slate-600 focus:ring-2 focus:ring-amber-400 outline-none"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            type="button"
                            onClick={handleResetFicha}
                            className="w-full bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
                        >
                            Resetar Ficha
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}