import React from 'react';
import OcupacoesList from './OcupacoesList';

const Capitulo3 = () => {
  return (
    <div id="capitulo-3" className="mt-8">
      <h2 className="text-2xl font-bold text-amber-300 mb-4">Capítulo 3: Criação de Personagens Liminares - Fragmentos de Humanidade</h2>
      
      <div className="space-y-6">
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
          <p className="text-lg text-amber-100 mb-4">
            Crie seu Liminar, uma alma tocada pelo Além, em 5 passos essenciais.
          </p>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <h3 className="text-xl font-bold text-amber-200 mb-3">1. Conceito e Ocupação</h3>
              <p className="text-slate-300 mb-2">Quem você era antes da sua vida virar de cabeça para baixo? (Ex: Policial noturno, estudante de história, músico)</p>
              <ul className="list-disc list-inside space-y-2 pl-4 mb-4 text-slate-300">
                <li><strong>Defina sua Ocupação anterior:</strong> (Veja a lista abaixo). Ela concede <strong>+1 Ponto de Perícia</strong> e <strong>1 Foco Temático</strong> gratuito. Anote ambos.</li>
                <li><strong>Sua Personalidade:</strong> Traços marcantes, ideais.</li>
                <li><strong>Seus Medos:</strong> O que realmente o assombra?</li>
                <li><strong>Sua Motivação:</strong> Por que continuar?</li>
                <li><strong>Importante:</strong> Qual foi o <em>Incidente Deflagrador</em> que o tornou um Liminar?</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="text-xl font-bold text-amber-200 mb-3">2. Distribuir Pontos de Atributo - A Essência Bruta</h3>
              <p className="text-slate-300 mb-2"><strong>Atributos:</strong> Vigor, Agilidade, Mente, Espírito. Todos iniciam em 1.</p>
              <ul className="list-disc list-inside space-y-1 pl-4 mb-4 text-slate-300">
                <li>Você recebe <strong>5 Pontos de Atributo</strong> para distribuir.</li>
                <li><strong>Custo:</strong> Nível 2 = 1 ponto; Nível 3 = 2 pontos.</li>
                <li><strong>Nível Máximo Inicial:</strong> 3.</li>
              </ul>
              <div className="bg-slate-900/70 p-3 rounded-md border border-slate-600 mt-2">
                <p className="text-sm text-amber-100"><strong>Exemplo (Equilibrado/Resistente):</strong></p>
                <p className="text-sm text-slate-300">[Vigor 3 (3pts), Agilidade 1 (0pt), Mente 2 (1pt), Espírito 2 (1pt)] = Total 5 pontos.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="text-xl font-bold text-amber-200 mb-3">3. Distribuir Pontos de Perícia - O Verniz da Experiência</h3>
              <p className="text-slate-300 mb-2"><strong>Perícias:</strong> Combate, Investigação, Ocultismo, Interação, Técnica, Sobrevivência. Todas iniciam em 0 (não treinado).</p>
              <ul className="list-disc list-inside space-y-1 pl-4 mb-4 text-slate-300">
                <li>Você recebe <strong>12 Pontos de Perícia</strong> para distribuir.</li>
                <li><strong>Custo:</strong> Nível 1 = 1 ponto; Nível 2 = 2 pontos; Nível 3 = 3 pontos.</li>
                <li><strong>Nível Máximo Inicial:</strong> 3.</li>
              </ul>
              <div className="bg-slate-900/70 p-3 rounded-md border border-slate-600 mt-2">
                <p className="text-sm text-amber-100"><strong>Exemplo (Investigador Focado):</strong></p>
                <p className="text-sm text-slate-300">Invest. 3 (6pts), Ocultismo 2 (3pts), Interação 1 (1pt), Técnica 1 (1pt), Sobrevivência 1 (1pt).</p>
                <p className="text-sm text-slate-400 italic">Total: 12 pontos.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <h3 className="text-xl font-bold text-amber-200 mb-3">4. Calcular Vitalidade e Limite</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-red-900/20 p-4 rounded border border-red-900/50">
                  <p className="text-red-200 font-bold">Vitalidade Máxima</p>
                  <p className="text-xl">Vigor + 5</p>
                </div>
                <div className="bg-purple-900/20 p-4 rounded border border-purple-900/50">
                  <p className="text-purple-200 font-bold">Limite de Estilhaços</p>
                  <p className="text-xl">Espírito x 2</p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div>
              <h3 className="text-xl font-bold text-amber-200 mb-3">5. Escolher Focos - Dons e Peculiaridades</h3>
              <ul className="list-disc list-inside space-y-2 pl-4 mb-4 text-slate-300">
                <li>Você já recebe <strong>1 Foco Temático Gratuito</strong> da sua Ocupação Anterior.</li>
                <li>Escolha <strong>1 Foco livremente</strong>.</li>
                <li>Focos são talentos, conhecimentos, contatos, equipamentos ou sensibilidades especiais. Trabalhe com o Mestre para criar Focos que se encaixem no seu conceito.</li>
                <li>Tipicamente: +1d em situações específicas ou uma habilidade narrativa menor.</li>
              </ul>
              <div className="bg-slate-900/70 p-3 rounded-md border border-slate-600 mt-2">
                <p className="text-sm text-amber-100"><strong>Exemplos:</strong></p>
                <p className="text-sm text-slate-300">"Ouvido para Mentiras" (+1d Interação para detectar engano)</p>
                <p className="text-sm text-slate-300">"Biblioteca Particular" (acesso a livros raros entre casos)</p>
              </div>
            </div>

            {/* Equipamento */}
            <div>
              <h3 className="text-xl font-bold text-amber-200 mb-3">Equipamento e Recursos</h3>
              <ul className="list-disc list-inside space-y-1 pl-4 mb-4 text-slate-300">
                <li>Comece com roupas normais e itens básicos da sua Ocupação.</li>
                <li>Dinheiro inicial limitado (Mestre define, ex: 100-500).</li>
                <li>Inclua itens de Focos (se aplicável).</li>
                <li><strong>Atenção:</strong> Equipamento pesado/ilegal atrai atenção.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lista de Ocupações */}
        <OcupacoesList />
        
      </div>
    </div>
  );
};

export default Capitulo3;
