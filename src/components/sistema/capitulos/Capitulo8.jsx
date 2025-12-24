import React from 'react';

const Capitulo8 = () => {
  return (
    <div id="capitulo-8">
      <h2 className="text-2xl font-bold text-amber-300 mb-4">Capítulo 8: Exploração e Investigação - Seguindo os Fios da Loucura</h2>
      <div className="space-y-4 text-slate-300">
        <p className="mb-6">
          A investigação é sua melhor chance de sobrevivência. Desvendar o mistério é a chave.
        </p>

        <h3 className="text-xl font-bold text-amber-200">O Ciclo da Investigação</h3>
        <div className="grid gap-4 md:grid-cols-4 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md border-t-4 border-amber-500">
            <h4 className="font-bold text-amber-100 text-center">1. Descoberta</h4>
            <p className="text-sm mt-2 text-center">Encontrar pistas iniciais e testemunhas</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-md border-t-4 border-amber-500">
            <h4 className="font-bold text-amber-100 text-center">2. Análise</h4>
            <p className="text-sm mt-2 text-center">Interpretar as pistas encontradas</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-md border-t-4 border-amber-500">
            <h4 className="font-bold text-amber-100 text-center">3. Confronto</h4>
            <p className="text-sm mt-2 text-center">Enfrentar a ameaça diretamente</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-md border-t-4 border-amber-500">
            <h4 className="font-bold text-amber-100 text-center">4. Resolução</h4>
            <p className="text-sm mt-2 text-center">Resolver o mistério e lidar com as consequências</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Testes de Investigação</h3>
        <div className="space-y-4 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Percepção</h4>
            <p className="text-sm mt-1">Encontrar pistas óbvias. Dificuldade: Normal (2 sucessos)</p>
            <p className="text-xs text-slate-400 mt-1">Exemplo: Notar uma mancha de sangue atrás do armário.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Investigação</h4>
            <p className="text-sm mt-1">Analisar evidências. Dificuldade: Difícil (3 sucessos)</p>
            <p className="text-xs text-slate-400 mt-1">Exemplo: Decifrar um código ou conectar fatos aparentemente desconexos.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Ocultismo</h4>
            <p className="text-sm mt-1">Reconhecer símbolos ou rituais. Dificuldade: Muito Difícil (4 sucessos)</p>
            <p className="text-xs text-slate-400 mt-1">Exemplo: Identificar um símbolo de uma seita proibida.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Tabela de Dificuldades</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-slate-800/50 rounded-md overflow-hidden">
            <thead>
              <tr className="bg-slate-700/50">
                <th className="px-4 py-2 text-amber-200 text-left">Dificuldade</th>
                <th className="px-4 py-2 text-amber-200 text-center">Sucessos Necessários</th>
                <th className="px-4 py-2 text-amber-200 text-center">Exemplo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              <tr>
                <td className="px-4 py-2">Rotina</td>
                <td className="px-4 py-2 text-center">1</td>
                <td className="px-4 py-2 text-sm">Encontrar um endereço</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-2">Normal</td>
                <td className="px-4 py-2 text-center">2</td>
                <td className="px-4 py-2 text-sm">Convencer uma testemunha relutante</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Difícil</td>
                <td className="px-4 py-2 text-center">3</td>
                <td className="px-4 py-2 text-sm">Decifrar um código simples</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-2">Muito Difícil</td>
                <td className="px-4 py-2 text-center">4</td>
                <td className="px-4 py-2 text-sm">Identificar uma criatura sobrenatural rara</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Quase Impossível</td>
                <td className="px-4 py-2 text-center">5+</td>
                <td className="px-4 py-2 text-sm">Encontrar um portal para o Além</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Dicas para Investigação</h3>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100">Não Pule Etapas</h4>
            <p className="text-sm mt-2">Cada pista é importante. Não negligencie detalhes aparentemente insignificantes.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100">Trabalho em Equipe</h4>
            <p className="text-sm mt-2">Dividam as tarefas. Cada personagem tem habilidades úteis.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100">Mantenha Registros</h4>
            <p className="text-sm mt-2">Anote nomes, locais e eventos. O diário de um investigador é sua arma mais poderosa.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100">Saiba Quando Recuar</h4>
            <p className="text-sm mt-2">Às vezes, viver para investigar outro dia é a melhor escolha.</p>
          </div>
        </div>

        <div className="bg-slate-800/30 p-4 rounded-md border border-amber-500/30 mt-6">
          <h4 className="font-bold text-amber-200">Lembre-se</h4>
          <p className="text-sm mt-2">
            A investigação é um processo. Não tenha pressa, mas mantenha-se focado. O tempo pode ser um aliado ou um inimigo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capitulo8;
