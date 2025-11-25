import { useState, useEffect } from "react";

export const initialFichaState = {
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
const periciaBaseCost = { 0: 0, 1: 1, 2: 3, 3: 6 };

export default function useCharacterSystem(initialData = initialFichaState) {
    const [ficha, setFicha] = useState(() => {
        const savedFicha = localStorage.getItem('limiar-ficha');
        return savedFicha ? JSON.parse(savedFicha) : initialData;
    });

    // Salvar no localStorage sempre que a ficha mudar
    useEffect(() => {
        localStorage.setItem('limiar-ficha', JSON.stringify(ficha));
    }, [ficha]);

    // Cálculos derivados
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

    // Handlers
    const handleAttributeChange = (attribute, change) => {
        const currentLevel = ficha[attribute];
        const newLevel = currentLevel + change;

        if (newLevel > 3 || newLevel < 1) return;
        const futureCost = atributoBaseCost[newLevel] - atributoBaseCost[currentLevel];
        if (change > 0 && pontosAtributoRestantes < futureCost) return;

        setFicha(prevFicha => ({
            ...prevFicha,
            [attribute]: newLevel,
            // Atualiza vitalidade se for vigor que mudou
            ...(attribute === 'vigor' && { vitalidadeAtual: newLevel + 5 })
        }));
    };

    const handlePericiaChange = (pericia, change) => {
        const currentLevel = ficha.pericias[pericia];
        const newLevel = currentLevel + change;

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

    return {
        ficha,
        setFicha,
        pontosAtributoRestantes,
        pontosPericiaRestantes,
        vitalidadeMaxima,
        limiteEstilhacos,
        handleAttributeChange,
        handlePericiaChange,
        handleStatusChange,
        handleInputChange,
        handleResetFicha
    };
}