import React from 'react';
import {
    Capitulo1,
    Capitulo2,
    Capitulo3,
    Capitulo4,
    Capitulo5,
    Capitulo6,
    Capitulo7,
    Capitulo8,
    Capitulo9,
    Capitulo10,
    Capitulo11,
    Capitulo12,
    Capitulo13,
    Capitulo14,
} from '../components/sistema';

import TableOfContents from '../components/TableOfContents';

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

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                    <TableOfContents />
                </div>

                <div className="lg:col-span-3">
                    <div className="space-y-12">
                        <Capitulo1 />
                        <Capitulo2 />
                        <Capitulo3 />
                        <Capitulo4 />
                        <Capitulo5 />
                        <Capitulo6 />
                        <Capitulo7 />
                        <Capitulo8 />
                        <Capitulo9 />
                        <Capitulo10 />
                        <Capitulo11 />
                        <Capitulo12 />
                        <Capitulo13 />
                        <Capitulo14 />
                    </div>
                </div>
            </div>
        </div>
    );
}