import React from 'react';

const Capitulo9 = () => {
  return (
    <div id="capitulo-9">
      <h2 className="text-2xl font-bold text-amber-300 mb-4">Capítulo 9: Confronto - Quando a Investigação Encontra a Violência</h2>
      <div className="space-y-4 text-slate-300">
        <p className="mb-6">
          O confronto no Limiar Sombrio é brutal, desesperado e muitas vezes, uma batalha pela alma.
        </p>

        <h3 className="text-xl font-bold text-amber-200">Iniciativa e Turnos</h3>
        <div className="bg-slate-800/50 p-4 rounded-md mt-4">
          <p className="mb-3">No início de cada combate, todos os envolvidos rolam <strong>Percepção + Reflexos</strong> para determinar a ordem de iniciativa.</p>
          
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-slate-800/70 p-3 rounded">
              <h4 className="font-bold text-amber-100 text-center">Ações de Combate</h4>
              <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                <li>Ataque Corpo a Corpo</li>
                <li>Ataque à Distância</li>
                <li>Movimentação</li>
                <li>Usar Habilidade/Item</li>
                <li>Defender</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/70 p-3 rounded">
              <h4 className="font-bold text-amber-100 text-center">Ações Especiais</h4>
              <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                <li>Atirar para Atordoar (Dificuldade +1)</li>
                <li>Atacar para Matar (Dano +2, -1d na rolagem)</li>
                <li>Recarregar Arma</li>
                <li>Primeiros Socorros</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/70 p-3 rounded">
              <h4 className="font-bold text-amber-100 text-center">Reações</h4>
              <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                <li>Esquivar (-1d por ataque adicional)</li>
                <li>Bloquear (Reduz dano pela metade, arredondado para baixo)</li>
                <li>Contra-ataque (Ação de reação, -2d na rolagem)</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Dano e Ferimentos</h3>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Dano Físico</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li><strong>Leve:</strong> -1d em testes físicos</li>
              <li><strong>Moderado:</strong> -2d em todos os testes</li>
              <li><strong>Grave:</strong> -3d, sangramento 1/rodada</li>
              <li><strong>Crítico:</strong> Incapacitado, morte em 1d6 rodadas</li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Dano Mental</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li><strong>Abalado:</strong> -1d em testes mentais</li>
              <li><strong>Atordoado:</strong> -2d, ação limitada</li>
              <li><strong>Enlouquecendo:</strong> Comportamento imprevisível</li>
              <li><strong>Colapso:</strong> Inconsciência ou fuga em pânico</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Táticas de Combate</h3>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100">Flanquear</h4>
            <p className="text-sm mt-2">Atacar um inimigo já engajado por um aliado concede +1d ao ataque.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100">Cobertura</h4>
            <p className="text-sm mt-2">+2 de cobertura leve, +4 de cobertura pesada contra ataques à distância.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100">Ataque Surpresa</h4>
            <p className="text-sm mt-2">Inimigos surpresos não podem reagir no primeiro turno.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Condições Especiais</h3>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Agarrado</h4>
            <p className="text-sm mt-2">Teste de Força para escapar. -2d em ações enquanto estiver agarrado.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Atordoado</h4>
            <p className="text-sm mt-2">Perde uma ação. Teste de Vontade (Dificuldade 3) para recuperar.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Sangramento</h4>
            <p className="text-sm mt-2">1 de dano por rodada até estabilizado (Medicina Dificuldade 2).</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Envenenado</h4>
            <p className="text-sm mt-2">Efeito variado. Teste de Vigor para resistir (Dificuldade 3-5).</p>
          </div>
        </div>

        <div className="bg-slate-800/30 p-4 rounded-md border border-amber-500/30 mt-6">
          <h4 className="font-bold text-amber-200">Lembre-se</h4>
          <p className="text-sm mt-2">
            O combate é perigoso e deve ser a última opção. A fuga é sempre uma estratégia válida. 
            Considere o custo de cada confronto, pois mesmo a vitória pode deixar cicatrizes duradouras.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capitulo9;
