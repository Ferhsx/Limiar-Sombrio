import React from 'react';

const Capitulo4 = () => {
  return (
    <div id="capitulo-4" className="mt-8">
      <h2 className="text-2xl font-bold text-amber-300 mb-6">Capítulo 4: Atributos e Perícias em Detalhe - Anatomia de um Liminar</h2>
      
      <div className="space-y-8">
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold text-amber-200 mb-4">Atributos</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vigor */}
            <div className="bg-slate-800/30 p-4 rounded border border-slate-700">
              <h4 className="text-lg font-bold text-red-400 mb-2">Vigor (VIG)</h4>
              <p className="text-slate-300 text-sm">
                Força física, resistência e saúde. Usado para testes de resistência, esforço físico bruto e para calcular sua Vitalidade Máxima.
              </p>
              <p className="text-xs text-slate-400 mt-2 italic">Exemplos: Levantar objetos pesados, resistir a venenos, aguentar dor.</p>
            </div>
            
            {/* Agilidade */}
            <div className="bg-slate-800/30 p-4 rounded border border-slate-700">
              <h4 className="text-lg font-bold text-blue-400 mb-2">Agilidade (AGI)</h4>
              <p className="text-slate-300 text-sm">
                Reflexos, coordenação motora e destreza. Usado para testes de movimentos precisos, esquivas e ataques corpo a corpo.
              </p>
              <p className="text-xs text-slate-400 mt-2 italic">Exemplos: Esquivar-se, acertar um alvo, realizar movimentos precisos.</p>
            </div>
            
            {/* Mente */}
            <div className="bg-slate-800/30 p-4 rounded border border-slate-700">
              <h4 className="text-lg font-bold text-purple-400 mb-2">Mente (MEN)</h4>
              <p className="text-slate-300 text-sm">
                Intelecto, lógica e conhecimento acadêmico. Usado para testes de raciocínio, memória e compreensão de conceitos complexos.
              </p>
              <p className="text-xs text-slate-400 mt-2 italic">Exemplos: Decifrar códigos, lembrar informações, entender conceitos científicos.</p>
            </div>
            
            {/* Espírito */}
            <div className="bg-slate-800/30 p-4 rounded border border-slate-700">
              <h4 className="text-lg font-bold text-green-400 mb-2">Espírito (ESP)</h4>
              <p className="text-slate-300 text-sm">
                Força de vontade, intuição e conexão com o sobrenatural. Usado para resistir a efeitos mentais, perceber o oculto e canalizar poderes.
              </p>
              <p className="text-xs text-slate-400 mt-2 italic">Exemplos: Resistir a possessão, sentir presenças, usar habilidades sobrenaturais.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold text-amber-200 mb-4">Perícias</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Combate */}
            <div className="bg-slate-800/20 p-3 rounded border-l-4 border-red-500">
              <h4 className="font-bold text-red-300">Combate</h4>
              <p className="text-sm text-slate-300">Luta, armas de fogo, táticas de combate.</p>
              <p className="text-xs text-slate-400 mt-1">Atributo Primário: Agilidade</p>
              <p className="text-xs text-slate-400">Atributo Secundário: Vigor</p>
            </div>
            
            {/* Investigação */}
            <div className="bg-slate-800/20 p-3 rounded border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-300">Investigação</h4>
              <p className="text-sm text-slate-300">Coletar pistas, analisar cenas de crime, pesquisa.</p>
              <p className="text-xs text-slate-400 mt-1">Atributo Primário: Mente</p>
              <p className="text-xs text-slate-400">Atributo Secundário: Espírito</p>
            </div>
            
            {/* Ocultismo */}
            <div className="bg-slate-800/20 p-3 rounded border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-300">Ocultismo</h4>
              <p className="text-sm text-slate-300">Conhecimento de rituais, entidades e fenômenos sobrenaturais.</p>
              <p className="text-xs text-slate-400 mt-1">Atributo Primário: Espírito</p>
              <p className="text-xs text-slate-400">Atributo Secundário: Mente</p>
            </div>
            
            {/* Interação */}
            <div className="bg-slate-800/20 p-3 rounded border-l-4 border-green-500">
              <h4 className="font-bold text-green-300">Interação</h4>
              <p className="text-sm text-slate-300">Persuasão, blefe, diplomacia, intimidação.</p>
              <p className="text-xs text-slate-400 mt-1">Atributo Primário: Espírito</p>
              <p className="text-xs text-slate-400">Atributo Secundário: Mente</p>
            </div>
            
            {/* Técnica */}
            <div className="bg-slate-800/20 p-3 rounded border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-300">Técnica</h4>
              <p className="text-sm text-slate-300">Mecânica, eletrônica, computação, medicina básica.</p>
              <p className="text-xs text-slate-400 mt-1">Atributo Primário: Mente</p>
              <p className="text-xs text-slate-400">Atributo Secundário: Agilidade</p>
            </div>
            
            {/* Sobrevivência */}
            <div className="bg-slate-800/20 p-3 rounded border-l-4 border-amber-500">
              <h4 className="font-bold text-amber-300">Sobrevivência</h4>
              <p className="text-sm text-slate-300">Rastreamento, furtividade, primeiros socorros, navegação.</p>
              <p className="text-xs text-slate-400 mt-1">Atributo Primário: Vigor</p>
              <p className="text-xs text-slate-400">Atributo Secundário: Agilidade</p>
            </div>
          </div>
          
          <div className="mt-6 bg-slate-800/50 p-4 rounded border border-slate-600">
            <h4 className="font-bold text-amber-200 mb-2">Usando Perícias</h4>
            <p className="text-slate-300 text-sm">
              Para realizar um teste de perícia, some o nível do Atributo Primário + nível da Perícia + 1d6 por ponto de bônus de Focos ou equipamentos.
            </p>
            <p className="text-slate-400 text-xs mt-2 italic">
              Exemplo: Um personagem com Mente 2 e Investigação 3, usando um kit de investigação (+1d), rola 6d6 (2+3+1) para testes de Investigação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capitulo4;
