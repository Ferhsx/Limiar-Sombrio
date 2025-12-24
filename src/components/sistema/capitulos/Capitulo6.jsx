import React from 'react';

const Capitulo6 = () => {
  return (
    <div id="capitulo-6">
      <h2 className="text-2xl font-bold text-amber-300 mb-4">Capítulo 6: Outras Condições de Estado - Feridas do Corpo e da Mente</h2>
      <div className="space-y-4 text-slate-300">
        <p>
          Além dos Estilhaços mentais, os Liminares enfrentam ameaças físicas e psicológicas que podem afetar sua jornada.
        </p>
        
        <h3 className="text-xl font-bold text-amber-200 mt-6 mb-2">Condições Físicas</h3>
        <div className="space-y-4">
          <div className="bg-slate-800/50 p-4 rounded-md border border-slate-700">
            <h4 className="font-bold text-amber-100">Ferimentos Leves</h4>
            <p className="text-sm">Arranhões, cortes superficiais. -1d em testes físicos até tratado.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border border-slate-700">
            <h4 className="font-bold text-amber-100">Ferimentos Graves</h4>
            <p className="text-sm">Ferimentos significativos. -2d em testes físicos. Sangramento: 1 de dano por cena se não estancado.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border border-slate-700">
            <h4 className="font-bold text-amber-100">Ferimentos Críticos</h4>
            <p className="text-sm">Ferimentos fatais. -3d em todos os testes. Sangramento: 1d de dano por rodada. Morte em 1d6 rodadas sem tratamento.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6 mb-2">Condições Mentais</h3>
        <div className="space-y-4">
          <div className="bg-slate-800/50 p-4 rounded-md border border-slate-700">
            <h4 className="font-bold text-amber-100">Amedrontado</h4>
            <p className="text-sm">-1d em testes de Vontade. Deve rolar Vontade para não fugir da fonte de medo.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border border-slate-700">
            <h4 className="font-bold text-amber-100">Aterrorizado</h4>
            <p className="text-sm">-2d em todos os testes. Deve fugir ou se esconder por 1d6 rodadas.</p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border border-slate-700">
            <h4 className="font-bold text-amber-100">Enlouquecendo</h4>
            <p className="text-sm">Comportamento imprevisível. O Mestre pode assumir brevemente o controle do personagem.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6 mb-2">Recuperação</h3>
        <p>
          A recuperação de condições físicas geralmente requer descanso e tratamento médico. Condições mentais podem exigir terapia, medicação ou superação do trauma que as causou. Algumas cicatrizes, no entanto, podem nunca desaparecer completamente.
        </p>
      </div>
    </div>
  );
};

export default Capitulo6;
