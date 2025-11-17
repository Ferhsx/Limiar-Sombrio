import Section from "../ui/Section";

export default function CriacaoPersonagem() {
    return (
        <div className="space-y-6">
            <Section title="Criação de Personagens Liminares - Fragmentos de Humanidade">
                <p className="text-lg mb-4">
                    Crie seu Liminar, uma alma tocada pelo Além, em 5 passos:
                </p>
                
                <div className="space-y-8">
                    {/* Passo 1 */}
                    <div className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-amber-500/70">
                        <h3 className="text-xl font-bold text-amber-200 mb-3">1. Conceito e Ocupação</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Quem você era antes da sua vida virar de cabeça para baixo? (Ex: Policial noturno, estudante de história, músico)</li>
                            <li>Defina sua Ocupação anterior (veja a lista de ocupações abaixo).</li>
                            <li>Sua Personalidade (traços marcantes, ideais).</li>
                            <li>Seus Medos (o que realmente o assombra?).</li>
                            <li>Sua Motivação (por que continuar?).</li>
                            <li><strong>Importante:</strong> Qual foi o Incidente Deflagrador que o tornou um Liminar?</li>
                        </ul>
                    </div>

                    {/* Passo 2 */}
                    <div className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-amber-500/70">
                        <h3 className="text-xl font-bold text-amber-200 mb-3">2. Distribuir Pontos de Atributo - A Essência Bruta</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Atributos:</strong> Vigor, Agilidade, Mente, Espírito.</li>
                            <li>Todos iniciam em 1.</li>
                            <li>Você recebe 5 Pontos de Atributo para distribuir.</li>
                            <li><strong>Custo:</strong> Nível 2 = 1 ponto; Nível 3 = 2 pontos.</li>
                            <li><strong>Nível Máximo Inicial:</strong> 3.</li>
                            <li className="italic">Exemplo (Equilibrado/Resistente): [Vigor 3 (3pts), Agilidade 1 (0pt), Mente 2 (1pt), Espírito 2 (1pt)] = Total 5 pontos.</li>
                        </ul>
                    </div>

                    {/* Passo 3 */}
                    <div className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-amber-500/70">
                        <h3 className="text-xl font-bold text-amber-200 mb-3">3. Distribuir Pontos de Perícia - O Verniz da Experiência</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Perícias:</strong> Combate, Investigação, Ocultismo, Interação, Técnica, Sobrevivência.</li>
                            <li>Todas iniciam em 0 (não treinado).</li>
                            <li>Você recebe 12 Pontos de Perícia para distribuir.</li>
                            <li><strong>Custo:</strong> Nível 1 = 1 ponto; Nível 2 = 2 pontos; Nível 3 = 3 pontos.</li>
                            <li><strong>Nível Máximo Inicial:</strong> 3.</li>
                            <li className="italic">Exemplo (Investigador Focado): Investigação 3 (6pts), Ocultismo 2 (3pts), Interação 1 (1pt), Técnica 1 (1pt), Sobrevivência 1 (1pt). Total: 12 pontos. Final: Combate 0, Investigação 3, Ocultismo 2, Interação 1, Técnica 1, Sobrevivência 1.</li>
                        </ul>
                    </div>

                    {/* Passo 4 */}
                    <div className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-amber-500/70">
                        <h3 className="text-xl font-bold text-amber-200 mb-3">4. Calcular Vitalidade e Limite de Estilhaços - Medindo a Resiliência</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Vitalidade Máxima:</strong> Vigor + 5</li>
                            <li><strong>Limite de Estilhaços:</strong> Espírito x 2</li>
                        </ul>
                    </div>

                    {/* Passo 5 */}
                    <div className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-amber-500/70">
                        <h3 className="text-xl font-bold text-amber-200 mb-3">5. Escolher Focos - Dons e Peculiaridades</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Você já recebe 1 Foco Temático Gratuito da sua Ocupação Anterior.</li>
                            <li>Escolha 1 Foco livremente.</li>
                            <li>Focos são talentos, conhecimentos, contatos, equipamentos ou sensibilidades especiais.</li>
                            <li>Trabalhe com o Mestre para criar Focos que se encaixem no seu conceito.</li>
                            <li>Tipicamente: +1d em situações específicas ou uma habilidade narrativa menor.</li>
                            <li className="italic">Exemplo: "Ouvido para Mentiras" (+1d Interação para detectar engano), "Biblioteca Particular" (acesso a livros raros entre casos).</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section title="Equipamento e Recursos - As Ferramentas Mundanas">
                <ul className="list-disc pl-6 space-y-2">
                    <li>Comece com roupas normais e itens básicos da sua Ocupação.</li>
                    <li>Dinheiro inicial limitado (Mestre define, ex: 100-500).</li>
                    <li>Inclua itens de Focos (se aplicável).</li>
                    <li>Liste o equipamento. Lembre-se: equipamento pesado/ilegal atrai atenção.</li>
                </ul>
            </Section>

            <Section title="Lista de Ocupações Anteriores">
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        {
                            nome: "Acadêmico (História/Antropologia/Folclore)",
                            pericia: "+1 Ocultismo",
                            focos: [
                                "\"Rato de Biblioteca\" (+1d em pesquisa em arquivos/livros)",
                                "\"Especialista em [Área Específica]\""
                            ]
                        },
                        {
                            nome: "Antiquário/Curador de Museu",
                            pericia: "+1 Investigação OU Ocultismo",
                            focos: [
                                "\"Olho para o Valor Oculto\" (+1d para avaliar objetos)",
                                "\"Conhecimento de Procedência\""
                            ]
                        },
                        {
                            nome: "Artista (Músico/Pintor/Escritor)",
                            pericia: "+1 Interação (Expressão) OU Ocultismo (Sensibilidade)",
                            focos: [
                                "\"Sensibilidade à Atmosfera\" (Percebe \"vibrações\" mais facilmente)",
                                "\"Expressão Catártica\" (Pode usar arte para tentar Recuperar Estilhaços no Downtime)"
                            ]
                        },
                        {
                            nome: "Assistente Social",
                            pericia: "+1 Interação OU Investigação",
                            focos: [
                                "\"Rede de Apoio Comunitário\" (Contatos em serviços sociais)",
                                "\"Empatia Protetora\" (+1d Espírito vs. manipulação emocional)"
                            ]
                        },
                        {
                            nome: "Atleta (Ex)",
                            pericia: "+1 Vigor OU Agilidade",
                            focos: [
                                "\"Pico de Adrenalina\" (Pode ignorar penalidades de Ferido por uma rodada, uma vez por sessão)",
                                "\"Disciplina Física\""
                            ]
                        },
                        {
                            nome: "Bartender/Dono de Bar",
                            pericia: "+1 Interação",
                            focos: [
                                "\"Ouvidos da Vizinhança\" (Ouve rumores locais facilmente)",
                                "\"Leitura de Clientes\" (+1d Interação para sacar intenções)"
                            ]
                        },
                        {
                            nome: "Bibliotecário/Arquivista",
                            pericia: "+1 Investigação OU Ocultismo",
                            focos: [
                                "\"Mestre da Pesquisa\" (+1d Investigação ao usar arquivos/bibliotecas)",
                                "\"Guardião do Conhecimento Esquecido\" (Acesso a seções restritas/obscuras)"
                            ]
                        },
                        {
                            nome: "Bombeiro",
                            pericia: "+1 Vigor OU Sobrevivência",
                            focos: [
                                "\"Coragem Sob Fogo\" (+1d Espírito vs. medo em perigo iminente)",
                                "\"Arrombamento de Emergência\""
                            ]
                        },
                        {
                            nome: "Caminhoneiro/Motorista Profissional",
                            pericia: "+1 Técnica (Direção) OU Sobrevivência (Navegação)",
                            focos: [
                                "\"Conhecimento das Estradas\" (+1d Sobrevivência para navegar/evitar problemas em viagens)",
                                "\"Horas Sem Fim\" (Mais resistente à fadiga em longos períodos de vigília)"
                            ]
                        },
                        {
                            nome: "Coveiro/Agente Funerário",
                            pericia: "+1 Sobrevivência OU Ocultismo",
                            focos: [
                                "\"Proximidade com a Morte\" (Menos propenso a ganhar Estilhaços por ver cadáveres comuns)",
                                "\"Conhecimento Cemiterial\""
                            ]
                        },
                        {
                            nome: "Criminoso (Ladrão/Golpista)",
                            pericia: "+1 Técnica (Arrombamento/Furtividade/Disparo) OU Interação (Enganação/Intimidação)",
                            focos: [
                                "\"Contatos no Submundo\"",
                                "\"Sumir na Multidão\"",
                                "\"Tiro preciso\""
                            ]
                        },
                        {
                            nome: "Cultista Arrependido",
                            pericia: "+1 Ocultismo OU Interação (Enganação)",
                            focos: [
                                "\"Conhecimento Interno de Cultos\" (+1d Ocultismo sobre rituais/símbolos de cultos)",
                                "\"Mestre da Dissimulação\""
                            ]
                        },
                        {
                            nome: "Detetive Particular",
                            pericia: "+1 Investigação",
                            focos: [
                                "\"Licença de Investigador\" (Credibilidade para fazer perguntas)",
                                "\"Rede de Informantes (Pequena)\""
                            ]
                        },
                        {
                            nome: "Engenheiro/Técnico",
                            pericia: "+1 Técnica",
                            focos: [
                                "\"Entendimento de Máquinas\" (+1d para consertar/entender mecanismos)",
                                "\"Gambiarra Funcional\""
                            ]
                        },
                        {
                            nome: "Ex-Seminarista/Clérigo",
                            pericia: "+1 Ocultismo OU Interação",
                            focos: [
                                "\"Conhecimento de Rituais de Proteção\"",
                                "\"Presença Calmante\""
                            ]
                        },
                        {
                            nome: "Explorador Urbano/Espeleólogo",
                            pericia: "+1 Sobrevivência OU Agilidade",
                            focos: [
                                "\"Sentido de Direção Apurado\"",
                                "\"Escalador Ágil\""
                            ]
                        },
                        {
                            nome: "Fazendeiro/Trabalhador Rural",
                            pericia: "+1 Sobrevivência OU Vigor",
                            focos: [
                                "\"Conhecimento da Terra/Clima\"",
                                "\"Resistência Rústica\" (+1 Vigor para testes de fadiga/exposição)"
                            ]
                        },
                        {
                            nome: "Fotógrafo (Investigativo/Natureza)",
                            pericia: "+1 Investigação (Percepção Visual) OU Técnica",
                            focos: [
                                "\"Olho para Detalhes Visuais\" (+1d Investigação para notar detalhes visuais)",
                                "\"Equipamento Fotográfico Confiável\""
                            ]
                        },
                        {
                            nome: "Hacker/Especialista em TI",
                            pericia: "+1 Técnica OU Investigação",
                            focos: [
                                "\"Invasão Digital\" (+1d Técnica para acessar/manipular sistemas)",
                                "\"Navegador da Deep Web\""
                            ]
                        },
                        {
                            nome: "Jornalista Investigativo",
                            pericia: "+1 Investigação OU Interação",
                            focos: [
                                "\"Fontes Anônimas\"",
                                "\"Fuçar Vidas Alheias\""
                            ]
                        },
                        {
                            nome: "Médico Legista/Perito Forense",
                            pericia: "+1 Investigação OU Técnica",
                            focos: [
                                "\"Análise de Evidências Macabras\" (+1d Investigação em cenas de morte)",
                                "\"Conhecimento Anatômico Detalhado\""
                            ]
                        },
                        {
                            nome: "Militar (Ex)",
                            pericia: "+1 Combate OU Sobrevivência",
                            focos: [
                                "\"Disciplina Tática\" (Bônus em iniciativa ou trabalho em equipe)",
                                "\"Instinto de Sobrevivência Treinado\""
                            ]
                        },
                        {
                            nome: "Mágico/Ilusionista",
                            pericia: "+1 Técnica (Prestidigitação) OU Interação (Enganação)",
                            focos: [
                                "\"Mestre da Distração\" (Pode criar diversões para facilitar ações furtivas)",
                                "\"Conhecimento de Truques e Fraudes\""
                            ]
                        },
                        {
                            nome: "Paramédico/Enfermeiro",
                            pericia: "+1 Sobrevivência",
                            focos: [
                                "\"Mãos Firmes Sob Pressão\"",
                                "\"Estômago Forte\""
                            ]
                        },
                        {
                            nome: "Policial",
                            pericia: "+1 Combate OU Investigação",
                            focos: [
                                "\"Acesso Limitado a Arquivos\"",
                                "\"Porte de Arma Regulamentar\""
                            ]
                        },
                        {
                            nome: "Professor (Especialmente de História/Literatura)",
                            pericia: "+1 Investigação OU Interação",
                            focos: [
                                "\"Habilidade Pedagógica\" (+1d Interação para explicar coisas complexas)",
                                "\"Conhecimento Específico Aprofundado (Matéria)\""
                            ]
                        },
                        {
                            nome: "Psicólogo/Terapeuta",
                            pericia: "+1 Interação",
                            focos: [
                                "\"Leitura Emocional\"",
                                "\"Técnicas de Aconselhamento\""
                            ]
                        },
                        {
                            nome: "Segurança (Noturno)",
                            pericia: "+1 Investigação (Percepção) OU Combate",
                            focos: [
                                "\"Vigilância Treinada\" (+1d Mente para notar coisas fora do lugar)",
                                "\"Acesso a Locais Vigiados\""
                            ]
                        },
                        {
                            nome: "Zelador/Trabalhador Noturno",
                            pericia: "+1 Sobrevivência OU Investigação",
                            focos: [
                                "\"Mestre das Chaves\"",
                                "\"Passar Despercebido\""
                            ]
                        },
                        {
                            nome: "Assassino",
                            pericia: "+1 Combate OU +1 Técnica",
                            focos: [
                                "\"Morte Limpa\"",
                                "\"Mestre dos Venenos\""
                            ]
                        }
                    ].map((ocupacao, index) => (
                        <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                            <h4 className="font-bold text-amber-200 mb-2">{ocupacao.nome}</h4>
                            <p className="text-sm text-slate-300 mb-2"><strong>Perícia:</strong> {ocupacao.pericia}</p>
                            <p className="text-sm text-slate-300 font-semibold mb-1">Focos:</p>
                            <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                                {ocupacao.focos.map((foco, i) => (
                                    <li key={i}>{foco}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
