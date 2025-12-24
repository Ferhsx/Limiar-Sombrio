import StatRow from "../ui/StatRow";

// Este componente recebe tudo via PROPS
export default function CharacterSheetForm({ 
    ficha, 
    handleInputChange, 
    handleAttributeChange, 
    handlePericiaChange, 
    handleStatusChange,
    handleOccupationChange,
    pontosAtributoRestantes,
    pontosPericiaRestantes,
    vitalidadeMaxima,
    limiteEstilhacos,
    ocupacoes = []
}) {
    return (
        <div className="text-slate-200">
            {/* PAINEL DE PONTOS */}
            <div className="bg-slate-800 p-4 rounded-lg mb-6 flex justify-around border border-slate-700">
                <div className="text-center">
                    <span className="text-lg block text-slate-400">Pontos de Atributo</span>
                    <span className={`text-3xl font-bold ${pontosAtributoRestantes < 0 ? 'text-red-500' : 'text-amber-400'}`}>
                        {pontosAtributoRestantes} / 5
                    </span>
                </div>
                <div className="text-center">
                    <span className="text-lg block text-slate-400">Pontos de Perícia</span>
                    <span className={`text-3xl font-bold ${pontosPericiaRestantes < 0 ? 'text-red-500' : 'text-amber-400'}`}>
                        {pontosPericiaRestantes} / 12
                    </span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* COLUNA 1: ATRIBUTOS E STATUS */}
                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-cinzel text-amber-200 mb-2 border-b border-slate-700 pb-1">Atributos</h2>
                        <div className="space-y-2">
                            <StatRow label="Vigor" value={ficha.vigor} onIncrease={() => handleAttributeChange('vigor', 1)} onDecrease={() => handleAttributeChange('vigor', -1)} />
                            <StatRow label="Agilidade" value={ficha.agilidade} onIncrease={() => handleAttributeChange('agilidade', 1)} onDecrease={() => handleAttributeChange('agilidade', -1)} />
                            <StatRow label="Mente" value={ficha.mente} onIncrease={() => handleAttributeChange('mente', 1)} onDecrease={() => handleAttributeChange('mente', -1)} />
                            <StatRow label="Espírito" value={ficha.espirito} onIncrease={() => handleAttributeChange('espirito', 1)} onDecrease={() => handleAttributeChange('espirito', -1)} />
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl font-cinzel text-amber-200 mb-2 border-b border-slate-700 pb-1">Vitas</h2>
                        <div className="space-y-2">
                             <StatRow label={`Vitalidade (${vitalidadeMaxima})`} value={ficha.vitalidadeAtual} onIncrease={() => handleStatusChange('vitalidadeAtual', 1)} onDecrease={() => handleStatusChange('vitalidadeAtual', -1)} />
                             <StatRow label={`Estilhaços (${limiteEstilhacos})`} value={ficha.estilhacosAtuais} onIncrease={() => handleStatusChange('estilhacosAtuais', 1)} onDecrease={() => handleStatusChange('estilhacosAtuais', -1)} />
                        </div>
                    </section>
                </div>
                
                {/* COLUNA 2: PERÍCIAS */}
                <section>
                    <h2 className="text-2xl font-cinzel text-amber-200 mb-2 border-b border-slate-700 pb-1">Perícias</h2>
                    <div className="space-y-2">
                        {Object.keys(ficha.pericias).map((periciaKey) => (
                             <StatRow 
                                key={periciaKey}
                                label={periciaKey.charAt(0).toUpperCase() + periciaKey.slice(1)} 
                                value={ficha.pericias[periciaKey]} 
                                onIncrease={() => handlePericiaChange(periciaKey, 1)} 
                                onDecrease={() => handlePericiaChange(periciaKey, -1)} 
                            />
                        ))}
                    </div>
                </section>

                {/* COLUNA 3: IDENTIFICAÇÃO */}
                <section>
                     <h2 className="text-2xl font-cinzel text-amber-200 mb-2 border-b border-slate-700 pb-1">Identidade</h2>
                     <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">Nome</label>
                            <input type="text" name="nome" value={ficha.nome} onChange={handleInputChange} className="w-full bg-slate-700 p-2 rounded border border-slate-600 focus:ring-2 focus:ring-amber-400 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">Conceito</label>
                            <input type="text" name="conceito" value={ficha.conceito} onChange={handleInputChange} className="w-full bg-slate-700 p-2 rounded border border-slate-600 focus:ring-2 focus:ring-amber-400 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">Ocupação</label>
                            <select
                                name="ocupacao"
                                value={ficha.ocupacao}
                                onChange={(e) => handleOccupationChange(e.target.value)}
                                className="w-full bg-slate-700 p-2 rounded border border-slate-600 focus:ring-2 focus:ring-amber-400 outline-none"
                            >
                                <option value="">Selecione uma ocupação</option>
                                {ocupacoes.map((ocupacao) => (
                                    <option key={ocupacao.titulo} value={ocupacao.titulo}>
                                        {ocupacao.titulo}
                                    </option>
                                ))}
                            </select>
                        </div>
                     </div>
                </section>
            </div>
        </div>
    );
}