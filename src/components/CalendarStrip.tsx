import { upcomingEvents, pastEvents, eventTypeLabel } from '../calendar'
import type { CalendarEvent } from '../calendar'

function EventList({ events, past }: { events: CalendarEvent[]; past?: boolean }) {
  return (
    <ul className={`c-cal-list${past ? ' c-cal-list-past' : ''}`}>
      {events.map((e) => (
        <li key={e.id} className={`c-cal-item c-cal-${e.type}${past ? ' c-cal-past' : ''}`}>
          <span className="c-cal-date">{e.dateLabel}</span>
          <span className="c-cal-tag">{eventTypeLabel(e.type)}</span>
          {e.title && <span className="c-cal-chip">{e.title}</span>}
        </li>
      ))}
    </ul>
  )
}

export function CalendarStrip() {
  const past = pastEvents()
  const upcoming = upcomingEvents()

  return (
    <>
      {past.length > 0 && (
        <details className="c-home-section c-home-section-cal">
          <summary className="c-home-section-summary">
            <h2 className="c-home-section-h c-home-section-h-muted">Avaliações passadas</h2>
          </summary>
          <EventList events={past} past />
        </details>
      )}
      {upcoming.length > 0 && (
        <details open className="c-home-section c-home-section-cal">
          <summary className="c-home-section-summary">
            <h2 className="c-home-section-h">📅 Próximas avaliações</h2>
          </summary>
          <EventList events={upcoming} />
        </details>
      )}
    </>
  )
}
