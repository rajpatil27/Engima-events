import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Users, Ticket, TrendingUp, MapPin, Clock } from "lucide-react";
import { events } from "@/data/events";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — EnigmaEvents" },
      { name: "description", content: "Your registered events, recommendations and activity at a glance." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const stats = [
    { icon: CalendarDays, label: "My Events", value: "8", color: "text-primary" },
    { icon: Ticket, label: "Tickets Booked", value: "15", color: "text-secondary" },
    { icon: Users, label: "Network", value: "127", color: "text-accent" },
    { icon: TrendingUp, label: "This Month", value: "+24%", color: "text-primary-glow" },
  ];

  const myEvents = events.slice(0, 3);
  const recommended = events.slice(3);

  return (
    <section className="container mx-auto px-6 py-12 space-y-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Welcome back</span>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold">Hi, Chetan 👋</h1>
          <p className="mt-2 text-muted-foreground">Here's everything happening with your events.</p>
        </div>
        <Link to="/events" className="px-5 py-2.5 rounded-full bg-gradient-hero text-primary-foreground font-medium shadow-glow text-sm">
          Browse new events
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="rounded-2xl p-6 bg-gradient-card border border-border">
            <Icon className={`w-6 h-6 ${color}`} />
            <div className="mt-4 font-display text-3xl font-bold">{value}</div>
            <div className="text-sm text-muted-foreground mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* My events table-like list */}
      <div>
        <h2 className="font-display text-2xl font-bold mb-4">My Upcoming Events</h2>
        <div className="rounded-3xl bg-gradient-card border border-border overflow-hidden divide-y divide-border">
          {myEvents.map((e) => (
            <div key={e.id} className="p-5 flex flex-col md:flex-row md:items-center gap-4 hover:bg-white/[0.02] transition">
              <img src={e.image} alt={e.name} loading="lazy" className="w-full md:w-32 h-24 object-cover rounded-xl" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider bg-primary/20 text-primary">{e.category}</span>
                  <span className="text-xs text-muted-foreground">Confirmed</span>
                </div>
                <h3 className="mt-1 font-display font-semibold">{e.name}</h3>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" />{new Date(e.date).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{e.time}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{e.venue}</span>
                </div>
              </div>
              <button className="px-4 py-2 rounded-full glass text-sm hover:bg-white/10">View ticket</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-display text-2xl font-bold mb-4">Recommended for you</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recommended.map((e) => (
            <Link key={e.id} to="/events" className="group rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/40 transition">
              <div className="aspect-video overflow-hidden">
                <img src={e.image} alt={e.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <span className="text-[10px] uppercase tracking-wider text-primary">{e.category}</span>
                <h3 className="mt-1 font-display font-semibold leading-tight">{e.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{e.venue} · {new Date(e.date).toLocaleDateString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
