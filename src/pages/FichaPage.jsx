import StatRow from "../components/ui/StatRow";
import useCharacterSystem, { initialFichaState } from "../hooks/useCharacterSystem";

export default function FichaPage() {
    const {
        ficha,
        pontosAtributoRestantes,
        pontosPericiaRestantes,
        vitalidadeMaxima,
        limiteEstilhacos,
        handleAttributeChange,
        handlePericiaChange,
        handleStatusChange,
        handleInputChange,
        handleResetFicha
    } = useCharacterSystem(initialFichaState);

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