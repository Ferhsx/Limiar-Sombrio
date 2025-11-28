import React from 'react';

const Capitulo10 = () => {
  return (
    <div id="capitulo-10">
      <h2 className="text-2xl font-bold text-amber-300 mb-4">Capítulo 10: As Sombras - Horrores Que Espreitam Além</h2>
      <div className="space-y-4 text-slate-300">
        <p className="mb-6">
          As entidades do Além são variadas e aterradoras. Entendê-las é crucial para sobreviver.
        </p>

        <h3 className="text-xl font-bold text-amber-200">Tipos de Sombras</h3>
        <div className="space-y-4 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-red-500">
            <h4 className="font-bold text-red-300">Assombrações (Nível 1-3)</h4>
            <p className="text-sm mt-2">
              Espíritos presos ao local de sua morte. Causam medo e confusão, mas raramente são letais.
              <br /><strong>Fraquezas:</strong> Símbolos sagrados, sal grosso, resolver seu conflito não resolvido.
            </p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-300">Demônios Menores (Nível 2-4)</h4>
            <p className="text-sm mt-2">
              Seres de pura malícia que se alimentam de emoções negativas.
              <br /><strong>Fraquezas:</strong> Nomes verdadeiros, círculos de proteção, itens sagrados.
            </p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-300">Entidades Dimensional (Nível 3-5)</h4>
            <p className="text-sm mt-2">
              Seres de realidades distorcidas que não seguem as leis da física.
              <br /><strong>Fraquezas:</strong> Fechar os portais que os mantêm neste plano, certas frequências de som.
            </p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md border-l-4 border-green-500">
            <h4 className="font-bold text-green-300">Possessores (Nível 4-6)</h4>
            <p className="text-sm mt-2">
              Tomam posse de corpos vivos ou objetos inanimados.
              <br /><strong>Fraquezas:</strong> Rituais de exorcismo, itens sagrados, força de vontade do hospedeiro.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Detecção de Atividade Paranormal</h3>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Sinais Físicos</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Queda brusca de temperatura</li>
              <li>Cheiro de podridão ou enxofre</li>
              <li>Eletrônicos se comportando de forma estranha</li>
              <li>Arranhões ou marcas inexplicáveis</li>
              <li>Objetos se movendo sozinhos</li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Sinais Psíquicos</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Enxaquecas repentinas</li>
              <li>Pensamentos intrusivos</li>
              <li>Pesadelos vívidos</li>
              <li>Memórias que não são suas</li>
              <li>Vozes sussurrantes</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Tabela de Resposta a Ameaças</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-slate-800/50 rounded-md overflow-hidden">
            <thead>
              <tr className="bg-slate-700/50">
                <th className="px-4 py-2 text-amber-200 text-left">Tipo de Ameaça</th>
                <th className="px-4 py-2 text-amber-200 text-center">Nível de Perigo</th>
                <th className="px-4 py-2 text-amber-200 text-center">Resposta Recomendada</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              <tr>
                <td className="px-4 py-2">Assombração</td>
                <td className="px-4 py-2 text-center">Baixo</td>
                <td className="px-4 py-2 text-sm">Investigar e resolver o conflito não resolvido</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-2">Poltergeist</td>
                <td className="px-4 py-2 text-center">Médio</td>
                <td className="px-4 py-2 text-sm">Proteção física e ritual de banimento</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Demônio Menor</td>
                <td className="px-4 py-2 text-center">Alto</td>
                <td className="px-4 py-2 text-sm">Exorcismo e proteção espiritual</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-2">Entidade Dimensional</td>
                <td className="px-4 py-2 text-center">Extremo</td>
                <td className="px-4 py-2 text-sm">Fechar o portal e fugir</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-amber-200 mt-6">Proteções Contra Sombras</h3>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Proteções Físicas</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Sal grosso em portas e janelas</li>
              <li>Símbolos sagrados de fé verdadeira</li>
              <li>Velas de cera de abelha</li>
              <li>Ferro frio (contra fadas e espíritos da natureza)</li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-md">
            <h4 className="font-bold text-amber-100">Proteções Mentais</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Meditação diária</li>
              <li>Amuletos de proteção</li>
              <li>Orações ou mantras de proteção</li>
              <li>Limites mentais bem definidos</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800/30 p-4 rounded-md border border-amber-500/30 mt-6">
          <h4 className="font-bold text-amber-200">Aviso Importante</h4>
          <p className="text-sm mt-2">
            Lembre-se: o conhecimento sobre essas entidades é perigoso. Algumas podem se alimentar do medo que causam ou até mesmo se tornar mais poderosas quando reconhecidas. Use essas informações com sabedoria e cautela.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capitulo10;
