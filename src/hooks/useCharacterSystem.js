import { useState } from 'react';
import { ocupacoes } from '../components/sistema/OcupacoesList';

export const initialFichaState = {
    nome: "", conceito: "", ocupacao: "",
    vigor: 1, agilidade: 1, mente: 1, espirito: 1,
    pericias: { combate: 0, investigacao: 0, ocultismo: 0, interacao: 0, sobrevivencia: 0, tecnica: 0 },
    vitalidadeAtual: 6, estilhacosAtuais: 0,
};

const atributoBaseCost = { 1: 0, 2: 1, 3: 2 };
const periciaBaseCost = { 0: 0, 1: 1, 2: 3, 3: 6 };

export function useCharacterSystem(initialData = null) {
    const [ficha, setFicha] = useState(initialData || initialFichaState);

    // Cálculos
    const pontosAtributoGastos = 
        atributoBaseCost[ficha.vigor] + atributoBaseCost[ficha.agilidade] + 
        atributoBaseCost[ficha.mente] + atributoBaseCost[ficha.espirito];
    const pontosAtributoRestantes = 5 - pontosAtributoGastos;

    const pontosPericiaGastos = Object.values(ficha.pericias).reduce((acc, val) => acc + periciaBaseCost[val], 0);
    const pontosPericiaRestantes = 12 - pontosPericiaGastos;

    const vitalidadeMaxima = ficha.vigor + 5;
    const limiteEstilhacos = ficha.espirito * 2;

    // Handlers

    //função de seleção de ocupacao
    const handleOccupationChange = (occupation) => {
        setFicha(prev => ({ ...prev, ocupacao: occupation }));
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFicha(prev => ({ ...prev, [name]: value }));
    };

    const handleAttributeChange = (attr, change) => {
        const current = ficha[attr];
        const next = current + change;
        if (next > 3 || next < 1) return;
        setFicha(prev => ({ ...prev, [attr]: next }));
    };

    const handlePericiaChange = (pericia, change) => {
        const current = ficha.pericias[pericia];
        const next = current + change;
        if (next > 3 || next < 0) return;
        setFicha(prev => ({ ...prev, pericias: { ...prev.pericias, [pericia]: next } }));
    };

    const handleStatusChange = (status, change) => {
        const next = ficha[status] + change;
        if (next < 0) return;
        setFicha(prev => ({ ...prev, [status]: next }));
    };

    return {
        ficha, setFicha,
        handleInputChange, handleAttributeChange, handlePericiaChange, handleStatusChange,
        pontosAtributoRestantes, pontosPericiaRestantes, vitalidadeMaxima, limiteEstilhacos,
        ocupacoes, handleOccupationChange
    };
}