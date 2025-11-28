import React from 'react';

const Capitulo13 = () => {
  return (
    <div id="capitulo-13">
      <h2 className="text-2xl font-bold text-amber-300 mb-4">Capítulo 13: Progressão (XP) - Aprendendo com a Dor</h2>
      <div className="space-y-4 text-slate-300">
        <p className="mb-6">
          A Experiência (XP) representa o aprendizado forjado no horror.
        </p>

        <h3 className="text-xl font-bold text-amber-200">Ganho de XP</h3>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100 text-center">Por Sessão</h4>
            <p className="text-center mt-2">
              <span className="text-2xl font-bold">1-3 XP</span><br/>
              <span className="text-sm">Baseado em participação e conquistas</span>
            </p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100 text-center">Por Missão</h4>
            <p className="text-center mt-2">
              <span className="text-2xl font-bold">2-5 XP</span><br/>
              <span className="text-sm">Baseado na complexidade e desafios</span>
            </p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100 text-center">Bônus Especiais</h4>
            <p className="text-center mt-2">
              <span className="text-2xl font-bold">+1-3 XP</span><br/>
              <span className="text-sm">Por atuação excepcional</span>
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Custos de XP</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-slate-800/50 rounded-md overflow-hidden">
            <thead>
              <tr className="bg-slate-700/50">
                <th className="px-4 py-2 text-amber-200 text-left">Melhoria</th>
                <th className="px-4 py-2 text-amber-200 text-center">Custo</th>
                <th className="px-4 py-2 text-amber-200 text-center">Requisitos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              <tr>
                <td className="px-4 py-2">Aumentar Atributo</td>
                <td className="px-4 py-2 text-center">Nível atual x 5 XP</td>
                <td className="px-4 py-2 text-center text-sm">Máx. 5 por atributo</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-2">Nova Perícia</td>
                <td className="px-4 py-2 text-center">3 XP</td>
                <td className="px-4 py-2 text-center text-sm">Nenhum</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Aumentar Perícia</td>
                <td className="px-4 py-2 text-center">Nível atual x 3 XP</td>
                <td className="px-4 py-2 text-center text-sm">Máx. 5 por perícia</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-2">Novo Foco</td>
                <td className="px-4 py-2 text-center">5 XP</td>
                <td className="px-4 py-2 text-center text-sm">Aprovação do Mestre</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Vantagem Especial</td>
                <td className="px-4 py-2 text-center">7-15 XP</td>
                <td className="px-4 py-2 text-center text-sm">Variável</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Níveis de Experiência</h3>
        <div className="grid gap-4 md:grid-cols-5 mt-4">
          <div className="bg-slate-800/50 p-3 rounded text-center">
            <div className="text-2xl font-bold text-amber-300">1-10 XP</div>
            <div className="text-xs mt-1">Iniciante</div>
          </div>
          <div className="bg-slate-800/50 p-3 rounded text-center">
            <div className="text-2xl font-bold text-amber-300">11-25 XP</div>
            <div className="text-xs mt-1">Experiente</div>
          </div>
          <div className="bg-slate-800/50 p-3 rounded text-center">
            <div className="text-2xl font-bold text-amber-300">26-50 XP</div>
            <div className="text-xs mt-1">Veterano</div>
          </div>
          <div className="bg-slate-800/50 p-3 rounded text-center">
            <div className="text-2xl font-bold text-amber-300">51-100 XP</div>
            <div className="text-xs mt-1">Mestre</div>
          </div>
          <div className="bg-slate-800/50 p-3 rounded text-center">
            <div className="text-2xl font-bold text-amber-300">100+ XP</div>
            <div className="text-xs mt-1">Lenda</div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Recompensas por Estilo de Jogo</h3>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Roleplay</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Interpretação consistente: +1 XP</li>
              <li>Momento marcante: +2 XP</li>
              <li>Desenvolvimento de personagem: +1-3 XP</li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Resolução de Mistérios</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Descoberta importante: +1-2 XP</li>
              <li>Solução criativa: +2 XP</li>
              <li>Prevenção de tragédia: +3 XP</li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Sobrevivência</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Fuga criativa: +1-2 XP</li>
              <li>Salvar aliados: +2 XP</li>
              <li>Superar medo: +1-3 XP</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800/30 p-4 rounded-md border border-amber-500/30 mt-6">
          <h4 className="font-bold text-amber-200">Notas sobre Progressão</h4>
          <p className="text-sm mt-2">
            A progressão em Limiar Sombrio é mais lenta do que em muitos outros jogos, refletindo a natureza perigosa e implacável do mundo. 
            Os personagens devem escolher cuidadosamente como gastar seus pontos de experiência, pois cada decisão pode significar a diferença entre a vida e a morte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capitulo13;
