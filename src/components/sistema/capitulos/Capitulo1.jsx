import React from 'react';
import { Link } from 'react-scroll';

const Capitulo1 = () => {
  return (
    <div id="capitulo-1" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-amber-300 mb-4">Capítulo 1: Introdução - O Véu se Rasga</h2>
      <div className="space-y-4 text-slate-300">
        <p>
          O mundo que você habita é uma fina casca sobre uma profundidade insondável: o Além. Uma dimensão parasita, tecida com os fios puídos de energia psíquica, emoções fossilizadas em ódio e medo, e consciências fragmentadas que se recusam a mergulhar na não-existência. A maior parte da humanidade permanece felizmente cega, envolta em uma névoa de ignorância autoimposta. Mas vocês não. Vocês atravessaram o limiar. Vocês são <strong>Liminares</strong>.
        </p>
        <p>
          Talvez tenham nascido com uma sensibilidade dissonante, uma antena sintonizada nas frequências erradas. Talvez um evento traumático tenha estilhaçado suas defesas psíquicas, abrindo fendas para o Outro Lado. Talvez tenham buscado conhecimento em tomos mofados e sussurros proibidos. Ou talvez, foi apenas o mais puro e terrível azar. Qualquer que seja a causa, agora vocês enxergam. Sentem os arrepios errados na espinha, ouvem os sussurros nos estalos da casa vazia, e o pior: atraem a atenção faminta do Além. As manifestações sobrenaturais, as cicatrizes psíquicas no tecido da realidade que chamamos de <Link to="capitulo-10" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Sombras</Link>, não são lendas urbanas para vocês.
        </p>
        <p>
          Este jogo é sobre sobreviver nessa fronteira crepuscular. É sobre seguir os rastros deixados pelos Ecos, desenterrar as tragédias e os segredos que os alimentam para, talvez, silenciá-los. É sobre encarar as Sombras — armado com conhecimento proibido, astúcia forjada no desespero e, ocasionalmente, a força bruta necessária para ver o nascer do sol. Mas cada passo na escuridão tem um custo. O Além não apenas dilacera o corpo; ele corrói a mente, infecta o espírito, deixando marcas. Esses são seus <Link to="capitulo-5" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Estilhaços</Link>, lascas da sua própria alma que se perdem a cada vislumbre do abismo. Acumule Estilhaços demais e a tensão o quebrará, causando uma <Link to="capitulo-5" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Fratura</Link> — um colapso que reescreve quem você é, deixando uma <Link to="capitulo-5" smooth={true} className="text-amber-300 hover:underline cursor-pointer">Cicatriz</Link> indelével como lembrança.
        </p>
      </div>
    </div>
  );
};

export default Capitulo1;