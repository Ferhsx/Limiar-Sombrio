export const grimorioData = [
    {
        id: 'capitulo-1',
        title: 'Capítulo 1: Introdução - O Véu se Rasga',
        content: `
            <p>
                O mundo que você habita é uma fina casca sobre uma profundidade insondável: o Além. Uma dimensão parasita, tecida com os fios puídos de energia psíquica, emoções fossilizadas em ódio e medo, e consciências fragmentadas que se recusam a mergulhar na não-existência. A maior parte da humanidade permanece felizmente cega, envolta em uma névoa de ignorância autoimposta. Mas vocês não. Vocês atravessaram o limiar. Vocês são <strong>Liminares</strong>.
            </p>
            <p>
                Talvez tenham nascido com uma sensibilidade dissonante, uma antena sintonizada nas frequências erradas. Talvez um evento traumático tenha estilhaçado suas defesas psíquicas, abrindo fendas para o Outro Lado. Talvez tenham buscado conhecimento em tomos mofados e sussurros proibidos. Ou talvez, foi apenas o mais puro e terrível azar. Qualquer que seja a causa, agora vocês enxergam. Sentem os arrepios errados na espinha, ouvem os sussurros nos estalos da casa vazia, e o pior: atraem a atenção faminta do Além. As manifestações sobrenaturais, as cicatrizes psíquicas no tecido da realidade que chamamos de <strong>Ecos</strong>, não são lendas urbanas para vocês. E as entidades que tecem essas teias de pavor, as <strong>Sombras</strong>, são predadores muito reais.
            </p>
            <p>
                Este jogo é sobre sobreviver nessa fronteira crepuscular. É sobre seguir os rastros deixados pelos Ecos, desenterrar as tragédias e os segredos que os alimentam para, talvez, silenciá-los. É sobre encarar as Sombras — armado com conhecimento proibido, astúcia forjada no desespero e, ocasionalmente, a força bruta necessária para ver o nascer do sol. Mas cada passo na escuridão tem um custo. O Além não apenas dilacera o corpo; ele corrói a mente, infecta o espírito, deixando marcas. Esses são seus <strong>Estilhaços</strong>, lascas da sua própria alma que se perdem a cada vislumbre do abismo. Acumule Estilhaços demais e a tensão o quebrará, causando uma <strong>Fratura</strong> — um colapso que reescreve quem você é, deixando uma <strong>Cicatrize</strong> indelével como lembrança. E então, a trilha sombria recomeça.
            </p>
            <p>
                Limiar Sombrio é um RPG de horror investigativo onde o conhecimento é sua maior arma, a sanidade é sua moeda mais valiosa, e a sobrevivência exige sacrifícios pessoais dolorosos. A verdadeira batalha, muitas vezes, não é contra os monstros lá fora, mas contra a escuridão que cresce dentro de você. Bem-vindo ao Limiar. Tente não se perder.
            </p>
        `
    },
    {
        id: 'capitulo-2',
        title: 'Capítulo 2: O Básico - Mecânicas Fundamentais',
        content: `
            <h3 class="text-xl font-bold text-amber-200 mt-4 mb-2">A Parada de Dados d6</h3>
            <p>
                Quando seu Liminar tenta uma ação significativa cujo sucesso é incerto, desafiador ou realizado sob pressão (definido pelo Mestre), você monta e rola uma Parada de Dados. O número de dados de seis faces (d6) na sua parada é determinado por:
            </p>
            <ul class="list-disc list-inside space-y-2 pl-4">
                <li>Seu nível no <strong>Atributo</strong> principal relevante para a ação (normalmente 1 a 5).</li>
                <li>Seu nível na <strong>Perícia</strong> relevante (0 se não treinado, até 5).</li>
                <li><strong>Modificadores:</strong> Dados bônus (+Xd) ou de penalidade (-Xd) concedidos por Focos pertinentes, equipamento especializado, condições ambientais favoráveis ou adversas, ou a influência direta de Sombras.</li>
            </ul>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Interpretando a Rolagem - Sucessos</h3>
            <p>
                Após rolar os dados, conte quantos resultaram em '6'. Cada '6' é um Sucesso. A quantidade de Sucessos dita o resultado da ação:
            </p>
            <div class="space-y-4 mt-4">
                <div class="bg-slate-900/50 p-4 rounded-md border border-slate-700">
                    <p><strong>0 Sucessos (Falha Total):</strong> A ação falha catastroficamente. As coisas não apenas não dão certo, como pioram significativamente. O Mestre descreve a consequência negativa, que deve impulsionar a narrativa.</p>
                    <p class="text-sm text-slate-400 italic mt-2"><strong>Exemplo:</strong> A porta não só não abre, como a fechadura emperra permanentemente; a testemunha se enfurece e recusa qualquer cooperação futura; o ritual de proteção falha, e um pulso de energia atrai a atenção da Sombra.</p>
                </div>
                <div class="bg-slate-900/50 p-4 rounded-md border border-slate-700">
                    <p><strong>1 Sucesso (Sucesso Marginal):</strong> Você alcança o objetivo básico, mas a um custo, com uma complicação, de forma incompleta ou com uma consequência indesejada. O Mestre pode oferecer uma escolha difícil ("Você abre a porta, mas o barulho alerta alguém?") ou impor a complicação.</p>
                    <p class="text-sm text-slate-400 italic mt-2"><strong>Exemplo:</strong> Você abre a porta fazendo um ruído alto; convence a testemunha, mas ela permanece desconfiada e lhe dará informações parciais; encontra a pista, mas deixa para trás um item pessoal seu.</p>
                </div>
                 <div class="bg-slate-900/50 p-4 rounded-md border border-slate-700">
                    <p><strong>2 Sucessos (Sucesso Pleno):</strong> Você realiza a ação com competência e sem consequências negativas diretas. O resultado é exatamente o esperado.</p>
                    <p class="text-sm text-slate-400 italic mt-2"><strong>Exemplo:</strong> Você abre a porta silenciosamente; a testemunha acredita em você e coopera; o ritual é completado corretamente.</p>
                </div>
                 <div class="bg-slate-900/50 p-4 rounded-md border border-slate-700">
                    <p><strong>3+ Sucessos (Sucesso Excepcional):</strong> Você não apenas tem sucesso, mas o faz de forma notável. Consegue um benefício extra, age com rapidez e eficiência surpreendentes, descobre algo a mais, ou causa um impacto maior.</p>
                    <p class="text-sm text-slate-400 italic mt-2"><strong>Exemplo:</strong> Arromba a porta rapidamente e nota um símbolo estranho arranhado na soleira; não só convence a testemunha, mas ela se lembra de um detalhe crucial e oferece uma Pista extra.</p>
                </div>
            </div>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Complicações por '1's (O Custo Oculto)</h3>
            <p>
                Mesmo em rolagens com 1 ou 2 Sucessos, se o número total de dados '1' for maior que o número de '6's, o Mestre pode introduzir uma complicação menor ou um revés sutil. É o universo cobrando um pequeno preço, a má sorte se imiscuindo.
            </p>
             <p class="text-sm text-slate-400 italic mt-2 border-l-4 border-slate-600 pl-4">
                <strong>Exemplo:</strong> Você consegue o que queria, mas deixa cair sua lanterna; a informação está correta, mas uma parte crucial está borrada. Em caso de Falha Total (0 Sucessos), um número elevado de '1's pode indicar uma <strong>Falha Crítica ("Botch")</strong> com consequências particularmente graves.
            </p>
        `
    },
    {
        id: 'capitulo-3',
        title: 'Capítulo 3: Criação de Personagens Liminares - Fragmentos de Humanidade',
        content: `
        <p class="mb-4 text-lg">
            Crie seu Liminar, uma alma tocada pelo Além, em 5 passos essenciais.
        </p>

        <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">1. Conceito e Ocupação</h3>
        <p class="mb-2">Quem você era antes da sua vida virar de cabeça para baixo? (Ex: Policial noturno, estudante de história, músico)</p>
        <ul class="list-disc list-inside space-y-2 pl-4 mb-4 text-slate-300">
            <li><strong>Defina sua Ocupação anterior:</strong> (Veja a lista abaixo). Ela concede <strong>+1 Ponto de Perícia</strong> e <strong>1 Foco Temático</strong> gratuito. Anote ambos.</li>
            <li><strong>Sua Personalidade:</strong> Traços marcantes, ideais.</li>
            <li><strong>Seus Medos:</strong> O que realmente o assombra?</li>
            <li><strong>Sua Motivação:</strong> Por que continuar?</li>
            <li><strong>Importante:</strong> Qual foi o <em>Incidente Deflagrador</em> que o tornou um Liminar?</li>
        </ul>

        <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">2. Distribuir Pontos de Atributo - A Essência Bruta</h3>
        <p class="mb-2"><strong>Atributos:</strong> Vigor, Agilidade, Mente, Espírito. Todos iniciam em 1.</p>
        <ul class="list-disc list-inside space-y-1 pl-4 mb-2 text-slate-300">
            <li>Você recebe <strong>5 Pontos de Atributo</strong> para distribuir.</li>
            <li><strong>Custo:</strong> Nível 2 = 1 ponto; Nível 3 = 2 pontos.</li>
            <li><strong>Nível Máximo Inicial:</strong> 3.</li>
        </ul>
        <div class="bg-slate-900/50 p-4 rounded-md border border-slate-700 mt-2">
            <p class="text-sm text-slate-400 italic"><strong>Exemplo (Equilibrado/Resistente):</strong><br> [Vigor 3 (3pts), Agilidade 1 (0pt), Mente 2 (1pt), Espírito 2 (1pt)] = Total 5 pontos.</p>
        </div>

        <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">3. Distribuir Pontos de Perícia - O Verniz da Experiência</h3>
        <p class="mb-2"><strong>Perícias:</strong> Combate, Investigação, Ocultismo, Interação, Técnica, Sobrevivência. Todas iniciam em 0 (não treinado).</p>
        <ul class="list-disc list-inside space-y-1 pl-4 mb-2 text-slate-300">
            <li>Você recebe <strong>12 Pontos de Perícia</strong> para distribuir.</li>
            <li><strong>Custo:</strong> Nível 1 = 1 ponto; Nível 2 = 2 pontos; Nível 3 = 3 pontos.</li>
            <li><strong>Nível Máximo Inicial:</strong> 3.</li>
        </ul>
        <div class="bg-slate-900/50 p-4 rounded-md border border-slate-700 mt-2">
            <p class="text-sm text-slate-400 italic"><strong>Exemplo (Investigador Focado):</strong><br>Investigação 3 (6pts), Ocultismo 2 (3pts), Interação 1 (1pt), Técnica 1 (1pt), Sobrevivência 1 (1pt).<br>Total: 12 pontos.</p>
        </div>

        <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">4. Calcular Vitalidade e Limite</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="bg-red-900/20 p-4 rounded border border-red-900/50">
                <strong class="text-red-200">Vitalidade Máxima</strong>
                <p class="text-xl">Vigor + 5</p>
            </div>
            <div class="bg-purple-900/20 p-4 rounded border border-purple-900/50">
                <strong class="text-purple-200">Limite de Estilhaços</strong>
                <p class="text-xl">Espírito x 2</p>
            </div>
        </div>

        <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">5. Escolher Focos - Dons e Peculiaridades</h3>
        <ul class="list-disc list-inside space-y-2 pl-4 mb-4 text-slate-300">
            <li>Você já recebe <strong>1 Foco Temático Gratuito</strong> da sua Ocupação Anterior.</li>
            <li>Escolha <strong>1 Foco livremente</strong>.</li>
            <li>Focos são talentos, conhecimentos, contatos, equipamentos ou sensibilidades especiais. Trabalhe com o Mestre para criar Focos que se encaixem no seu conceito.</li>
            <li>Tipicamente: +1d em situações específicas ou uma habilidade narrativa menor.</li>
        </ul>
        <div class="bg-slate-900/50 p-4 rounded-md border border-slate-700">
            <p class="text-sm text-slate-400 italic"><strong>Exemplo:</strong> "Ouvido para Mentiras" (+1d Interação para detectar engano), "Biblioteca Particular" (acesso a livros raros entre casos).</p>
        </div>

        <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Equipamento e Recursos</h3>
        <ul class="list-disc list-inside space-y-1 pl-4 mb-4 text-slate-300">
            <li>Comece com roupas normais e itens básicos da sua Ocupação.</li>
            <li>Dinheiro inicial limitado (Mestre define, ex: 100-500).</li>
            <li>Inclua itens de Focos (se aplicável).</li>
            <li><strong>Atenção:</strong> Equipamento pesado/ilegal atrai atenção.</li>
        </ul>

        <hr class="border-slate-700 my-8">

        <h3 class="text-2xl font-bold text-white mb-4 text-center">Lista de Ocupações Anteriores</h3>
        <p class="text-center text-slate-400 mb-6 text-sm">Se não encontrar o que pensou, contate o mestre.</p>
        
        <div class="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
            <div class="grid gap-4 md:grid-cols-2">
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Acadêmico (História/Antropologia/Folclore)</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Ocultismo.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Rato de Biblioteca" (+1d pesquisa) OU "Especialista em [Área]".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Antiquário/Curador de Museu</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Investigação OU Ocultismo.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Olho para o Valor Oculto" OU "Conhecimento de Procedência".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Artista (Músico/Pintor/Escritor)</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Interação OU Ocultismo.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Sensibilidade à Atmosfera" OU "Expressão Catártica".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Assistente Social</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Interação OU Investigação.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Rede de Apoio" OU "Empatia Protetora".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Atleta (Ex)</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Vigor OU Agilidade.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Pico de Adrenalina" OU "Disciplina Física".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Bartender/Dono de Bar</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Interação.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Ouvidos da Vizinhança" OU "Leitura de Clientes".</p>
                </div>
                 <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Bibliotecário/Arquivista</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Investigação OU Ocultismo.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Mestre da Pesquisa" OU "Guardião do Conhecimento".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Bombeiro</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Vigor OU Sobrevivência.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Coragem Sob Fogo" OU "Arrombamento de Emergência".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Caminhoneiro/Motorista</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Técnica OU Sobrevivência.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Conhecimento das Estradas" OU "Horas Sem Fim".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Coveiro/Agente Funerário</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Sobrevivência OU Ocultismo.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Proximidade com a Morte" OU "Conhecimento Cemiterial".</p>
                </div>
                 <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Criminoso (Ladrão/Golpista)</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Técnica OU Interação.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Contatos no Submundo", "Sumir na Multidão" OU "Tiro preciso".</p>
                </div>
                 <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Cultista Arrependido</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Ocultismo OU Interação.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Conhecimento Interno de Cultos" OU "Mestre da Dissimulação".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Detetive Particular</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Investigação.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Licença de Investigador" OU "Rede de Informantes".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Engenheiro/Técnico</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Técnica.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Entendimento de Máquinas" OU "Gambiarra Funcional".</p>
                </div>
                 <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Ex-Seminarista/Clérigo</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Ocultismo OU Interação.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Rituais de Proteção" OU "Presença Calmante".</p>
                </div>
                 <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Explorador Urbano</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Sobrevivência OU Agilidade.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Sentido de Direção Apurado" OU "Escalador Ágil".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Fazendeiro/Trabalhador Rural</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Sobrevivência OU Vigor.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Conhecimento da Terra" OU "Resistência Rústica".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Fotógrafo</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Investigação OU Técnica.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Olho para Detalhes Visuais" OU "Equipamento Confiável".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Hacker/TI</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Técnica OU Investigação.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Invasão Digital" OU "Navegador da Deep Web".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Jornalista Investigativo</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Investigação OU Interação.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Fontes Anônimas" OU "Fuçar Vidas Alheias".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Médico Legista/Perito</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Investigação OU Técnica.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Análise de Evidências Macabras" OU "Anatomia Detalhada".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Militar (Ex)</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Combate OU Sobrevivência.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Disciplina Tática" OU "Instinto de Sobrevivência".</p>
                </div>
                 <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Mágico/Ilusionista</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Técnica OU Interação.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Mestre da Distração" OU "Conhecimento de Fraudes".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Paramédico/Enfermeiro</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Sobrevivência.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Mãos Firmes Sob Pressão" OU "Estômago Forte".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Policial</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Combate OU Investigação.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Acesso Limitado a Arquivos" OU "Porte de Arma".</p>
                </div>
                 <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Professor</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Investigação OU Interação.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Habilidade Pedagógica" OU "Conhecimento Aprofundado".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Psicólogo/Terapeuta</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Interação.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Leitura Emocional" OU "Técnicas de Aconselhamento".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Segurança (Noturno)</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Investigação OU Combate.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Vigilância Treinada" OU "Acesso a Locais Vigiados".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
                    <strong class="text-amber-100 block">Zelador/Trabalhador Noturno</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Sobrevivência OU Investigação.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Mestre das Chaves" OU "Passar Despercebido".</p>
                </div>
                <div class="bg-slate-800/50 p-3 rounded border-l-4 border-red-500">
                    <strong class="text-red-200 block">Assassino</strong>
                    <p class="text-sm text-slate-300"><strong>Perícia:</strong> +1 Combate OU +1 Técnica.</p>
                    <p class="text-sm text-slate-300"><strong>Foco:</strong> "Morte limpa" OU "Mestre dos venenos".</p>
                </div>
            </div>
        </div>

        <hr class="border-slate-700 my-8">

        <h3 class="text-xl font-bold text-amber-200 mb-2">Ficha de Liminar (Modelo)</h3>
        <p class="mb-2 text-sm text-slate-400">Copie para usar.</p>
        <pre class="font-mono text-xs md:text-sm bg-black/30 p-4 rounded border border-slate-800 overflow-x-auto text-slate-300 leading-tight">
        LIMIAR SOMBRIO - FICHA DE LIMINAR
        (Não olhe muito fundo no abismo, ele pode olhar de volta.)
        I. IDENTIFICAÇÃO DO LIMINAR
        ---------------------------------------------------------------------
        Nome do Liminar: _______________________________________________________
        Conceito: ____________________________________________________________
        Ocupação Anterior: _____________________________________________________
        Incidente Deflagrador: _________________________________________________

        II. CAPACIDADES INTRÍNSECAS (ATRIBUTOS - Máx Inicial: 3)
        ---------------------------------------------------------------------
        VIGOR      [ ___ ]  (Resistência, Força)      [ ] [ ] [ ] [ ] [ ]
        AGILIDADE  [ ___ ]  (Reflexos, Coordenação)   [ ] [ ] [ ] [ ] [ ]
        MENTE      [ ___ ]  (Intelecto, Percepção)    [ ] [ ] [ ] [ ] [ ]
        ESPÍRITO   [ ___ ]  (Vontade, Intuição)       [ ] [ ] [ ] [ ] [ ]

        III. HABILIDADES ADQUIRIDAS (PERÍCIAS - Máx Inicial: 3)
        ---------------------------------------------------------------------
        COMBATE         [ ] [ ] [ ] [ ] [ ] (Base: Agilidade/Vigor)
        INVESTIGAÇÃO    [ ] [ ] [ ] [ ] [ ] (Base: Mente)
        OCULTISMO       [ ] [ ] [ ] [ ] [ ] (Base: Mente/Espírito)
        INTERAÇÃO       [ ] [ ] [ ] [ ] [ ] (Base: Espírito/Mente)
        TÉCNICA         [ ] [ ] [ ] [ ] [ ] (Base: Mente/Agilidade)
        SOBREVIVÊNCIA   [ ] [ ] [ ] [ ] [ ] (Base: Mente/Agilidade/Vigor)

        IV. CONDIÇÃO ATUAL
        ---------------------------------------------------------------------
        VITALIDADE: _____ / _____ (Atual / Máxima = Vigor + 5)
        Trilha de Dano:
        [ ] [ ] [ ] [ ] [ ] Saudável
        [ ] [ ] [ ] [ ] [ ] (Limite = Vigor => Ferido: -1d Físico)
        [ ] [ ] [ ] [ ] [ ] (Limite = Vigor/2 => Ferido Grave: -2d Físico)

        ESTILHAÇOS: _____ / _____ (Atuais / Limite = Espírito x 2)
        Trilha de Sanidade:
        [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] (← Perto do limite = pior)

        V. DONS & MALDIÇÕES (FOCOS E CICATRIZES)
        ---------------------------------------------------------------------
        FOCOS:
        1. Nome: _________________________ Efeito: _____________________________
        2. Nome: _________________________ Efeito: _____________________________

        CICATRIZES:
        1. Nome: _________________________ Efeito: _____________________________
        2. Nome: _________________________ Efeito: _____________________________

        VI. EQUIPAMENTO E PERTENCES
        ---------------------------------------------------------------------
        Arma(s): _____________________________________________________________
        Armadura: ____________________________________________________________
        Ferramentas: _________________________________________________________
        Itens: _______________________________________________________________

        VII. PROGRESSÃO
        ---------------------------------------------------------------------
        XP Atual: ______
        </pre>

        <h3 class="text-xl font-bold text-amber-200 mt-8 mb-2">Exemplo Preenchido: Steve Miner</h3>
        <pre class="font-mono text-xs md:text-sm bg-amber-900/10 p-4 rounded border border-amber-900/30 overflow-x-auto text-amber-100/80 leading-tight">
        Nome: Steve Miner | Conceito: Minerador aposentado lutando contra o Além
        Ocupação: Minerador (+1 Vigor, Foco: Picareta)
        Incidente: Viu uma "sombra" de criança zumbi no fundo da mina.

        ATRIBUTOS:
        VIGOR [4] AGILIDADE [1] MENTE [2] ESPÍRITO [2]

        PERÍCIAS PRINCIPAIS:
        Combate 3, Sobrevivência 2, Investigação 1, Interação 1, Técnica 1.

        VITALIDADE: 9 / 9
        ESTILHAÇOS: 0 / 4 (Limite = Espírito x 2 = 4)

        FOCOS:
        1. Rede de contato com Alex (Informante)
        2. Picareta Encantada (Dano mágico/energético contra sombras)

        EQUIPAMENTO:
        Picareta (2d6), Colete leve (Soak 1d6), Kit Primeiros Socorros, Amuleto.
        </pre>
    `
    },
    {
        id: 'capitulo-4',
        title: 'Capítulo 4: Atributos e Perícias em Detalhe - Anatomia de um Liminar',
        content: `
            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-4">Atributos (Capacidades Intrínsecas)</h3>
            
            <div class="space-y-4 text-slate-300 leading-relaxed">
                <p>
                    <strong class="text-white">Vigor:</strong> Resistência bruta a dano, veneno, doença; força física pura; capacidade de esforço prolongado; base para combate corporal e armas pesadas.
                </p>
                <p>
                    <strong class="text-white">Agilidade:</strong> Coordenação motora fina e grossa; reflexos; velocidade; furtividade; pontaria com armas de fogo e armas brancas leves; operar mecanismos delicados.
                </p>
                <p>
                    <strong class="text-white">Mente:</strong> Inteligência lógica; memória eidética; capacidade analítica; pesquisa e dedução; percepção de detalhes mundanos; conhecimento acadêmico; lidar com tecnologia complexa.
                </p>
                <p>
                    <strong class="text-white">Espírito:</strong> Força de vontade indomável; empatia e leitura emocional; resistência a medo, manipulação mental e corrupção espiritual; intuição e pressentimentos; percepção paranormal; base para interação social carismática ou intimidatória.
                </p>
            </div>

            <h3 class="text-xl font-bold text-amber-200 mt-8 mb-4">Perícias (Habilidades Adquiridas)</h3>
            <p class="text-sm text-slate-400 italic mb-4">(Se você tentar usar uma perícia na qual tem Nível 0, rola apenas os dados do Atributo base relevante.)</p>

            <div class="space-y-6 text-slate-300 leading-relaxed">
                <div>
                    <strong class="text-white block text-lg mb-1">Combate</strong>
                    <span class="text-xs text-amber-500 block mb-1 uppercase tracking-wide">(Base: Agilidade para armas de fogo/armas ágeis; Vigor para armas pesadas/corpo-a-corpo)</span>
                    <p>Usar armas brancas e de fogo com eficácia; lutar desarmado; táticas de combate.</p>
                </div>

                <div>
                    <strong class="text-white block text-lg mb-1">Investigação</strong>
                    <span class="text-xs text-amber-500 block mb-1 uppercase tracking-wide">(Base: Mente)</span>
                    <p>Procurar pistas físicas e digitais; analisar cenas de crime; conectar evidências díspares; deduzir motivos e padrões; rastrear informações em arquivos, bibliotecas ou na rede.</p>
                </div>

                <div>
                    <strong class="text-white block text-lg mb-1">Ocultismo</strong>
                    <span class="text-xs text-amber-500 block mb-1 uppercase tracking-wide">(Base: Mente para conhecimento/rituais; Espírito para sentir/canalizar)</span>
                    <p>Conhecimento sobre o Além, tipos de Sombras e Ecos, simbologia arcana, história sobrenatural; realizar rituais; identificar fenômenos paranormais; decifrar textos ou línguas mortas/proibidas.</p>
                </div>

                <div>
                    <strong class="text-white block text-lg mb-1">Interação</strong>
                    <span class="text-xs text-amber-500 block mb-1 uppercase tracking-wide">(Base: Espírito para persuasão/empatia/intimidação; Mente para engano/negociação)</span>
                    <p>Influenciar NPCs através da conversa; acalmar, intimidar, persuadir, mentir ou negociar; ler intenções e linguagem corporal.</p>
                </div>

                <div>
                    <strong class="text-white block text-lg mb-1">Técnica</strong>
                    <span class="text-xs text-amber-500 block mb-1 uppercase tracking-wide">(Base: Mente para eletrônica/computadores; Agilidade para mecânica/arrombamento)</span>
                    <p>Operar, consertar ou sabotar dispositivos mecânicos e eletrônicos; dirigir veículos sob pressão; arrombar fechaduras e desarmar sistemas de segurança mundanos.</p>
                </div>

                <div>
                    <strong class="text-white block text-lg mb-1">Sobrevivência</strong>
                    <span class="text-xs text-amber-500 block mb-1 uppercase tracking-wide">(Base: Mente para primeiros socorros/navegação; Agilidade para furtividade; Vigor para resistir a ambientes hostis)</span>
                    <p>Aplicar primeiros socorros; mover-se silenciosamente e evitar detecção; encontrar abrigo e navegar em ermos ou ruínas urbanas; suportar condições ambientais adversas.</p>
                </div>
            </div>
        `
    },
    {
        id: 'capitulo-5',
        title: 'Capítulo 5: Condição Mental - Estilhaços, Fraturas e Cicatrizes (O Preço da Percepção)',
        content: `
            <p class="mb-4 text-lg text-slate-300 italic">Olhar para o abismo desgasta a alma. O confronto com o Além deixa fissuras na sua sanidade.</p>

            <h3 class="text-xl font-bold text-red-300 mt-6 mb-2">Ganhando Estilhaços</h3>
            <p class="mb-2 text-slate-300">Sua reserva mental diminui quando você:</p>
            <ul class="list-disc list-inside space-y-2 pl-4 mb-6 text-slate-300">
                <li><strong>Força os Limites:</strong> Ganha 1 Estilhaço para cada '1' rolado (incluindo rerrolagens).</li>
                <li><strong>Testemunha o Inominável:</strong> Presencia eventos traumáticos, vislumbra a verdadeira forma grotesca de uma Sombra, ou experiencia horrores que quebram a percepção da realidade (Escala: 1-3+ Estilhaços, a critério do Mestre). Um teste bem-sucedido de Espírito contra uma Dificuldade definida pelo Mestre pode reduzir ou anular o ganho.</li>
                <li><strong>É Alvo de Ataques Psíquicos:</strong> Poderes de Sombras que visam diretamente sua mente, emoções ou espírito.</li>
                <li><strong>Falha em Testes de Vontade:</strong> Falhar em rolagens de Espírito para resistir a medo paralisante, controle mental, possessão ou desespero induzido sobrenaturalmente.</li>
                <li><strong>Exposição Prolongada:</strong> Permanece por tempo excessivo em locais saturados pela energia do Além (Nexus, locais de Ecos intensos).</li>
                <li><strong>Usa Poderes Perigosos:</strong> Certos Focos arcanos, rituais instáveis ou artefatos amaldiçoados cobram um pedágio direto na sua sanidade.</li>
            </ul>

            <h3 class="text-xl font-bold text-red-300 mt-6 mb-2">Limite de Estilhaços</h3>
            <p class="mb-4 text-slate-300">A quantidade máxima de Estilhaços que você pode suportar é igual ao seu Atributo <strong>Espírito</strong>. Acima disso, a pressão se torna insuportável.</p>

            <div class="bg-red-900/10 p-6 rounded-lg border border-red-900/40 mb-8">
                <h4 class="text-lg font-bold text-red-200 mb-2">Fratura - Quando a Mente Quebra</h4>
                <p class="mb-4 text-slate-300">Se o total de Pontos de Estilhaço que você acumulou atingir ou ultrapassar seu Limite de Estilhaços, você sofre uma Fratura. Sua mente se estilhaça sob o peso do trauma.</p>
                
                <strong class="text-red-200 block mb-2">Efeitos Imediatos (Perda de Controle):</strong>
                <p class="mb-2 text-slate-300">Você perde o controle de si mesmo por um curto período (geralmente uma cena ou até ser contido/a ameaça passar). O Mestre pode narrar sua reação ou você pode rolar 1d6:</p>
                <ul class="list-decimal list-inside space-y-1 pl-4 mb-4 text-slate-400 text-sm">
                    <li>Pânico Cego: Fuga desesperada e irracional.</li>
                    <li>Fúria Primitiva: Ataque violento e irracional ao mais próximo.</li>
                    <li>Catatonia: Desligamento completo, incapaz de agir.</li>
                    <li>Paranoia Aguda: Certeza delirante de traição, especialmente de aliados.</li>
                    <li>Alucinações Vívidas: A realidade se dissolve em um pesadelo acordado.</li>
                    <li>Colapso Total: Desmaio, convulsões, ou breve coma.</li>
                </ul>

                <strong class="text-red-200 block mb-2">A Sequela Permanente - Cicatrize:</strong>
                <p class="text-slate-300">Após o episódio de Fratura terminar, seus Pontos de Estilhaço retornam a zero. No entanto, a experiência o marcou para sempre. Você adquire uma <strong>Cicatrize</strong> – uma falha de caráter, um trauma psicológico, uma compulsão ou fobia que se torna parte permanente de quem você é.</p>
            </div>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Cicatrizes - As Feridas que Não Fecham</h3>
            <p class="mb-4 text-slate-300">Cicatrizes são desvantagens duradouras, reflexos das fraturas da sua alma. Elas sempre impõem uma desvantagem mecânica (penalidade em dados) ou narrativa (complicações sociais/comportamentais). O Mestre e o jogador devem definir juntos a Cicatrize, relacionando-a tematicamente ao que causou a Fratura.</p>
            
            <h4 class="font-bold text-white mb-2">Exemplos (com Penalidade Sugerida):</h4>
            <ul class="space-y-3 text-slate-300 text-sm">
                <li>
                    <strong class="text-amber-100">Fobia Incapacitante:</strong> (Ex: Agulhas, Sangue, Bonecas) Medo paralisante. Penalidade de -1d ou -2d em testes na presença do objeto da fobia.
                </li>
                <li>
                    <strong class="text-amber-100">Desconfiança Corrosiva:</strong> Incapaz de confiar. -1d em testes de Interação para formar laços, pedir ajuda, ou discernir a verdade.
                </li>
                <li>
                    <strong class="text-amber-100">Compulsão Obsessiva:</strong> (Ex: Arrumar simetricamente, contar) Comportamento incontrolável sob estresse. Em tensão, teste Espírito (Dif 1) para não perder Ação Principal.
                </li>
                <li>
                    <strong class="text-amber-100">Terror Noturno/Flashbacks:</strong> Recupera Estilhaços mais lentamente; pode começar o dia Amedrontado/Desorientado (teste Espírito, Dif 1).
                </li>
                <li>
                    <strong class="text-amber-100">Sensibilidade Dolorosa:</strong> (Ex: Luzes, sons, multidões) -1d em percepção em ambientes "barulhentos"; pode causar Desorientado.
                </li>
                <li>
                    <strong class="text-amber-100">Distanciamento Emocional:</strong> Dificuldade em sentir/expressar emoções. -1d em testes de Interação (empatia/carisma). Dificulta recuperação de Estilhaços via Terapia.
                </li>
            </ul>
            <p class="mt-4 text-slate-400 italic">Cicatrizes são marcas na alma. Mitigá-las é um processo árduo e custoso (ver Cap. 13).</p>
        `
    },
    {
        id: 'capitulo-6',
        title: 'Capítulo 6: Outras Condições de Estado - Feridas do Corpo e da Mente',
        content: `
            <p class="mb-6 text-slate-300">Além dos Estilhaços, seu corpo e sentidos podem sofrer temporariamente. Estas Condições impõem penalidades e podem se acumular.</p>

            <div class="grid gap-4 md:grid-cols-1">
                <div class="bg-slate-800/50 p-4 rounded border-l-4 border-red-500">
                    <strong class="text-white text-lg">Ferido</strong>
                    <p class="text-slate-300">Vitalidade ≤ Vigor. -1d em testes físicos (Vigor, Agilidade).</p>
                </div>

                <div class="bg-slate-800/50 p-4 rounded border-l-4 border-red-700">
                    <strong class="text-white text-lg">Ferido Gravemente</strong>
                    <p class="text-slate-300">Vitalidade ≤ Vigor/2 (arredondado para baixo, min 1). -2d em testes físicos. Mover-se exige esforço (teste de Vigor, Dif 1-2).</p>
                </div>

                <div class="bg-slate-800/50 p-4 rounded border-l-4 border-red-900">
                    <strong class="text-white text-lg">Incapacitado</strong>
                    <p class="text-slate-300">Vitalidade ≤ 0. Fora de ação, caído. Dano adicional pode ser fatal.</p>
                </div>

                <div class="bg-slate-800/50 p-4 rounded border-l-4 border-purple-500">
                    <strong class="text-white text-lg">Amedrontado</strong>
                    <p class="text-slate-300">Falhou em teste de Espírito contra medo. -1d em todas as paradas enquanto afetado. Superado com Ação Principal (teste Espírito, Dif 1-2) ou afastando-se.</p>
                </div>

                <div class="bg-slate-800/50 p-4 rounded border-l-4 border-yellow-500">
                    <strong class="text-white text-lg">Desorientado/Confuso</strong>
                    <p class="text-slate-300">Atordoado por golpe, explosão, choque psíquico. -1d em testes de Mente ou Agilidade por 1 rodada ou até passar em teste de Mente (Dif 1).</p>
                </div>

                <div class="bg-slate-800/50 p-4 rounded border-l-4 border-slate-500">
                    <strong class="text-white text-lg">Restrito</strong>
                    <p class="text-slate-300">Amarrado, agarrado, preso. Ações físicas limitadas/impossíveis. Requer teste (Vigor ou Agilidade, Dif 2-3+) para se soltar.</p>
                </div>

                <div class="bg-slate-800/50 p-4 rounded border-l-4 border-black">
                    <strong class="text-white text-lg">Cego/Surdo/Amordaçado</strong>
                    <p class="text-slate-300">Sentido privado. Penalidades severas (-2d+) ou impossibilita ações que dependem desse sentido.</p>
                </div>
            </div>
        `
    },
    {
        id: 'capitulo-7',
        title: 'Capítulo 7: Equipamento - Sobrevivência Mundana Contra o Horror Cósmico',
        content: `
            <p class="mb-6 text-slate-300">O equipamento certo pode ser a diferença entre ser um investigador ou uma vítima.</p>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Armas Mundanas</h3>
            <p class="text-sm text-slate-400 mb-4">(Usam a perícia Combate. Dano subtrai da Vitalidade)</p>
            
            <ul class="space-y-3 text-slate-300 mb-8">
                <li><strong class="text-white">Pequenas Brancas (Faca, Canivete, Soco Inglês):</strong> 1d6 Dano Vigor. Fáceis de esconder.</li>
                <li><strong class="text-white">Médias Brancas (Cassetete, Pé de cabra, Machado de mão):</strong> 2d6 Dano Vigor. Conspícuas.</li>
                <li><strong class="text-white">Grandes Brancas (Espada, Cano de chumbo, Marreta):</strong> 3d6 Dano Vigor. Difíceis de manejar/esconder (Vigor 2+).</li>
                <li><strong class="text-white">Pistola/Revólver Leve (.38, 9mm):</strong> 2d6 Dano Vigor. Alcance Médio.</li>
                <li><strong class="text-white">Pistola/Revólver Pesado (.44 Magnum, .50 AE):</strong> 3d6 Dano Vigor. Alcance Médio. Barulhenta, recuo (Vigor 2+). Munição rara/cara.</li>
                <li><strong class="text-white">Espingarda (Calibre 12):</strong> 5d6 Dano Vigor. Alcance Curto. Devastadora. Pode atingir múltiplos alvos (penalidade). Extremamente barulhenta.</li>
                <li><strong class="text-white">Rifle (Caça .30-06, Assalto 5.56mm):</strong> 6d6 Dano Vigor. Alcance Longo. Precisa. Lenta para recarregar (caça) ou ilegal (assalto). Barulhenta.</li>
                <li class="italic text-slate-400">Munição: Deve ser rastreada. Recarregar custa Ação Menor ou Principal.</li>
            </ul>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Armadura Mundana (Absorção - Soak)</h3>
            <p class="text-sm text-slate-300 mb-4">Proteção contra dano físico. Role dados de Soak ao ser atingido; cada '6' cancela 1 ponto de dano.</p>
            
            <ul class="space-y-3 text-slate-300 mb-6">
                <li><strong class="text-white">Leve (Jaqueta de couro reforçada, Colete balístico fino):</strong> Soak 1d6. Sem penalidades significativas.</li>
                <li><strong class="text-white">Média (Colete tático policial pesado, Armadura de motociclista):</strong> Soak 2d6. Pode impor -1d em Agilidade/Furtividade. Visível.</li>
                <li><strong class="text-white">Pesada (Armadura de assalto completa):</strong> Soak 3d6. Penalidade -2d em Agilidade/Furtividade. Muito visível e restritiva.</li>
            </ul>
            <div class="bg-red-900/20 border border-red-900/50 p-3 rounded text-red-200 text-sm">
                <strong>Limitação Crucial:</strong> Protege apenas contra dano físico. Inútil contra dano a Estilhaços, magia, energia, etc., a menos que encantada.
            </div>

            <h3 class="text-xl font-bold text-amber-200 mt-8 mb-2">Ferramentas de Investigação/Técnica</h3>
            <ul class="space-y-2 text-slate-300">
                <li><strong class="text-white">Kit de Arrombamento:</strong> Necessário para testes de Técnica (Agilidade) em fechaduras mecânicas.</li>
                <li><strong class="text-white">Kit de Eletrônica:</strong> +1d ou necessário para testes de Técnica (Mente) em eletrônicos complexos.</li>
                <li><strong class="text-white">Kit de Primeiros Socorros:</strong> Permite testes de Sobrevivência (Mente) para curar Vitalidade, tem 3 usos. (Cap. 12).</li>
            </ul>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Itens Para-Reais/Rituais</h3>
            <p class="text-slate-300">Sal consagrado, água benta, giz de osso, prata pura, relíquias, ervas, componentes bizarros. Podem ser Pistas, componentes para Rituais (Cap. 11), ou proteção mínima (via Focos).</p>
        `
    },
    {
        id: 'capitulo-8',
        title: 'Capítulo 8: Exploração e Investigação - Seguindo os Fios da Loucura',
        content: `
            <p class="mb-6 text-slate-300">A investigação é sua melhor chance de sobrevivência. Desvendar o mistério é a chave.</p>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Cenários Assombrados</h3>
            <p class="text-slate-300 mb-4">Locais marcados por trauma, negligência ou atos sombrios: hospitais abandonados, casas de assassinato, bibliotecas esquecidas, becos de lendas urbanas. Seus campos de caça às Pistas.</p>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Encontrando Pistas - Os Fragmentos da Verdade</h3>
            <p class="text-slate-300 mb-2">Exige trabalho ativo. Use a Perícia + Atributo apropriado:</p>
            <ul class="list-disc list-inside space-y-1 pl-4 mb-4 text-slate-300 text-sm">
                <li>Investigação (Mente): Examinar locais, deduzir.</li>
                <li>Ocultismo (Mente/Espírito): Decifrar símbolos, sentir resíduos psíquicos.</li>
                <li>Sobrevivência: Rastrear fisicamente.</li>
                <li>Técnica: Dados digitais.</li>
                <li>Interação: Extrair relatos de testemunhas, diários.</li>
            </ul>

            <h4 class="font-bold text-white mb-2">Resultado por Sucesso:</h4>
            <ul class="space-y-2 text-slate-300 mb-6">
                <li><strong class="text-red-400">Falha:</strong> Nenhuma Pista, desinformação, ou alerta a entidade.</li>
                <li><strong class="text-amber-200">Sucesso Marginal (1):</strong> Pista incompleta, danificada, ou atrai atenção indesejada.</li>
                <li><strong class="text-green-400">Sucesso Pleno (2):</strong> Encontra a Pista de forma clara e eficiente.</li>
                <li><strong class="text-blue-400">Sucesso Excepcional (3+):</strong> Encontra a Pista e percebe conexões, ou encontra Pista adicional.</li>
            </ul>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">O Que São Pistas?</h3>
            <p class="text-slate-300 mb-2">Pedaços de informação que revelam sobre a ameaça:</p>
            <ul class="list-disc list-inside space-y-1 pl-4 mb-4 text-slate-300">
                <li>Identidade da Sombra</li>
                <li>Motivações</li>
                <li>Passado</li>
                <li>Fraqueza Crucial</li>
                <li>Localização da Âncora/Nexus</li>
                <li>Passos/Componentes de um Ritual</li>
            </ul>

            <div class="bg-slate-800/50 p-4 rounded border border-slate-700 mb-6">
                <h4 class="font-bold text-white mb-1">O Mestre é o Guardião do Quebra-Cabeça</h4>
                <p class="text-sm text-slate-300">O Mestre sabe as Pistas Chave e quantas são necessárias. Encontrar é o primeiro passo; interpretar e conectar (teste Mente + Investigação/Ocultismo) traz a revelação.</p>
            </div>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">A Importância Vital das Pistas</h3>
            <p class="text-slate-300 mb-4">A maioria das Sombras significativas não pode ser derrotada por violência mundana. Somente explorando suas Fraquezas ou executando Rituais (descobertos via Pistas) você tem chance real de neutralizá-las. Ignorar a investigação é cortejar a morte ou a loucura.</p>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Percepção Passiva - O Arrepio na Espinha</h3>
            <p class="text-slate-300">Liminares atentos (Mente/Espírito altos) ou com Focos relevantes podem notar detalhes sutis ou sentir quando algo está errado sem um teste ativo. O Mestre pode narrar sensações ou pedir rolagens discretas.</p>
        `
    },
    {
        id: 'capitulo-9',
        title: 'Capítulo 9: Confronto - Quando a Investigação Encontra a Violência',
        content: `
            <p class="mb-6 text-slate-300">O confronto no Limiar Sombrio é brutal, desesperado e muitas vezes, uma batalha pela alma.</p>

            <h3 class="text-xl font-bold text-red-400 mt-6 mb-2">Iniciativa - Agindo Sob Pressão</h3>
            <ul class="list-disc list-inside space-y-1 pl-4 mb-4 text-slate-300">
                <li>Todos os participantes rolam Agilidade.</li>
                <li>Ordem de ação: do maior número de Sucessos para o menor.</li>
                <li>Empates: Maior Agilidade ou rolagem de 1d6.</li>
                <li class="italic text-sm text-slate-400">Sugestão Simples: Jogador rola 1d6 + Agilidade; Mestre rola 1d6 + Agilidade/Astúcia da Sombra. Maior vai primeiro.</li>
            </ul>

            <h3 class="text-xl font-bold text-red-400 mt-6 mb-2">A Rodada de Combate - Segundos de Caos</h3>
            <p class="text-slate-300 mb-2">Em seu turno, seu personagem tipicamente pode realizar:</p>
            <ul class="space-y-2 text-slate-300 mb-6">
                <li><strong class="text-white">Uma Ação Principal:</strong> A ação mais significativa (Atacar, Ritual, Investigar, Primeiros Socorros, Intimidar). Requer teste de perícia.</li>
                <li><strong class="text-white">Um Movimento:</strong> Até o dobro do Vigor em metros. Antes, durante ou depois da Ação Principal.</li>
                <li><strong class="text-white">Uma Ação Menor (Opcional):</strong> Ação rápida (falar, sacar arma fácil, largar item). Sujeito à aprovação do Mestre.</li>
                <li><strong class="text-white">Uma Reação (Opcional):</strong> Ação defensiva fora do seu turno (Esquivar, Bloquear). Uma por rodada. Usar impede outra Reação até o próximo turno.</li>
            </ul>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Posicionamento e Ambiente - Usando o Terreno</h3>
            <ul class="list-disc list-inside space-y-1 pl-4 mb-4 text-slate-300">
                <li><strong>Cobertura:</strong> Penalidade aos ataques contra você (-1d leve, -2d pesada, -3d quase total).</li>
                <li><strong>Deitar (Prone):</strong> Dificulta ser atingido à distância (-1d ou -2d), mas vulnerável corpo-a-corpo. Custa Ação Menor ou Movimento para levantar.</li>
            </ul>

            <h3 class="text-xl font-bold text-red-400 mt-6 mb-2">Realizando um Ataque</h3>
            <ol class="list-decimal list-inside space-y-1 pl-4 mb-4 text-slate-300">
                <li>Declare alvo e arma/método.</li>
                <li>Faça teste de Combate + Atributo relevante.</li>
                <li>Compare com:
                    <ul class="list-disc list-inside pl-6 mt-1 text-sm text-slate-400">
                        <li>Dificuldade Fixa (Dif): Definida pelo Mestre (1=Fácil, 2=Médio, 3+=Difícil).</li>
                        <li>OU Defesa Ativa do Alvo: Alvo usa Reação para rolar defesa (Esquivar: Agilidade; Aparar/Bloquear: Combate). Sucessos dele subtraem dos seus.</li>
                    </ul>
                </li>
                <li>Acerto: Se seus Sucessos líquidos ≥ 1.</li>
            </ol>

            <h3 class="text-xl font-bold text-red-400 mt-6 mb-2">Aplicando Dano - A Dor é Real</h3>
            
            <div class="space-y-4">
                <div class="bg-red-900/10 p-4 rounded border-l-4 border-red-600">
                    <strong class="text-red-200 block mb-1">Dano Físico (Vitalidade):</strong>
                    <ul class="list-disc list-inside text-slate-300 text-sm">
                        <li>Role o dano da arma/ataque.</li>
                        <li>Alvo rola Soak da armadura (se houver). Cada '6' anula 1 ponto de dano.</li>
                        <li>Dano restante subtrai da Vitalidade.</li>
                    </ul>
                </div>

                <div class="bg-purple-900/10 p-4 rounded border-l-4 border-purple-600">
                    <strong class="text-purple-200 block mb-1">Dano à Sanidade (Estilhaços):</strong>
                    <ul class="list-disc list-inside text-slate-300 text-sm">
                        <li>Ataques psíquicos, visões, auras de terror (geralmente ignoram armadura).</li>
                        <li>Alvo faz teste de resistência (normalmente Espírito) contra Dificuldade ou rolagem da Sombra.</li>
                        <li>Falha: Sofre Estilhaços indicados.</li>
                        <li>Sucesso: Sofre metade (arredondado para cima) ou 1 Estilhaço.</li>
                        <li>Sucesso Excepcional: Pode negar o dano a Estilhaços.</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 'capitulo-10',
        title: 'Capítulo 10: As Sombras - Horrores Que Espreitam Além',
        content: `
            <p class="mb-6 text-slate-300">As entidades do Além são variadas e aterradoras. Entendê-las é crucial.</p>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Estrutura de uma Sombra (Guia do Mestre)</h3>
            <ul class="space-y-2 text-slate-300 mb-6">
                <li><strong>Tipo/Nome:</strong> Classificação e identidade (Ex: Fantasma Agonizante, Poltergeist Violento).</li>
                <li><strong>Potência (1-5+):</strong> Medida de poder geral. Afeta estatísticas, dificuldade de resistência, resiliência, XP. (Potência 3+ = ameaça séria).</li>
                <li><strong>Atributos/Perícias Sombrias:</strong> Pools de dados (Ex: Manipulação Mental 6d6) ou Atributos simplificados (Astúcia, Força, Vontade, Medo).</li>
                <li><strong>Vitalidade/Essência:</strong> Reserva física ou etérea. Podem ter regeneração.</li>
                <li><strong>Resistências e Imunidades:</strong> O que as afeta pouco ou nada (Ex: Imune a dano físico não-mágico, Resistente a fogo).</li>
                <li><strong>Frailidades (Fraquezas):</strong> A "chave" para feri-las ou bani-las (Ex: prata, luz solar, Nome Verdadeiro, Ritual). Descobertas via Pistas. Geralmente ignoram Resistências/Imunidades.</li>
                <li><strong>Habilidades Sobrenaturais:</strong> Poderes únicos (Ex: Incorporeidade, Possessão, Telecinese, Induzir Loucura).</li>
                <li><strong>Ataques:</strong> Como causam Dano (Vitalidade ou Estilhaços) ou aplicam Condições.</li>
            </ul>

            <div class="bg-slate-800/50 p-4 rounded border border-amber-500/50">
                <strong class="text-amber-200 block mb-1">A Fraqueza é Fundamental</strong>
                <p class="text-slate-300">A maioria das Sombras poderosas não pode ser destruída por força bruta. Investigar sua Fraqueza ou o Ritual de banimento é a estratégia central.</p>
            </div>
        `
    },
    {
        id: 'capitulo-11',
        title: 'Capítulo 11: Rituais e o Além - Dobrando as Leis da Realidade',
        content: `
            <p class="mb-6 text-slate-300">Rituais usam Ocultismo, fé e vontade para influenciar o Além. São poderosos, mas instáveis e perigosos.</p>

            <h3 class="text-xl font-bold text-purple-300 mt-6 mb-2">Realizando Rituais</h3>
            <p class="text-slate-300 mb-2">Exige Ocultismo (Mente ou Espírito) e:</p>
            <ul class="list-disc list-inside space-y-1 pl-4 mb-4 text-slate-300">
                <li><strong>Tempo:</strong> Rodadas, horas ou dias.</li>
                <li><strong>Componentes:</strong> Ingredientes específicos (físicos/simbólicos), muitas vezes descobertos como Pistas.</li>
                <li><strong>Local adequado:</strong> Nexus, local purificado, círculo ritualístico.</li>
                <li><strong>Invocação/Palavras de Poder:</strong> Frases, cânticos, nomes. Encontrados em Pistas (grimórios, etc.).</li>
                <li><strong>Concentração:</strong> Interrupções podem causar falhas ou efeitos colaterais.</li>
            </ul>

            <h3 class="text-xl font-bold text-purple-300 mt-6 mb-2">Mecânicas Rituais</h3>
            <ul class="space-y-2 text-slate-300 mb-6">
                <li><strong>Teste Único:</strong> Para rituais rápidos/simples. Teste de Ocultismo vs. Dificuldade (Dif 2-4+).</li>
                <li><strong>Teste Prolongado:</strong> Para rituais complexos. Acumular Sucessos em testes de Ocultismo ao longo do tempo. Falhas podem aumentar tempo, consumir componentes, atrair perigo, causar dano (Vitalidade/Estilhaços), ou distorcer o efeito. Falha Crítica = Catástrofe.</li>
            </ul>

            <h3 class="text-xl font-bold text-purple-300 mt-6 mb-2">Tipos Comuns de Rituais</h3>
            <ul class="list-disc list-inside space-y-1 pl-4 mb-4 text-slate-300">
                <li><strong>Banimento/Exorcismo:</strong> Expulsar/destruir Sombras. Difíceis e perigosos.</li>
                <li><strong>Proteção/Selamento:</strong> Criar barreiras, amuletos, selar passagens. Muitas vezes temporários.</li>
                <li><strong>Contato/Comunicação:</strong> Falar com entidades ou espíritos (arriscado!).</li>
                <li><strong>Clarividência/Adivinhação:</strong> Obter Pistas, visões (informações crípticas).</li>
                <li><strong>Cura Paranormal:</strong> Remover Estilhaços ou aliviar Cicatrizes (raro, exige poder/sacrifício).</li>
            </ul>

            <p class="text-red-300 italic mt-4">O Custo Inerente dos Rituais: Manipular o Além tem um preço: perda de Estilhaços, sacrifício de Vitalidade, atrair algo pior, corrupção, marcas físicas/mentais.</p>
        `
    },
    {
        id: 'capitulo-12',
        title: 'Capítulo 12: Recuperação e Downtime - Juntando os Cacos',
        content: `
            <p class="mb-6 text-slate-300">Entre os casos, Liminares precisam de Tempo Livre (Downtime) para curar corpo e mente.</p>

            <h3 class="text-xl font-bold text-green-400 mt-6 mb-2">Recuperação de Vitalidade</h3>
            <div class="space-y-4 text-slate-300">
                <div>
                    <strong class="text-white block">Primeiros Socorros (Imediato):</strong>
                    <ul class="list-disc list-inside pl-4 text-sm">
                        <li>Requer Kit de Primeiros Socorros. Teste de Sobrevivência (Mente) (Dif 2 Ferido, Dif 3 Gravemente Ferido).</li>
                        <li>Sem kit: -1d ou -2d. Usado uma vez por conjunto de ferimentos.</li>
                        <li>1 Sucesso: Cura 1d6 Vitalidade.</li>
                        <li>2 Sucessos: Cura 2d6 Vitalidade.</li>
                        <li>3+ Sucessos: Cura 3d6 Vitalidade.</li>
                    </ul>
                </div>
                <div>
                    <strong class="text-white block">Descanso (Diário):</strong>
                    <span class="text-sm">6-8 horas de sono seguro curam Vitalidade igual ao nível de Vigor.</span>
                </div>
                <div>
                    <strong class="text-white block">Repouso Completo (Tempo Livre):</strong>
                    <span class="text-sm">Uma semana de descanso total geralmente restaura toda a Vitalidade e ajuda a remover Condições de Ferimento.</span>
                </div>
            </div>

            <h3 class="text-xl font-bold text-blue-400 mt-8 mb-2">Recuperação de Estilhaços (Durante o Tempo Livre)</h3>
            <p class="text-slate-300 mb-2">Processo lento e ativo. Requer esforço focado. Só UM método por período de Tempo Livre (ex: por semana).</p>
            
            <strong class="text-white block mb-2 mt-4">Escolha UM Método de Recuperação por Semana:</strong>
            <ul class="list-disc list-inside space-y-2 pl-4 mb-4 text-slate-300">
                <li><strong>Terapia/Desabafo (Interação ou Espírito):</strong> Conversar com alguém de confiança. Teste Espírito + Interação (Dif 2-3). Cicatrizes relevantes podem penalizar.</li>
                <li><strong>Meditação/Purificação (Espírito ou Ocultismo):</strong> Técnicas de autocuidado espiritual/mental. Teste Espírito ou Mente + Ocultismo (Dif 2-3). Requer local calmo.</li>
                <li><strong>Ancorar-se na Realidade (Mente ou Perícia Mundana):</strong> Focar em hobbies, trabalho, vida normal. Teste Mente ou Perícia mundana relevante (Dif 2). Menos eficaz para traumas profundos.</li>
            </ul>

            <strong class="text-white block mb-2">Sucessos no Teste de Recuperação:</strong>
            <ul class="list-disc list-inside space-y-1 pl-4 mb-4 text-slate-300 text-sm">
                <li>0 Sucessos (Falha): Nenhum Estilhaço recuperado. Pode piorar (+1 Estilhaço em Falha Crítica).</li>
                <li>1 Sucesso (Marginal): Recupera 1 Ponto de Estilhaço.</li>
                <li>2 Sucessos (Pleno): Recupera 2 Pontos de Estilhaço.</li>
                <li>3+ Sucessos (Excepcional): Recupera 3 Pontos de Estilhaço.</li>
            </ul>
            <p class="text-sm text-slate-400 italic">Lembre-se: Após uma Fratura, Estilhaços zeram, mas a Cicatrize permanece.</p>
        `
    },
    {
        id: 'capitulo-13',
        title: 'Capítulo 13: Progressão (XP) - Aprendendo com a Dor',
        content: `
            <p class="mb-6 text-slate-300">A Experiência (XP) representa o aprendizado forjado no horror.</p>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Ganhando Pontos de Experiência (XP)</h3>
            <p class="text-sm text-slate-400 mb-2">(Concedido pelo Mestre ao final de sessões ou arcos)</p>
            <ul class="list-disc list-inside space-y-1 pl-4 mb-6 text-slate-300">
                <li>Participação na Sessão: 1 XP.</li>
                <li>Superar Desafio Significativo: 1-3 XP (dependendo da dificuldade).</li>
                <li>Desvendar Pista Crucial: 1 XP por revelação impactante.</li>
                <li>Resolver Eco/Banir Sombra: 2-5 XP (dependendo da Potência/complexidade).</li>
                <li>Sobreviver a uma Fratura: 1 XP.</li>
                <li>Interpretação Notável: 1 XP (a critério do Mestre).</li>
            </ul>

            <h3 class="text-xl font-bold text-amber-200 mt-6 mb-2">Gastando Pontos de Experiência (XP)</h3>
            <p class="text-sm text-slate-400 mb-2">Requer Tempo Livre (tipicamente uma semana) e foco. Uma melhoria por período de Tempo Livre (salvo exceções).</p>
            <ul class="list-disc list-inside space-y-2 pl-4 mb-6 text-slate-300">
                <li><strong>Aumentar Nível de Perícia:</strong> Custo = (Nível Novo) x 2 XP. (Máx. 5)
                    <br><span class="text-xs text-slate-500 ml-4">Ex: Investigação 3 -> 4 custa 4 x 2 = 8 XP.</span>
                </li>
                <li><strong>Aumentar Nível de Atributo:</strong> Custo = (Nível Novo) x 5 XP. (Máx. 5)
                    <br><span class="text-xs text-slate-500 ml-4">Ex: Espírito 3 -> 4 custa 4 x 5 = 20 XP.</span>
                </li>
                <li><strong>Adquirir um Novo Foco:</strong> Custo = 10 XP. Requer justificativa narrativa.</li>
                <li><strong>Melhorar um Foco Existente:</strong> Custo = 5 XP. Requer aprovação e justificativa.</li>
                <li><strong>Mitigar uma Cicatrize:</strong> (Reduzir penalidade/frequência). Custo = 15-20 XP. Extremamente difícil. Requer arco de história dedicado. Não remove, apenas suaviza.</li>
            </ul>
        `
    },
    {
        id: 'capitulo-14',
        title: 'Capítulo 14: O Mestre Liminar - O Guardião do Véu',
        content: `
            <p class="mb-6 text-slate-300">Seu papel é criar um mundo envolvente, perigoso, tecer mistérios, personificar horrores e reagir às ações dos jogadores.</p>

            <ul class="space-y-4 text-slate-300">
                <li>
                    <strong class="text-amber-100 block">Prepare Ecos e Sombras:</strong>
                    Defina natureza, história, motivações, poderes, Fraquezas e Pistas. Pense em camadas e onde/como as Pistas são encontradas.
                </li>
                <li>
                    <strong class="text-amber-100 block">Construa a Atmosfera:</strong>
                    Use descrições sensoriais e paranormais. Foque em detalhes perturbadores, silêncio, decadência, frio. Construa tensão.
                </li>
                <li>
                    <strong class="text-amber-100 block">Gerencie a Tensão e o Ritmo:</strong>
                    Alterne investigação, sustos, tensão crescente, confrontos e dilemas. Use Estilhaços como termômetro. Custe Estilhaços por testemunhar horrores.
                </li>
                <li>
                    <strong class="text-amber-100 block">Abrace os '1's:</strong>
                    Use rolagens de '1' como Custos e Complicações criativas (equipamento falha, alerta inimigos, NPC se volta contra eles).
                </li>
                <li>
                    <strong class="text-amber-100 block">Consequências Impulsionam a História:</strong>
                    Falhas devem ter impacto narrativo, não apenas parar a ação.
                </li>
                <li>
                    <strong class="text-amber-100 block">Recompense a Investigação Inteligente:</strong>
                    Fraquezas devem ser a forma mais eficaz (ou única) de vencer Sombras significativas.
                </li>
                <li>
                    <strong class="text-amber-100 block">Roleplay NPCs e Sombras:</strong>
                    Dê vida a eles com personalidades, medos e agendas. Sombras devem ter caráter, não ser só estatísticas.
                </li>
                <li>
                    <strong class="text-amber-100 block">Gerencie os Estilhaços com Cuidado:</strong>
                    Registre, use o Limite como ponto de tensão. Crie Cicatrizes significativas com os jogadores.
                </li>
                <li>
                    <strong class="text-amber-100 block">Seja Justo, Mas Não Puxe Socos:</strong>
                    A mortalidade e a fragilidade da sanidade são temas centrais. Recuar pode ser a escolha inteligente.
                </li>
                <li>
                    <strong class="text-amber-100 block">Ferramentas de Segurança são Essenciais:</strong>
                    Estabeleça limites (Sessão Zero). Use ferramentas como Cartas X/N, Linhas e Véus, Check-ins. O objetivo é o medo divertido, não o trauma real.
                </li>
            </ul>

            <p class="mt-8 text-center text-amber-200 font-bold italic">Agora você e seus amigos estão prontos para se divertir se imaginando nesse mundo de terror e mistérios.</p>
            <p class="text-center text-slate-400 mt-2">Obrigado por lerem até aqui.</p>
        `
    }
]