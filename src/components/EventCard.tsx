import { CalendarDays, MapPin, Users, ArrowUpRight } from "lucide-react";
import type { EventItem } from "@/data/events";

const categoryStyles: Record<string, string> = {
  Tech: "bg-secondary/20 text-secondary border-secondary/30",
  Music: "bg-primary/20 text-primary border-primary/30",
  Workshop: "bg-accent/20 text-accent border-accent/30",
  Culture: "bg-primary-glow/20 text-primary-glow border-primary-glow/30",
};

export function EventCard({ event }: { event: EventItem }) {
  const pct = Math.round((event.taken / event.seats) * 100);
  const date = new Date(event.date);
  return (
    <article className="group relative rounded-3xl overflow-hidden bg-gradient-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 shadow-elegant">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur ${categoryStyles[event.category]}`}>
            {event.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium glass">
          {event.price}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="flex flex-col items-center px-3 py-2 rounded-xl glass">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {date.toLocaleString("en-US", { month: "short" })}
            </span>
            <span className="text-xl font-display font-bold leading-none">{date.getDate()}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-xl leading-tight group-hover:text-gradient transition">
          {event.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{event.description}</p>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="w-4 h-4 text-primary" />
            {date.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric" })} · {event.time}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            {event.venue}, {event.city}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            {event.taken}/{event.seats} registered
          </div>
        </div>

        <div className="mt-4 h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full bg-gradient-hero" style={{ width: `${pct}%` }} />
        </div>

        <button className="mt-5 w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-hero text-primary-foreground font-medium shadow-glow hover:opacity-90 transition">
          Register Now <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}
