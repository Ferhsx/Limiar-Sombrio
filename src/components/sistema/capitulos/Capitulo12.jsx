import React from 'react';

const Capitulo12 = () => {
  return (
    <div id="capitulo-12">
      <h2 className="text-2xl font-bold text-amber-300 mb-4">Capítulo 12: Recuperação e Downtime - Juntando os Cacos</h2>
      <div className="space-y-4 text-slate-300">
        <p className="mb-6">
          Entre os casos, Liminares precisam de Tempo Livre (Downtime) para curar corpo e mente.
        </p>

        <h3 className="text-xl font-bold text-amber-200">Atividades de Downtime</h3>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100">Descanso e Recuperação</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>1 dia de descanso: Cura 1 de dano físico (2 com cuidados médicos)</li>
              <li>1 semana de terapia: Remove 1 Estilhaço Mental</li>
              <li>1 mês de repouso: Remove 1 Cicatriz (com teste de Vontade Dificuldade 4)</li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100">Pesquisa e Preparação</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Investigar pistas em arquivos ou bibliotecas</li>
              <li>Procurar por novos equipamentos ou aliados</li>
              <li>Estudar criaturas ou fenômenos sobrenaturais</li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100">Atividades Pessoais</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Manter aparências na vida normal</li>
              <li>Estabelecer ou manter relacionamentos</li>
              <li>Ganhar dinheiro com empregos comuns</li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-100">Treinamento</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Praticar habilidades existentes</li>
              <li>Aprender novas habilidades ou idiomas</li>
              <li>Treinamento físico ou mental</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Tabela de Tempo de Recuperação</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-slate-800/50 rounded-md overflow-hidden">
            <thead>
              <tr className="bg-slate-700/50">
                <th className="px-4 py-2 text-amber-200 text-left">Tipo de Lesão</th>
                <th className="px-4 py-2 text-amber-200 text-center">Tempo de Recuperação</th>
                <th className="px-4 py-2 text-amber-200 text-center">Cura por Dia</th>
                <th className="px-4 py-2 text-amber-200 text-center">Com Tratamento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              <tr>
                <td className="px-4 py-2">Ferimento Leve</td>
                <td className="px-4 py-2 text-center">1-3 dias</td>
                <td className="px-4 py-2 text-center">1 ponto</td>
                <td className="px-4 py-2 text-center">2 pontos</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-2">Ferimento Moderado</td>
                <td className="px-4 py-2 text-center">1-2 semanas</td>
                <td className="px-4 py-2 text-center">1/2 ponto</td>
                <td className="px-4 py-2 text-center">1 ponto</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Ferimento Grave</td>
                <td className="px-4 py-2 text-center">1-3 meses</td>
                <td className="px-4 py-2 text-center">1/4 ponto</td>
                <td className="px-4 py-2 text-center">1/2 ponto</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-2">Trauma Mental</td>
                <td className="px-4 py-2 text-center">Varia</td>
                <td className="px-4 py-2 text-center">-</td>
                <td className="px-4 py-2 text-center">Terapia necessária</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Gerenciamento de Estresse</h3>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Atividades de Alívio</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Meditação ou oração (remove 1d6 de estresse)</li>
              <li>Exercício físico intenso (remove 1d4+1 de estresse)</li>
              <li>Conversar com um amigo ou terapeuta (remove 1d8 de estresse, uma vez por semana)</li>
              <li>Atividades criativas (remove 1d4 de estresse)</li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Consequências do Estresse Acumulado</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>5+ de estresse: -1d em testes de Vontade</li>
              <li>10+ de estresse: -1d em todos os testes</li>
              <li>15+ de estresse: Risco de colapso nervoso</li>
              <li>20+ de estresse: Colapso mental iminente</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Melhorias de Equipamento</h3>
        <div className="bg-slate-800/50 p-4 rounded-md mt-4">
          <p className="mb-3">Durante o tempo de inatividade, os jogadores podem tentar melhorar ou consertar equipamentos:</p>
          
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-slate-800/70 p-3 rounded">
              <h4 className="font-bold text-amber-100 text-center">Reparos Básicos</h4>
              <p className="text-sm mt-2 text-center">1 dia de trabalho<br/>Teste de Técnica (Dificuldade 2)</p>
            </div>
            
            <div className="bg-slate-800/70 p-3 rounded">
              <h4 className="font-bold text-amber-100 text-center">Melhorias</h4>
              <p className="text-sm mt-2 text-center">1 semana de trabalho<br/>Teste de Técnica (Dificuldade 3-4)</p>
            </div>
            
            <div className="bg-slate-800/70 p-3 rounded">
              <h4 className="font-bold text-amber-100 text-center">Criação Especial</h4>
              <p className="text-sm mt-2 text-center">1 mês de trabalho<br/>Teste de Técnica (Dificuldade 4-5)</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 p-4 rounded-md border border-amber-500/30 mt-6">
          <h4 className="font-bold text-amber-200">Dica do Mestre</h4>
          <p className="text-sm mt-2">
            O tempo de inatividade é uma oportunidade para desenvolvimento de personagem e tramas secundárias. 
            Considere criar mini-missões ou encontros durante esses períodos para manter o engajamento dos jogadores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capitulo12;
