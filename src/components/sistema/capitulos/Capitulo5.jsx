import React from 'react';
import { Link } from 'react-scroll';

const Capitulo5 = () => {
  return (
    <div id="capitulo-5" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-amber-300 mb-4">Capítulo 5: Condição Mental - Estilhaços, Fraturas e Cicatrizes</h2>
      <div className="space-y-6 text-slate-300">
        <p className="italic text-lg text-amber-100">
          Olhar para o abismo desgasta a alma. O confronto com o Além deixa fissuras na sua sanidade.
        </p>

        <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-xl font-bold text-red-300 mb-3">Ganhando Estilhaços</h3>
          <p className="mb-3">Sua reserva mental diminui quando você:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Força os Limites:</strong> Ganha 1 Estilhaço para cada '1' rolado (incluindo rerrolagens).</li>
            <li><strong>Testemunha o Inominável:</strong> Presencia eventos traumáticos ou vislumbra a verdadeira forma de uma Sombra (1-3+ Estilhaços).</li>
            <li><strong>É Alvo de Ataques Psíquicos:</strong> Poderes de Sombras que visam diretamente sua mente.</li>
            <li><strong>Falha em Testes de Vontade:</strong> Para resistir a medo, controle mental ou possessão.</li>
            <li><strong>Exposição Prolongada:</strong> Em locais saturados pelo Além (Nexus, locais de Ecos intensos).</li>
            <li><strong>Usa Poderes Perigosos:</strong> Certos Focos arcanos ou rituais instáveis.</li>
          </ul>
        </div>

        <div className="bg-gray-800/30 p-6 rounded-lg border border-red-500/50">
          <h3 className="text-xl font-bold text-red-300 mb-3">Limite de Estilhaços</h3>
          <p className="mb-4">
            A quantidade máxima de Estilhaços que você pode suportar é igual ao seu Atributo <strong>Espírito</strong>.
            Acima disso, a pressão se torna insuportável e você sofre uma <strong>Fratura</strong>.
          </p>
        </div>

        <div className="bg-red-900/20 p-6 rounded-lg border-l-4 border-red-400">
          <h3 className="text-xl font-bold text-red-200 mb-3">Fratura - Quando a Mente Quebra</h3>
          <p className="mb-4">
            Se seus Estilhaços ultrapassarem seu Limite, você sofre uma Fratura. Sua mente se estilhaça sob o peso do trauma.
          </p>
          
          <div className="mb-4">
            <h4 className="font-bold text-red-100 mb-2">Efeitos Imediatos (Perda de Controle):</h4>
            <p className="mb-2 text-sm">Rode 1d6 para determinar sua reação:</p>
            <ul className="list-decimal list-inside space-y-1 pl-4 text-sm text-red-100">
              <li>Pânico Cego: Fuga desesperada e irracional.</li>
              <li>Fúria Primitiva: Ataque violento e irracional ao mais próximo.</li>
              <li>Catatonia: Desligamento completo, incapaz de agir.</li>
              <li>Paranoia Aguda: Certeza delirante de traição, especialmente de aliados.</li>
              <li>Alucinações Vívidas: A realidade se dissolve em um pesadelo acordado.</li>
              <li>Colapso Total: Desmaio, convulsões, ou breve coma.</li>
            </ul>
          </div>

          <div className="mt-4 pt-4 border-t border-red-800">
            <h4 className="font-bold text-amber-100 mb-2">A Sequela Permanente - Cicatrize:</h4>
            <p className="text-slate-200">
              Após a Fratura, seus Estilhaços retornam a zero, mas você adquire uma <strong>Cicatrize</strong> permanente - 
              um trauma psicológico, compulsão ou fobia que se torna parte de quem você é.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-amber-200 mb-3">Cicatrizes - As Feridas que Não Fecham</h3>
          <p className="mb-4">
            Cicatrizes são desvantagens duradouras, reflexos das fraturas da sua alma. 
            Elas sempre impõem uma desvantagem mecânica ou narrativa.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
              <strong className="text-amber-100 block mb-1">Fobia Incapacitante</strong>
              <p className="text-sm text-slate-300">Medo paralisante de algo específico. <span className="text-red-300">-1d ou -2d</span> em testes na presença do objeto da fobia.</p>
            </div>
            
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
              <strong className="text-amber-100 block mb-1">Desconfiança Corrosiva</strong>
              <p className="text-sm text-slate-300">Incapaz de confiar. <span className="text-red-300">-1d</span> em testes de Interação para formar laços ou pedir ajuda.</p>
            </div>
            
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
              <strong className="text-amber-100 block mb-1">Compulsão Obsessiva</strong>
              <p className="text-sm text-slate-300">Comportamento incontrolável sob estresse. Teste de Espírito (Dif 1) para não perder Ação Principal.</p>
            </div>
            
            <div className="bg-gray-800/30 p-4 rounded-lg border border-amber-500/50">
              <strong className="text-amber-100 block mb-1">Terror Noturno/Flashbacks</strong>
              <p className="text-sm text-slate-300">Recupera Estilhaços mais lentamente; pode começar o dia <span className="text-red-300">Amedrontado/Desorientado</span>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capitulo5;