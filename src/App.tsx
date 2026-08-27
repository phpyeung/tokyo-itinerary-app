import {
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  MapPin,
  Plane,
  Search,
  Sparkles,
  Star,
  Ticket,
  Utensils,
} from "lucide-react";
import { useMemo, useState } from "react";
import { itinerary, ReservationStatus, statusOrder } from "./itinerary";
import { attractionsByDate, restaurantSuggestionSets } from "./tripAdditions";

const allStatuses = "All" as const;
type StatusFilter = ReservationStatus | typeof allStatuses;
const statusFilters: StatusFilter[] = [allStatuses, ...statusOrder];

const statusTone: Record<ReservationStatus, string> = {
  Reserve: "status-reserve",
  "Walk-in": "status-walk",
  Flexible: "status-flexible",
  Disney: "status-disney",
};

function formatDisplayDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function App() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>(allStatuses);
  const [dayFilter, setDayFilter] = useState<string>(allStatuses);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [expandedSuggestions, setExpandedSuggestions] = useState<Set<string>>(new Set());

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleSuggestion = (id: string) => {
    setExpandedSuggestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const days = useMemo(() => {
    return Array.from(new Set(itinerary.map((item) => item.date))).map((date) => {
      const firstItem = itinerary.find((item) => item.date === date)!;
      return {
        date,
        label: `${firstItem.dayLabel} ${firstItem.weekday}`,
      };
    });
  }, []);

  const filteredItems = useMemo(() => {
    return itinerary.filter((item) => {
      const statusMatches = statusFilter === allStatuses || item.status === statusFilter;
      const dayMatches = dayFilter === allStatuses || item.date === dayFilter;
      return statusMatches && dayMatches;
    });
  }, [dayFilter, statusFilter]);

  const groupedItems = useMemo(() => {
    return days
      .map((day) => ({
        ...day,
        items: filteredItems.filter((item) => item.date === day.date),
        attractions: attractionsByDate[day.date] ?? [],
        suggestions: restaurantSuggestionSets.filter((set) => set.date === day.date),
      }))
      .filter((group) => group.items.length > 0);
  }, [days, filteredItems]);

  const reserveCount = itinerary.filter((item) => item.status === "Reserve").length;
  const attractionCount = Object.values(attractionsByDate).reduce(
    (count, attractions) => count + attractions.length,
    0,
  );
  const suggestionCount = restaurantSuggestionSets.reduce(
    (count, set) => count + set.options.length,
    0,
  );

  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <div className="hero__media" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow">
            <Plane size={16} />
            Aug 27 - Sep 4, 2026
          </p>
          <h1 id="page-title">Tokyo Itinerary</h1>
          <p className="hero__copy">
            A day-by-day Tokyo plan with tourist stops, existing meal picks, and
            family-friendly restaurant backups around each neighborhood.
          </p>
          <div className="hero__stats" aria-label="Trip summary">
            <span>
              <CalendarDays size={18} />
              {days.length} days
            </span>
            <span>
              <MapPin size={18} />
              {attractionCount} stops
            </span>
            <span>
              <Utensils size={18} />
              {itinerary.length} primary meals
            </span>
            <span>
              <Sparkles size={18} />
              {reserveCount} to reserve
            </span>
            <span>
              <Search size={18} />
              {suggestionCount} backups
            </span>
          </div>
        </div>
      </section>

      <section className="controls" aria-label="Itinerary filters">
        <div className="control-group">
          <span className="control-label">Status</span>
          <div className="segmented" role="list">
            {statusFilters.map((status) => (
              <button
                key={status}
                className={statusFilter === status ? "is-active" : ""}
                type="button"
                onClick={() => setStatusFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
        <div className="control-group">
          <span className="control-label">Day</span>
          <div className="day-scroll" role="list">
            <button
              className={dayFilter === allStatuses ? "is-active" : ""}
              type="button"
              onClick={() => setDayFilter(allStatuses)}
            >
              All
            </button>
            {days.map((day) => (
              <button
                key={day.date}
                className={dayFilter === day.date ? "is-active" : ""}
                type="button"
                onClick={() => setDayFilter(day.date)}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline" aria-label="Trip itinerary">
        {groupedItems.map((group) => (
          <article className="day-section" key={group.date}>
            <header className="day-header">
              <p>{group.items[0].weekday}</p>
              <h2>{formatDisplayDate(group.date)}</h2>
            </header>
            <div className="day-content">
              <section className="attraction-panel" aria-label={`${group.label} tourist stops`}>
                <div className="panel-heading">
                  <h3>
                    <MapPin size={17} />
                    Places to visit
                  </h3>
                  <strong>{group.attractions.length} stops</strong>
                </div>
                <div className="attraction-list">
                  {group.attractions.map((attraction) => (
                    <article className="attraction-item" key={`${group.date}-${attraction.title}`}>
                      <div className="attraction-time">
                        <Clock size={15} />
                        {attraction.time}
                      </div>
                      <div>
                        <div className="attraction-title-row">
                          {attraction.href ? (
                            <a href={attraction.href} target="_blank" rel="noreferrer">
                              {attraction.title}
                              <ExternalLink size={14} />
                            </a>
                          ) : (
                            <h3>{attraction.title}</h3>
                          )}
                          {attraction.booking ? (
                            <span className="booking-chip">{attraction.booking}</span>
                          ) : null}
                        </div>
                        <p className="attraction-area">{attraction.area}</p>
                        <p>{attraction.note}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <div className="meal-grid">
                {group.items.map((item) => {
                  const isExpanded = expandedCards.has(item.id);
                  return (
                    <section className="meal-card" key={item.id} data-expanded={isExpanded}>
                      <div className="meal-card__shell">
                        <div className="meal-card__time">
                          <span>{item.meal}</span>
                          <small>Primary</small>
                        </div>
                        <div className="meal-card__body">
                          <div className="meal-card__topline">
                            {isExpanded && <span className="cuisine-chip">{item.cuisine}</span>}
                            <span className={`status-chip ${statusTone[item.status]}`}>
                              {item.status}
                            </span>
                          </div>
                          <div className="meal-card__title-row">
                            <h3>{item.restaurant}</h3>
                            {item.featured ? (
                              <span className="featured" aria-label="Starred pick">
                                <Star size={16} fill="currentColor" />
                              </span>
                            ) : null}
                          </div>
                          <div className="meal-card__meta">
                            <span>
                              <MapPin size={16} />
                              {item.area}
                            </span>
                            {isExpanded && <span>{item.note}</span>}
                          </div>
                          {isExpanded && (
                            <>
                              {item.detail ? <p className="meal-detail">{item.detail}</p> : null}
                              <div className="link-row">
                                {item.links.length > 0 ? (
                                  item.links.map((link) => (
                                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                                      {link.label}
                                      <ExternalLink size={15} />
                                    </a>
                                  ))
                                ) : (
                                  <span className="empty-link">No booking link</span>
                                )}
                              </div>
                            </>
                          )}
                          <button
                            className="expand-button"
                            type="button"
                            onClick={() => toggleCard(item.id)}
                            aria-expanded={isExpanded}
                            aria-label={isExpanded ? "Show less" : "Show more"}
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp size={18} />
                                Less
                              </>
                            ) : (
                              <>
                                <ChevronDown size={18} />
                                More
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>

              <section className="suggestion-panel" aria-label={`${group.label} restaurant suggestions`}>
                <div className="panel-heading">
                  <h3>
                    <Utensils size={17} />
                    Restaurant backups
                  </h3>
                  <strong>Curated lunch and dinner picks</strong>
                </div>
                <div className="suggestion-grid">
                  {group.suggestions.map((set) => (
                    <article className="suggestion-set" key={`${set.date}-${set.meal}`}>
                      <div className="suggestion-set__header">
                        <span>{set.meal}</span>
                        <p>{set.context}</p>
                      </div>
                      <div className="suggestion-options">
                        {set.options.map((option) => {
                          const suggestionId = `${set.date}-${set.meal}-${option.name}`;
                          const isExpanded = expandedSuggestions.has(suggestionId);
                          return (
                            <article
                              className="suggestion-option"
                              key={suggestionId}
                              data-expanded={isExpanded}
                            >
                              <div className="suggestion-option__topline">
                                <strong>{option.name}</strong>
                                {option.href && isExpanded && (
                                  <a href={option.href} target="_blank" rel="noreferrer">
                                    <ExternalLink size={14} />
                                  </a>
                                )}
                              </div>
                              <div className="suggestion-meta-row">
                                <span className={option.exception ? "score-chip score-chip--exception" : "score-chip"}>
                                  {option.exception ? <Ticket size={13} /> : <Star size={13} fill="currentColor" />}
                                  {option.scoreLabel}
                                </span>
                                {isExpanded && <span className="cuisine-chip">{option.cuisine}</span>}
                              </div>
                              <div className="suggestion-facts">
                                <span>
                                  <MapPin size={14} />
                                  {option.area}
                                </span>
                                {isExpanded && <span>{option.familyNote}</span>}
                              </div>
                              {isExpanded && <em>{option.reason}</em>}
                              <button
                                className="expand-button"
                                type="button"
                                onClick={() => toggleSuggestion(suggestionId)}
                                aria-expanded={isExpanded}
                                aria-label={isExpanded ? "Show less" : "Show more"}
                              >
                                {isExpanded ? (
                                  <>
                                    <ChevronUp size={18} />
                                    Less
                                  </>
                                ) : (
                                  <>
                                    <ChevronDown size={18} />
                                    More
                                  </>
                                )}
                              </button>
                            </article>
                          );
                        })}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
