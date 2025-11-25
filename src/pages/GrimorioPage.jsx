import React from 'react';
import { 
  Capitulo1, 
  Capitulo2, 
  Capitulo3, 
  Capitulo4,
  Capitulo5 
} from '../components/sistema';

export default function GrimorioPage() {
    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-cinzel text-amber-300 text-center mb-8">
                Grimório de Limiar Sombrio
            </h1>
            
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 mb-12">
                <p className="text-lg text-center font-bold text-red-400 mb-4">
                    Atenção
                </p>
                <p className="text-slate-300 text-center">
                    Esta seção contém informações detalhadas sobre o sistema de jogo Limiar Sombrio. 
                    Você não precisa ler tudo isso para jogar - o site está sendo desenvolvido para 
                    facilitar sua experiência de jogo sem necessidade de consultar este manual.
                </p>
            </div>

            <div className="space-y-12">
                <Capitulo1 />
                <Capitulo2 />
                <Capitulo3 />
                <Capitulo4 />
                <Capitulo5 />
                {/* Adicione mais capítulos conforme necessário */}
            </div>
        </div>
    );
}