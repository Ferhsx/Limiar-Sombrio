import React from 'react';

const Capitulo2 = () => {
  return (
    <div id="capitulo-2" className="mt-8">
      <h2 className="text-2xl font-bold text-amber-300 mb-4">Capítulo 2: O Básico - Mecânicas Fundamentais</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-amber-200 mt-4 mb-2">A Parada de Dados d6</h3>
          <p className="text-slate-300">
            Quando seu Liminar tenta uma ação significativa cujo sucesso é incerto, desafiador ou realizado sob pressão (definido pelo Mestre), você monta e rola uma Parada de Dados. O número de dados de seis faces (d6) na sua parada é determinado por:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mt-2 text-slate-300">
            <li>Seu nível no <strong>Atributo</strong> principal relevante para a ação (normalmente 1 a 5).</li>
            <li>Seu nível na <strong>Perícia</strong> relevante (0 se não treinado, até 5).</li>
            <li><strong>Modificadores:</strong> Dados bônus (+Xd) ou de penalidade (-Xd) concedidos por Focos pertinentes, equipamento especializado, condições ambientais favoráveis ou adversas, ou a influência direta de Sombras.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-amber-200 mt-6 mb-2">Interpretando a Rolagem - Sucessos</h3>
          <p className="text-slate-300">
            Após rolar os dados, conte quantos resultaram em '6'. Cada '6' é um Sucesso. A quantidade de Sucessos dita o resultado da ação:
          </p>
          <div className="space-y-4 mt-4">
            <div className="bg-slate-900/50 p-4 rounded-md border border-slate-700">
              <p className="text-slate-200"><strong>0 Sucessos (Falha Total):</strong> A ação falha catastroficamente. As coisas não apenas não dão certo, como pioram significativamente. O Mestre descreve a consequência negativa, que deve impulsionar a narrativa.</p>
              <p className="text-sm text-slate-400 italic mt-2"><strong>Exemplo:</strong> A porta não só não abre, como a fechadura emperra permanentemente; a testemunha se enfurece e recusa qualquer cooperação futura; o ritual de proteção falha, e um pulso de energia atrai a atenção da Sombra.</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-md border border-slate-700">
              <p className="text-slate-200"><strong>1 Sucesso (Sucesso Marginal):</strong> Você alcança o objetivo básico, mas a um custo, com uma complicação, de forma incompleta ou com uma consequência indesejada. O Mestre pode oferecer uma escolha difícil ("Você abre a porta, mas o barulho alerta alguém?") ou impor a complicação.</p>
              <p className="text-sm text-slate-400 italic mt-2"><strong>Exemplo:</strong> Você abre a porta fazendo um ruído alto; convence a testemunha, mas ela permanece desconfiada e lhe dará informações parciais; encontra a pista, mas deixa para trás um item pessoal seu.</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-md border border-slate-700">
              <p className="text-slate-200"><strong>2 Sucessos (Sucesso Pleno):</strong> Você realiza a ação com competência e sem consequências negativas diretas. O resultado é exatamente o esperado.</p>
              <p className="text-sm text-slate-400 italic mt-2"><strong>Exemplo:</strong> Você abre a porta silenciosamente; a testemunha acredita em você e coopera; o ritual é completado corretamente.</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-md border border-slate-700">
              <p className="text-slate-200"><strong>3+ Sucessos (Sucesso Excepcional):</strong> Você não apenas tem sucesso, mas o faz de forma notável. Consegue um benefício extra, age com rapidez e eficiência surpreendentes, descobre algo a mais, ou causa um impacto maior.</p>
              <p className="text-sm text-slate-400 italic mt-2"><strong>Exemplo:</strong> Arromba a porta rapidamente e nota um símbolo estranho arranhado na soleira; não só convence a testemunha, mas ela se lembra de um detalhe crucial e oferece uma Pista extra.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-amber-200 mt-6 mb-2">Complicações por '1's (O Custo Oculto)</h3>
          <p className="text-slate-300">
            Mesmo em rolagens com 1 ou 2 Sucessos, se o número total de dados '1' for maior que o número de '6's, o Mestre pode introduzir uma complicação menor ou um revés sutil. É o universo cobrando um pequeno preço, a má sorte se imiscuindo.
          </p>
          <p className="text-sm text-slate-400 italic mt-2 border-l-4 border-slate-600 pl-4">
            <strong>Exemplo:</strong> Você consegue o que queria, mas deixa cair sua lanterna; a informação está correta, mas uma parte crucial está borrada. Em caso de Falha Total (0 Sucessos), um número elevado de '1's pode indicar uma <strong>Falha Crítica ("Botch")</strong> com consequências particularmente graves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capitulo2;
