import { TestimonialImage, DifferentialItem, StepItem } from './types';

export const EXPERT_INFO = {
  name: 'Kaick Mauro',
  role: 'Personal Trainer',
  tagline: 'Treino inteligente para quem busca estética e funcionalidade',
  subTagline: 'Consultoria Presencial em Poços de Caldas - MG e Consultoria Online',
  location: 'Poços de Caldas - MG',
  addressDisplay: 'Endereço: Poços de Caldas - MG',
  // Direct WhatsApp link as specified in prompt, with pre-encoded initial greeting option
  whatsappUrl: 'https://api.whatsapp.com/send/?phone=5535998291673&text=Ol%C3%A1%20Kaick!%20Vim%20pelo%20site%20e%20quero%20agendar%20minha%20primeira%20avalia%C3%A7%C3%A3o%20gratuita.&type=phone_number&app_absent=0&utm_source=ig',
  whatsappRawUrl: 'https://api.whatsapp.com/send/?phone=5535998291673&text&type=phone_number&app_absent=0&utm_source=ig',
  instagramUrl: 'https://www.instagram.com/kaickmpersonal/?hl=pt_BR',
  instagramHandle: '@kaickmpersonal',
  heroImage: 'https://i.imgur.com/f52QFgq.png',
};

// Galeria de alunos (14 imagens fornecidas, pronta para adicionar mais links)
export const CLIENT_RESULTS: TestimonialImage[] = [
  {
    id: 'res-1',
    url: 'https://i.imgur.com/HsXfoCp.png',
    title: 'Transformação Corporal Real',
    subtitle: 'Redução de percentual de gordura e tônus muscular',
    category: 'definicao',
  },
  {
    id: 'res-2',
    url: 'https://i.imgur.com/vIMMrLH.png',
    title: 'Evolução e Densidade Muscular',
    subtitle: 'Ajuste de volume e biomecânica aplicada',
    category: 'hipertrofia',
  },
  {
    id: 'res-3',
    url: 'https://i.imgur.com/e3n1LXn.png',
    title: 'Constância e Definição',
    subtitle: 'Resultado sem abrir mão da rotina real',
    category: 'definicao',
  },
  {
    id: 'res-4',
    url: 'https://i.imgur.com/L2mmn0A.png',
    title: 'Ganho de Massa Magra',
    subtitle: 'Progressão de cargas inteligente e recuperação',
    category: 'hipertrofia',
  },
  {
    id: 'res-5',
    url: 'https://i.imgur.com/jff8Vm8.png',
    title: 'Recomposição Corporal Eficiente',
    subtitle: 'Perda de gordura com preservação de massa',
    category: 'emagrecimento',
  },
  {
    id: 'res-6',
    url: 'https://i.imgur.com/D7f0GHJ.png',
    title: 'Simetria e Proporção',
    subtitle: 'Trabalho de pontos fracos e postura alinhada',
    category: 'postura',
  },
  {
    id: 'res-7',
    url: 'https://i.imgur.com/ffACjlG.png',
    title: 'Foco na Linha de Cintura',
    subtitle: 'Treino inteligente focado na estética em V',
    category: 'definicao',
  },
  {
    id: 'res-8',
    url: 'https://i.imgur.com/ketnp33.png',
    title: 'Força e Resistência Muscular',
    subtitle: 'Evolução semana após semana',
    category: 'hipertrofia',
  },
  {
    id: 'res-9',
    url: 'https://i.imgur.com/Yz4Z7OO.png',
    title: 'Secagem e Condicionamento',
    subtitle: 'Planejamento alinhado ao gasto energético',
    category: 'emagrecimento',
  },
  {
    id: 'res-10',
    url: 'https://i.imgur.com/xGjhIjh.png',
    title: 'Atleta do Dia a Dia',
    subtitle: 'Melhora da mobilidade e composição estética',
    category: 'postura',
  },
  {
    id: 'res-11',
    url: 'https://i.imgur.com/UckxiFW.png',
    title: 'Evolução de Costas e Ombros',
    subtitle: 'Biomecânica refinada em cada repetição',
    category: 'hipertrofia',
  },
  {
    id: 'res-12',
    url: 'https://i.imgur.com/mVrbjfX.png',
    title: 'Metabolismo Acelerado',
    subtitle: 'Densidade muscular sem estagnação',
    category: 'definicao',
  },
  {
    id: 'res-13',
    url: 'https://i.imgur.com/Ocp6QBA.png',
    title: 'Firmeza e Definição Superior',
    subtitle: 'Resultados visíveis com disciplina guiada',
    category: 'definicao',
  },
  {
    id: 'res-14',
    url: 'https://i.imgur.com/3ZcoUTp.png',
    title: 'Transformação Completa',
    subtitle: 'Autoestima elevada e físico funcional',
    category: 'emagrecimento',
  },
];

// Diferenciais para o bloco "Por que confiar em mim?"
export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'diff-1',
    title: 'Avaliação Honestamente Individualizada',
    description: 'Sem planilhas copiadas ou treinos genéricos de gaveta. Analiso seu histórico, limitações articulares e disponibilidade real de tempo.',
    iconName: 'ClipboardCheck',
  },
  {
    id: 'diff-2',
    title: 'Acompanhamento Direto Comigo',
    description: 'Você fala diretamente com o Kaick Mauro, sem intermediários, estagiários ou robôs. Meu foco é na sua evolução pessoal.',
    iconName: 'UserCheck',
  },
  {
    id: 'diff-3',
    title: 'Estética com Saúde e Funcionalidade',
    description: 'Um físico bonito precisa ser funcional e livre de dores. Aliamos simetria muscular, mobilidade e longevidade articular.',
    iconName: 'Sparkles',
  },
  {
    id: 'diff-4',
    title: 'Ciência e Biomecânica Aplicada',
    description: 'Cada exercício tem uma razão exata para estar na sua ficha: ângulo, cadência, volume e intensidade planejados com precisão.',
    iconName: 'Dumbbell',
  },
  {
    id: 'diff-5',
    title: 'Suporte Rápido no WhatsApp',
    description: 'Dúvidas na execução? Envie seu vídeo do treino para correção imediata de postura e técnica. Você nunca treina no escuro.',
    iconName: 'MessageCircle',
  },
  {
    id: 'diff-6',
    title: 'Ajustado à sua Vida Real',
    description: 'O melhor treino é aquele que você consegue cumprir com constância. Adequamos a frequência semanal à sua rotina profissional.',
    iconName: 'CalendarCheck',
  },
];

// 3 Passos da Primeira Avaliação
export const EVALUATION_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Clique e Inicie a Conversa no WhatsApp',
    description: 'Basta tocar no botão de agendamento. Você será direcionado diretamente para o meu WhatsApp pessoal com resposta rápida.',
  },
  {
    number: '02',
    title: 'Diagnóstico Inicial Rápido',
    description: 'Conversamos sobre sua rotina atual, dores, nível de experiência e exatamente onde você quer chegar nos próximos meses.',
  },
  {
    number: '03',
    title: 'Mapeamento do seu Treino Personalizado',
    description: 'Apresento o caminho claro para alcançar seu resultado (presencial em Poços de Caldas ou consultoria online). Gratuito e 100% sem compromisso.',
  },
];

// Pilares de Metodologia & Bastidores (Bloco 7)
export const METHOD_PILLARS = [
  {
    title: 'Ajuste Fino de Biomecânica',
    description: 'Correção de alinhamentos e trajetórias para máxima ativação muscular e zero sobrecarga lesiva.',
    tag: 'Técnica & Precisão',
  },
  {
    title: 'Periodização Inteligente',
    description: 'Fases calculadas de hipertrofia, força e queima de gordura para evitar platôs de estagnação.',
    tag: 'Evolução Contínua',
  },
  {
    title: 'Acompanhamento Presencial & Online',
    description: 'Atendimento exclusivo em Poços de Caldas - MG ou consultoria remota com suporte diário.',
    tag: 'Flexibilidade Total',
  },
];
