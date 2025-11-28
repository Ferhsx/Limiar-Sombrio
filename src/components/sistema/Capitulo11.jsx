import React from 'react';
import { Link } from 'react-scroll';

const Capitulo11 = () => {
  return (
    <div id="capitulo-11" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-amber-300 mb-4">Capítulo 11: Rituais e o Além - Dobrando as Leis da Realidade</h2>
      <div className="space-y-6 text-slate-300">
        <p>
          Rituais usam <strong>Ocultismo</strong>, fé e vontade para influenciar o Além. São poderosos, mas instáveis e perigosos. Através deles, os Liminares podem manipular as regras da realidade, mas cada ato deixa marcas profundas, tanto no mundo quanto em quem ousa realizá-los.
        </p>

        <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-purple-300 mb-3">Realizando Rituais</h3>
          <p className="mb-3">Exige <strong>Ocultismo</strong> (Mente ou Espírito) e:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Tempo:</strong> Rodadas, horas ou dias - quanto mais poderoso o ritual, mais tempo exige.</li>
            <li><strong>Componentes:</strong> Ingredientes específicos (físicos/simbólicos), muitas vezes descobertos como <Link to="capitulo-7" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Pistas</Link>.</li>
            <li><strong>Local adequado:</strong> <Link to="capitulo-9" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Nexus</Link>, local purificado, círculo ritualístico.</li>
            <li><strong>Invocação/Palavras de Poder:</strong> Frases, cânticos, nomes. Encontrados em <Link to="capitulo-7" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Pistas</Link> (grimórios, etc.).</li>
            <li><strong>Concentração:</strong> Interrupções podem causar falhas ou efeitos colaterais catastróficos.</li>
          </ul>
        </div>

        <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-500 mt-6">
          <h3 className="text-xl font-bold text-purple-300 mb-3">Mecânicas Rituais</h3>
          <ul className="space-y-3">
            <li>
              <strong>Teste Único:</strong> Para rituais rápidos/simples. Teste de <strong>Ocultismo</strong> vs. Dificuldade (Dif 2-4+).
            </li>
            <li>
              <strong>Teste Prolongado:</strong> Para rituais complexos. Acumular Sucessos em testes de <strong>Ocultismo</strong> ao longo do tempo. 
              <span className="text-red-300">Falhas</span> podem aumentar tempo, consumir componentes, atrair perigo, causar dano 
              (<Link to="capitulo-4" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Vitalidade</Link>/
              <Link to="capitulo-5" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Estilhaços</Link>), ou distorcer o efeito. 
              <span className="font-bold text-red-400">Falha Crítica = Catástrofe</span>.
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-purple-300 mb-3">Tipos Comuns de Rituais</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
              <strong className="text-amber-200">Banimento/Exorcismo:</strong> Expulsar/destruir <Link to="capitulo-10" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Sombras</Link>. Difíceis e perigosos, frequentemente exigindo sacrifícios significativos.
            </li>
            <li className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
              <strong className="text-amber-200">Proteção/Selamento:</strong> Criar barreiras, amuletos, selar passagens. Muitas vezes temporários, exigindo manutenção periódica.
            </li>
            <li className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
              <strong className="text-amber-200">Contato/Comunicação:</strong> Falar com entidades ou espíritos. Extremamente arriscado - você nunca sabe quem ou o que pode responder.
            </li>
            <li className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
              <strong className="text-amber-200">Clarividência/Adivinhação:</strong> Obter <Link to="capitulo-7" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Pistas</Link>, visões (as respostas raramente são claras).
            </li>
            <li className="md:col-span-2 bg-gray-800/30 p-4 rounded-lg border border-amber-500/50">
              <strong className="text-amber-200">Cura Paranormal:</strong> Remover <Link to="capitulo-5" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Estilhaços</Link> ou aliviar <Link to="capitulo-5" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Cicatrizes</Link>. 
              <span className="text-red-300">Raro, exige poder/sacrifício significativo</span> - a energia para a cura precisa vir de algum lugar.
            </li>
          </ul>
        </div>

        <div className="bg-red-900/20 border-l-4 border-red-500 p-4 mt-6">
          <h4 className="text-lg font-bold text-red-300 mb-2">O Custo Inerente dos Rituais</h4>
          <p className="text-red-200 italic">
            Manipular o Além tem um preço: perda de <Link to="capitulo-5" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Estilhaços</Link>, sacrifício de <Link to="capitulo-4" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Vitalidade</Link>, 
            atrair algo pior, corrupção, marcas físicas/mentais. Cada ritual deixa sua marca, e o preço é sempre maior do que parece.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capitulo11;