import React from 'react';

const Capitulo7 = () => {
  return (
    <div id="capitulo-7">
      <h2 className="text-2xl font-bold text-amber-300 mb-4">Capítulo 7: Equipamento - Sobrevivência Mundana Contra o Horror Cósmico</h2>
      <div className="space-y-4 text-slate-300">
        <p className="mb-6">
          O equipamento certo pode ser a diferença entre ser um investigador ou uma vítima.
        </p>

        <h3 className="text-xl font-bold text-amber-200">Equipamento Comum</h3>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100">Ferramentas Básicas</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Lanterna (6h de bateria)</li>
              <li>Kit de Primeiros Socorros (+1d em testes de Medicina)</li>
              <li>Gravador de Voz (4h de gravação)</li>
              <li>Câmera Digital (com visão noturna)</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100">Equipamento de Proteção</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Colete à Prova de Balas (Reduz dano por arma de fogo em 2)</li>
              <li>Máscara de Gás (proteção contra toxinas)</li>
              <li>Amuleto de Proteção (proteção limitada contra influências sobrenaturais)</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Armas</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-slate-800/50 rounded-md overflow-hidden">
            <thead>
              <tr className="bg-slate-700/50">
                <th className="px-4 py-2 text-amber-200 text-left">Arma</th>
                <th className="px-4 py-2 text-amber-200 text-center">Dano</th>
                <th className="px-4 py-2 text-amber-200 text-center">Alcance</th>
                <th className="px-4 py-2 text-amber-200 text-center">Notas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              <tr>
                <td className="px-4 py-2">Faca</td>
                <td className="px-4 py-2 text-center">1d+1</td>
                <td className="px-4 py-2 text-center">Corpo a Corpo</td>
                <td className="px-4 py-2 text-center text-sm">Fácil de esconder</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-2">Pistola</td>
                <td className="px-4 py-2 text-center">2d</td>
                <td className="px-4 py-2 text-center">Médio</td>
                <td className="px-4 py-2 text-center text-sm">Recarga: 6 tiros</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Rifle de Caça</td>
                <td className="px-4 py-2 text-center">3d</td>
                <td className="px-4 py-2 text-center">Longo</td>
                <td className="px-4 py-2 text-center text-sm">Recarga lenta</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Itens Especiais</h3>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-300">Símbolo Sagrado</h4>
            <p className="text-sm mt-2">Protege contra certas entidades. Pode ser usado para banir criaturas sobrenaturais fracas.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-300">Sal Grosso</h4>
            <p className="text-sm mt-2">Pode ser usado para criar barreiras protetoras contra espíritos.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-300">Gravador EVP</h4>
            <p className="text-sm mt-2">Capta vozes e sons do além que não são audíveis a ouvidos humanos.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-300">Câmera Térmica</h4>
            <p className="text-sm mt-2">Pode revelar assinaturas de calor anômalas ou a ausência delas.</p>
          </div>
        </div>

        <div className="bg-slate-800/30 p-4 rounded-md border border-amber-500/30 mt-6">
          <h4 className="font-bold text-amber-200">Nota sobre Equipamento</h4>
          <p className="text-sm mt-2">
            O equipamento pode ser personalizado conforme a campanha e o estilo de jogo. Considere a disponibilidade e a legalidade dos itens em sua campanha.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capitulo7;
