export type EventType =
  | 'pp'
  | 'saresp'
  | 'omasp'
  | 'olisp'
  | 'fluencia'
  | 'diagnostica'
  | 'provao'
  | 'recuperacao'
  | 'enem'

export interface CalendarEvent {
  id: string
  dateLabel: string
  /** Sufixo após o tipo (ex.: "Bimestre 1", "3ª série EM"). Vazio quando o tipo já é suficiente. */
  title: string
  type: EventType
  start: string
  end: string
}

const EVENT_TYPE_LABEL: Record<EventType, string> = {
  pp: 'Prova Paulista',
  saresp: 'SARESP',
  omasp: 'OMASP',
  olisp: 'OLISP',
  fluencia: 'Fluência Leitora',
  diagnostica: 'Diagnóstica',
  provao: 'Provão Paulista',
  recuperacao: 'Recuperação',
  enem: 'ENEM',
}

export function eventTypeLabel(type: EventType): string {
  return EVENT_TYPE_LABEL[type]
}

/**
 * Eventos DIAVAL 2026 — extraídos do Calendário Pedagógico SEDUC SP 2026.
 * SARESP 3EM (22-26/jun) e Avaliação Diagnóstica de 10/ago acrescentados manualmente.
 */
export const EVENTS: CalendarEvent[] = [
  // Passadas
  {
    id: 'diagnostica-fev',
    dateLabel: '2–6/fev',
    title: '',
    type: 'diagnostica',
    start: '2026-02-02',
    end: '2026-02-06',
  },
  {
    id: 'fluencia-entrada',
    dateLabel: '9–26/mar',
    title: '',
    type: 'fluencia',
    start: '2026-03-09',
    end: '2026-03-26',
  },
  {
    id: 'pp-b1',
    dateLabel: '13–17/abr',
    title: 'B1',
    type: 'pp',
    start: '2026-04-13',
    end: '2026-04-17',
  },

  // Próximas
  {
    id: 'omasp-2',
    dateLabel: '18–22/mai',
    title: '',
    type: 'omasp',
    start: '2026-05-18',
    end: '2026-05-22',
  },
  {
    id: 'pp-b2',
    dateLabel: '15–19/jun',
    title: 'B2',
    type: 'pp',
    start: '2026-06-15',
    end: '2026-06-19',
  },
  {
    id: 'saresp-3em',
    dateLabel: '22–26/jun',
    title: '3EM',
    type: 'saresp',
    start: '2026-06-22',
    end: '2026-06-26',
  },
  {
    id: 'recuperacao-ago',
    dateLabel: '3–7/ago',
    title: '',
    type: 'recuperacao',
    start: '2026-08-03',
    end: '2026-08-07',
  },
  {
    id: 'diagnostica-ago',
    dateLabel: '10/ago',
    title: '',
    type: 'diagnostica',
    start: '2026-08-10',
    end: '2026-08-10',
  },
  {
    id: 'olisp',
    dateLabel: '25–27/ago',
    title: '',
    type: 'olisp',
    start: '2026-08-25',
    end: '2026-08-27',
  },
  {
    id: 'pp-b3',
    dateLabel: '21–25/set',
    title: 'B3',
    type: 'pp',
    start: '2026-09-21',
    end: '2026-09-25',
  },
  // 28/09/2026: datas por ano/série, tiradas da tabela de avaliações do Painel da Jornada do Provão
  // (jornada-provao.vercel.app). Recuperação segue o Calendário Pedagógico.
  {
    id: 'saresp-9ef',
    dateLabel: '29–30/out',
    title: '9º ano EF',
    type: 'saresp',
    start: '2026-10-29',
    end: '2026-10-30',
  },
  {
    id: 'provao-3em',
    dateLabel: '4–5/nov',
    title: '3ª série EM',
    type: 'provao',
    start: '2026-11-04',
    end: '2026-11-05',
  },
  {
    id: 'saresp-3em-if',
    dateLabel: '6/nov',
    title: '3ª série EM · Itinerários',
    type: 'saresp',
    start: '2026-11-06',
    end: '2026-11-06',
  },
  {
    id: 'enem',
    dateLabel: '8 e 15/nov',
    title: '',
    type: 'enem',
    start: '2026-11-08',
    end: '2026-11-15',
  },
  {
    id: 'saresp-2em-if',
    dateLabel: '9/nov',
    title: '2ª série EM · Itinerários',
    type: 'saresp',
    start: '2026-11-09',
    end: '2026-11-09',
  },
  {
    id: 'provao-2em',
    dateLabel: '10–11/nov',
    title: '2ª série EM',
    type: 'provao',
    start: '2026-11-10',
    end: '2026-11-11',
  },
  {
    id: 'provao-1em',
    dateLabel: '12–13/nov',
    title: '1ª série EM',
    type: 'provao',
    start: '2026-11-12',
    end: '2026-11-13',
  },
  {
    id: 'saresp-6a8ef',
    dateLabel: '18/nov–1/dez',
    title: '6º, 7º e 8º ano EF',
    type: 'saresp',
    start: '2026-11-18',
    end: '2026-12-01',
  },
  {
    id: 'saresp-5ef',
    dateLabel: '23/nov',
    title: '5º ano EF',
    type: 'saresp',
    start: '2026-11-23',
    end: '2026-11-23',
  },
  {
    id: 'saresp-2ef',
    dateLabel: '25–26/nov',
    title: '2º ano EF',
    type: 'saresp',
    start: '2026-11-25',
    end: '2026-11-26',
  },
  {
    id: 'recuperacao',
    dateLabel: '7–11/dez',
    title: '',
    type: 'recuperacao',
    start: '2026-12-07',
    end: '2026-12-11',
  },
]

export function upcomingEvents(today: Date = new Date()): CalendarEvent[] {
  const todayIso = today.toISOString().slice(0, 10)
  return EVENTS.filter((e) => e.end >= todayIso)
}

export function pastEvents(today: Date = new Date()): CalendarEvent[] {
  const todayIso = today.toISOString().slice(0, 10)
  return EVENTS
    .filter((e) => e.end < todayIso)
    .slice()
    .sort((a, b) => (a.end < b.end ? 1 : -1))
}
