import { createFileRoute } from "@tanstack/react-router";
import { Target, Layers, Lock, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EnigmaEvents" },
      { name: "description", content: "EnigmaEvents is a modern event management platform built by Team B at MMIT Pune." },
      { property: "og:title", content: "About — EnigmaEvents" },
      { property: "og:description", content: "Learn about the team and the system architecture behind EnigmaEvents." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Ganesh D. Savare", roll: "TEB 41", role: "Backend & Database" },
  { name: "Rajvardhan A. Thombre", roll: "TEB 47", role: "Frontend & UI" },
  { name: "Prathmesh P. Bhushette", roll: "TEB 48", role: "System Architecture" },
  { name: "Chetan S. More", roll: "TEB 60", role: "Auth & Security" },
];

const layers = [
  { name: "Presentation", items: ["Web Portal", "API Gateway", "Mobile App"] },
  { name: "Application", items: ["User Mgmt", "Registration", "Payments", "CMS", "Analytics"] },
  { name: "Messaging", items: ["Kafka / RabbitMQ"] },
  { name: "Data", items: ["SQL DB", "NoSQL", "Redis Cache", "File Storage"] },
  { name: "Infrastructure", items: ["Docker", "Kubernetes", "AWS / Azure / GCP"] },
];

export default function AboutPage() {
  return (
    <section className="container mx-auto px-6 py-16 space-y-24">
      <div className="max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">About the project</span>
        <h1 className="mt-2 font-display text-5xl md:text-6xl font-bold">
          A modern take on <span className="text-gradient">event management</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          EnigmaEvents replaces tedious manual processes for creating, managing, and registering for events.
          A central, secure, user-friendly platform serving two roles — Administrators with full control over
          event lifecycles, and General Users with seamless discovery and registration.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { i: Target, t: "Purpose", d: "Make event creation and registration effortless." },
          { i: Layers, t: "Modular", d: "Auth, browsing, registration, admin — clean separation." },
          { i: Lock, t: "Secure", d: "Encrypted auth, role-based access, validated data." },
          { i: Globe, t: "Scalable", d: "Built to support thousands of concurrent users." },
        ].map(({ i: Icon, t, d }) => (
          <div key={t} className="rounded-3xl p-6 bg-gradient-card border border-border">
            <Icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-lg font-semibold">{t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>

      {/* Architecture */}
      <div>
        <span className="text-xs uppercase tracking-[0.3em] text-primary">System architecture</span>
        <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">Built in layers.</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          A clean separation between presentation, business logic, messaging, data and infrastructure —
          designed to grow from a single-server prototype to a global, multi-region deployment.
        </p>

        <div className="mt-10 space-y-3">
          {layers.map((l, idx) => (
            <div
              key={l.name}
              className="rounded-2xl bg-gradient-card border border-border p-5 flex flex-col md:flex-row md:items-center gap-4"
              style={{ marginLeft: `${idx * 12}px` }}
            >
              <div className="md:w-48 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-hero grid place-items-center text-sm font-bold text-primary-foreground">
                  {idx + 1}
                </div>
                <div className="font-display font-semibold">{l.name}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {l.items.map((it) => (
                  <span key={it} className="px-3 py-1 rounded-full text-xs glass">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div>
        <span className="text-xs uppercase tracking-[0.3em] text-primary">The team</span>
        <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">Made by Team B.</h2>
        <p className="mt-4 text-muted-foreground">Department of Computer Engineering, MMIT Pune · Guided by Prof. P. B. Dhamdhere</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="rounded-3xl p-6 bg-gradient-card border border-border text-center hover:border-primary/40 transition">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-hero shadow-glow grid place-items-center text-2xl font-display font-bold text-primary-foreground">
                {m.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
              </div>
              <h3 className="mt-4 font-display font-semibold">{m.name}</h3>
              <p className="text-xs text-muted-foreground">{m.roll}</p>
              <p className="mt-2 text-sm text-primary">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
