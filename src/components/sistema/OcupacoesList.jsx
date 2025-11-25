import React from 'react';

const ocupacoes = [
  {
    titulo: "Acadêmico (História/Antropologia/Folclore)",
    pericia: "+1 Ocultismo",
    foco: "\"Rato de Biblioteca\" (+1d pesquisa) OU \"Especialista em [Área]\"."
  },
  {
    titulo: "Antiquário/Curador de Museu",
    pericia: "+1 Investigação OU Ocultismo",
    foco: "\"Olho para o Valor Oculto\" OU \"Conhecimento de Procedência\"."
  },
  {
    titulo: "Artista (Músico/Pintor/Escritor)",
    pericia: "+1 Interação OU Ocultismo",
    foco: "\"Sensibilidade à Atmosfera\" OU \"Expressão Catártica\"."
  },
  {
    titulo: "Assistente Social",
    pericia: "+1 Interação OU Investigação",
    foco: "\"Rede de Apoio\" OU \"Empatia Protetora\"."
  },
  {
    titulo: "Atleta (Ex)",
    pericia: "+1 Vigor OU Agilidade",
    foco: "\"Pico de Adrenalina\" OU \"Disciplina Física\"."
  },
  {
    titulo: "Bartender/Dono de Bar",
    pericia: "+1 Interação",
    foco: "\"Ouvidos da Vizinhança\" OU \"Leitura de Clientes\"."
  },
  {
    titulo: "Bibliotecário/Arquivista",
    pericia: "+1 Investigação OU Ocultismo",
    foco: "\"Mestre da Pesquisa\" OU \"Guardião do Conhecimento\"."
  },
  {
    titulo: "Bombeiro",
    pericia: "+1 Vigor OU Sobrevivência",
    foco: "\"Coragem Sob Fogo\" OU \"Arrombamento de Emergência\"."
  },
  {
    titulo: "Caminhoneiro/Motorista",
    pericia: "+1 Técnica OU Sobrevivência",
    foco: "\"Conhecimento das Estradas\" OU \"Horas Sem Fim\"."
  },
  {
    titulo: "Coveiro/Agente Funerário",
    pericia: "+1 Sobrevivência OU Ocultismo",
    foco: "\"Proximidade com a Morte\" OU \"Conhecimento Cemiterial\"."
  },
  {
    titulo: "Criminoso (Ladrão/Golpista)",
    pericia: "+1 Técnica OU Interação",
    foco: "\"Contatos no Submundo\", \"Sumir na Multidão\" OU \"Tiro Preciso\"."
  },
  {
    titulo: "Cultista Arrependido",
    pericia: "+1 Ocultismo",
    foco: "\"Conhecimento Herético\" OU \"Protegido pelo Pecado\"."
  },
  {
    titulo: "Detetive Particular",
    pericia: "+1 Investigação",
    foco: "\"Instinto Investigativo\" OU \"Contatos no Meio Policial\"."
  },
  {
    titulo: "Eletricista/Técnico",
    pericia: "+1 Técnica",
    foco: "\"Mãos na Massa\" OU \"Conhecimento de Sistemas\"."
  },
  {
    titulo: "Enfermeiro/Técnico de Enfermagem",
    pericia: "+1 Vigor OU Interação",
    foco: "\"Primeiros Socorros Avançados\" OU \"Aparência Inofensiva\"."
  },
  {
    titulo: "Escriturário/Funcionário Público",
    pericia: "+1 Interação OU Técnica",
    foco: "\"Conhecimento Burocrático\" OU \"Paciência de Jó\"."
  },
  {
    titulo: "Estudante Universitário",
    pericia: "+1 em qualquer Perícia",
    foco: "\"Mente Aberta\" OU \"Amigos em Todo Lugar\"."
  },
  {
    titulo: "Fotógrafo de Crime/Jornalista Investigativo",
    pericia: "+1 Investigação",
    foco: "\"Olho Clínico\" OU \"Contatos na Mídia\"."
  },
  {
    titulo: "Garçom/Garçonete",
    pericia: "+1 Interação",
    foco: "\"Pé na Porta\" OU \"Memória para Rostos\"."
  },
  {
    titulo: "Guia de Turismo",
    pericia: "+1 Interação OU Sobrevivência",
    foco: "\"Conhecimento Local\" OU \"Línguas Estrangeiras\"."
  },
  {
    titulo: "Investigador de Seguros",
    pericia: "+1 Investigação",
    foco: "\"Detectar Mentiras\" OU \"Conhecimento de Seguros\"."
  },
  {
    titulo: "Jornalista",
    pericia: "+1 Interação OU Investigação",
    foco: "\"Fonte Confiável\" OU \"Repórter Investigativo\"."
  },
  {
    titulo: "Mágico/Ilusionista",
    pericia: "+1 Técnica OU Interação",
    foco: "\"Mestre da Distração\" OU \"Conhecimento de Fraudes\"."
  },
  // Adicione mais ocupações conforme necessário
];

const OcupacoesList = () => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-white mb-4 text-center">Lista de Ocupações Anteriores</h3>
      <p className="text-center text-slate-400 mb-6 text-sm">Se não encontrar o que pensou, contate o mestre.</p>
      
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
        <div className="grid gap-4 md:grid-cols-2">
          {ocupacoes.map((ocupacao, index) => (
            <div key={index} className="bg-slate-800/50 p-3 rounded border-l-4 border-amber-500">
              <strong className="text-amber-100 block">{ocupacao.titulo}</strong>
              <p className="text-sm text-slate-300"><strong>Perícia:</strong> {ocupacao.pericia}</p>
              <p className="text-sm text-slate-300"><strong>Foco:</strong> {ocupacao.foco}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OcupacoesList;
