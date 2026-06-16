export type CardGroup = 'seduc' | 'dashboards' | 'drive'

export interface SystemCard {
  id: string
  icon: string
  label: string
  description: string
  url: string
  group: CardGroup
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
    id: 'repositorio',
    icon: '📂',
    label: 'Repositório SEDUC',
    description: 'Materiais e documentos da rede',
    url: 'https://repositorio.educacao.sp.gov.br/',
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
    label: 'ENEM 2026',
    description: 'Adesão à inscrição por URE e escola',
    url: 'https://inscricao-enem-2026.vercel.app',
    group: 'dashboards',
  },
  {
    id: 'ppb2',
    icon: '📝',
    label: 'PP B2 — Cartões',
    description: 'Leitura de cartões da Prova Paulista',
    url: 'https://ppb2.vercel.app',
    group: 'dashboards',
  },
  {
    id: 'copa',
    icon: '🏆',
    label: 'Copa da Escola',
    description: 'Ranking de escolas e turmas',
    url: 'https://copadaescola.vercel.app',
    group: 'dashboards',
  },

  // Drive DIAVAL — pastas das avaliações 2026
  {
    id: 'drive-prova-paulista',
    icon: '📑',
    label: '1. Prova Paulista',
    description: 'Pasta no Drive — DIAVAL',
    url: 'https://drive.google.com/drive/folders/1TfRUAeRtGBDas0oyCHy5D204ZkYNurX2',
    group: 'drive',
  },
  {
    id: 'drive-tarefa-sp',
    icon: '✏️',
    label: '2. Tarefa SP',
    description: 'Pasta no Drive — DIAVAL',
    url: 'https://drive.google.com/drive/folders/1GwIV7KmM1mSM3dfF9bhshN68VFvuahya',
    group: 'drive',
  },
  {
    id: 'drive-copa',
    icon: '🥇',
    label: '3. Copa da Escola',
    description: 'Pasta no Drive — DIAVAL',
    url: 'https://drive.google.com/drive/folders/1bFiPyn7eiJjcM_o0vZatbaVt5SuwEUi2',
    group: 'drive',
  },
  {
    id: 'drive-saresp',
    icon: '📐',
    label: '4. SARESP',
    description: 'Pasta no Drive — DIAVAL',
    url: 'https://drive.google.com/drive/folders/1HJvnlI_WaHRwqyAvGiJJXr1euOaPMB0n',
    group: 'drive',
  },
  {
    id: 'drive-provao',
    icon: '🎓',
    label: '5. Provão Paulista',
    description: 'Pasta no Drive — DIAVAL',
    url: 'https://drive.google.com/drive/folders/1oUlZ37Ho5FXc8OT-EnhSyry2OvaXpiJD',
    group: 'drive',
  },
  {
    id: 'drive-saeb',
    icon: '🧪',
    label: '6. SAEB',
    description: 'Pasta no Drive — DIAVAL',
    url: 'https://drive.google.com/drive/folders/1JVk_XBgeLw5v6oUltSRQhByTNF5uRL1Q',
    group: 'drive',
  },
]
