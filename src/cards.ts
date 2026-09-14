export type CardGroup = 'seduc' | 'dashboards' | 'drive'

export interface SystemCard {
  id: string
  icon: string
  label: string
  description: string
  url: string
  group: CardGroup
  /** Card inativo: fica em cinza, não clicável, mostra o selo `badge`. */
  disabled?: boolean
  /** Selo exibido no card (ex.: "Disponível em breve"). */
  badge?: string
}

export const GROUPS: { key: CardGroup; title: string }[] = [
  { key: 'seduc', title: 'SEDUC — Sistemas oficiais' },
  { key: 'dashboards', title: 'Dashboards DIAVAL' },
  { key: 'drive', title: 'Drive DIAVAL — Avaliações 2026' },
]

export const CARDS: SystemCard[] = [
  // SEDUC — sistemas oficiais da rede
  {
    id: 'escola-total',
    icon: '🏫',
    label: 'Escola Total',
    description: 'BI da rede — indicadores escolares',
    url: 'https://escolatotal.educacao.sp.gov.br/Inicio',
    group: 'seduc',
  },
  {
    id: 'atendimento',
    icon: '🛟',
    label: 'Atendimento',
    description: 'Central de chamados SEDUC',
    url: 'https://atendimento.educacao.sp.gov.br/',
    group: 'seduc',
  },

  // Dashboards DIAVAL
  {
    id: 'enem',
    icon: '🎓',
    label: 'Inscrições ENEM 2026',
    description: 'Adesão à inscrição por URE e escola',
    url: 'https://inscricao-enem-2026.vercel.app',
    group: 'dashboards',
  },
  {
    id: 'avd',
    icon: '📝',
    label: 'Avaliação Diagnóstica 2026.2',
    description: 'Inserção de cartões-resposta por URE e escola',
    url: 'https://aplicacao-avd2.vercel.app',
    group: 'dashboards',
  },
  {
    id: 'jornada-provao-painel',
    icon: '🧭',
    label: 'Painel da Jornada do Provão',
    description: 'Acompanhamento por URE e escola',
    url: 'https://jornada-provao.vercel.app',
    group: 'dashboards',
  },
  {
    id: 'simulado-saresp-2ef',
    icon: '📚',
    label: 'Simulado SARESP 2º ano EF',
    description: 'Resultados e boletins por URE, cidade e escola',
    url: 'https://simulado-saresp-2ef.vercel.app',
    group: 'dashboards',
  },
  // Copa da Escola saiu do portal em 14/09/2026 (pedido do Jeff). O app segue no ar em copadaescola.vercel.app.

  // Drive DIAVAL — pastas das avaliações 2026
  {
    id: 'drive-prova-paulista',
    icon: '📑',
    label: '1. Prova Paulista',
    description: 'Pasta no Drive DIAVAL',
    url: 'https://drive.google.com/drive/folders/1TfRUAeRtGBDas0oyCHy5D204ZkYNurX2',
    group: 'drive',
  },
  {
    id: 'drive-tarefa-sp',
    icon: '✏️',
    label: '2. Tarefa SP',
    description: 'Pasta no Drive DIAVAL',
    url: 'https://drive.google.com/drive/folders/1GwIV7KmM1mSM3dfF9bhshN68VFvuahya',
    group: 'drive',
  },
  {
    id: 'drive-copa',
    icon: '🥇',
    label: '3. Copa da Escola',
    description: 'Pasta no Drive DIAVAL',
    url: 'https://drive.google.com/drive/folders/1bFiPyn7eiJjcM_o0vZatbaVt5SuwEUi2',
    group: 'drive',
  },
  {
    id: 'drive-saresp-2ef',
    icon: '🧮',
    label: '4. SARESP 2º ano EF',
    description: 'Pasta no Drive DIAVAL',
    url: 'https://drive.google.com/drive/folders/1e3WtpSf6_f_qMA6ad8XIrITLpiNyE4E3',
    group: 'drive',
  },
  {
    id: 'drive-saresp-3em',
    icon: '📊',
    label: '5. SARESP 3ª Série EM',
    description: 'Pasta no Drive DIAVAL',
    url: 'https://drive.google.com/drive/folders/1szgsCwEXMh4hgnd0_ce97VH2Oaj4T1Gx',
    group: 'drive',
  },
  {
    id: 'drive-saresp-5a9ef',
    icon: '📐',
    label: '6. SARESP 5º-9º ano EF',
    description: 'Pasta no Drive DIAVAL',
    url: 'https://drive.google.com/drive/folders/1sO85xLawJvcdO13kRm7YiUZvQpZLieo3',
    group: 'drive',
  },
  {
    id: 'drive-provao',
    icon: '🧭',
    label: '7. Jornada Provão Paulista',
    description: 'Pasta no Drive DIAVAL',
    url: 'https://drive.google.com/drive/folders/1oUlZ37Ho5FXc8OT-EnhSyry2OvaXpiJD',
    group: 'drive',
  },
  {
    id: 'drive-lives',
    icon: '🎥',
    label: '8. Lives DIAVAL',
    description: 'Pasta no Drive DIAVAL',
    url: 'https://drive.google.com/drive/folders/19gRwjxeHuR5-yP2wxiCcmMuB46cwIAtK',
    group: 'drive',
  },
  {
    id: 'drive-saeb',
    icon: '🧪',
    label: '9. SAEB',
    description: 'Pasta no Drive DIAVAL',
    url: 'https://drive.google.com/drive/folders/1JVk_XBgeLw5v6oUltSRQhByTNF5uRL1Q',
    group: 'drive',
  },
]
