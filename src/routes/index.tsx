import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Search, Sparkles, Star, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero-events.jpg";
import { events } from "@/data/events";
import { EventCard } from "@/components/EventCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EnigmaEvents — Discover unforgettable events" },
      { name: "description", content: "From tech summits to music festivals, find and register for the best events near you." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = events.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30" width={1536} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="container mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-accent" /> 200+ events live this month
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              Where moments<br />
              become <span className="text-gradient">unforgettable</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Discover hand-picked tech summits, music festivals, workshops and cultural nights —
              register in seconds and never miss what matters.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/events" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-hero text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition">
                Explore Events <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/register" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-semibold hover:bg-white/10 transition">
                Create Account
              </Link>
            </div>

            {/* search bar */}
            <div className="mt-10 max-w-xl glass rounded-2xl p-2 flex items-center gap-2">
              <Search className="w-5 h-5 text-muted-foreground ml-3" />
              <input
                placeholder="Search events, cities, categories..."
                className="flex-1 bg-transparent outline-none px-2 py-2 text-sm placeholder:text-muted-foreground"
              />
              <Link to="/events" className="px-5 py-2 rounded-xl bg-gradient-hero text-primary-foreground text-sm font-medium">
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container mx-auto px-6 -mt-12 relative z-10">
        <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { k: "12K+", v: "Active Users" },
            { k: "850+", v: "Events Hosted" },
            { k: "47K+", v: "Registrations" },
            { k: "4.9★", v: "User Rating" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.k}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Trending now</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">Featured Events</h2>
          </div>
          <Link to="/events" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((e) => <EventCard key={e.id} event={e} />)}
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Why EnigmaEvents</span>
          <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">
            Built for organizers,<br /> loved by attendees.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Search, title: "Smart Discovery", desc: "Filter by category, date, city or vibe — find your next experience in seconds." },
            { icon: Zap, title: "One-tap Registration", desc: "No clunky forms. Reserve your spot with a single tap and a clean confirmation." },
            { icon: Calendar, title: "Personal Tracker", desc: "Every event you've joined in one timeline, with reminders and ticket QR codes." },
            { icon: ShieldCheck, title: "Secure by default", desc: "End-to-end encrypted auth, role-based access and audited data handling." },
            { icon: Star, title: "Curated Quality", desc: "Every event is reviewed by admins so what you see is what you actually want." },
            { icon: TrendingUp, title: "Organizer Insights", desc: "Live dashboards, registration analytics and exportable reports for hosts." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-3xl p-6 bg-gradient-card border border-border hover:border-primary/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-hero shadow-glow grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-center shadow-elegant">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
          <h2 className="relative font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Ready to host your own?
          </h2>
          <p className="relative mt-4 text-primary-foreground/90 max-w-xl mx-auto">
            Join hundreds of organizers using EnigmaEvents to launch and manage their best events yet.
          </p>
          <Link
            to="/register"
            className="relative mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-background text-foreground font-semibold hover:scale-105 transition"
          >
            Become an Organizer <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
