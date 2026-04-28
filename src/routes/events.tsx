import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { events } from "@/data/events";
import { EventCard } from "@/components/EventCard";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "All Events — EnigmaEvents" },
      { name: "description", content: "Browse all upcoming events: tech summits, music festivals, workshops and cultural nights." },
      { property: "og:title", content: "All Events — EnigmaEvents" },
      { property: "og:description", content: "Browse all upcoming events on EnigmaEvents." },
    ],
  }),
  component: EventsPage,
});

const categories = ["All", "Tech", "Music", "Workshop", "Culture"] as const;

function EventsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchCat = cat === "All" || e.category === cat;
      const matchQ =
        !q ||
        e.name.toLowerCase().includes(q.toLowerCase()) ||
        e.city.toLowerCase().includes(q.toLowerCase()) ||
        e.venue.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, cat]);

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Discover</span>
        <h1 className="mt-2 font-display text-5xl md:text-6xl font-bold">All Events</h1>
        <p className="mt-4 text-muted-foreground">
          Filter by category or search by name, venue or city. New events drop every week.
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="glass rounded-full p-1.5 flex items-center gap-2 max-w-md w-full">
          <Search className="w-4 h-4 text-muted-foreground ml-3" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, venue or city"
            className="flex-1 bg-transparent outline-none px-2 py-2 text-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                cat === c
                  ? "bg-gradient-hero text-primary-foreground border-transparent shadow-glow"
                  : "border-border text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-20 text-center text-muted-foreground">
          No events match your filters. Try clearing them.
        </div>
      ) : (
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((e) => <EventCard key={e.id} event={e} />)}
        </div>
      )}
    </section>
  );
}
