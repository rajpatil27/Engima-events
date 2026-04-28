import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create account — EnigmaEvents" },
      { name: "description", content: "Create your free EnigmaEvents account in under a minute." },
    ],
  }),
  component: Register,
});

function Register() {
  return (
    <section className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div className="max-w-md w-full mx-auto rounded-3xl p-8 bg-gradient-card border border-border shadow-elegant order-2 lg:order-1">
        <h2 className="font-display text-2xl font-bold">Create your account</h2>
        <p className="text-sm text-muted-foreground mt-1">Free forever · No credit card required</p>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Full name</span>
            <div className="mt-1 flex items-center gap-2 rounded-xl glass px-3">
              <User className="w-4 h-4 text-muted-foreground" />
              <input required placeholder="Jane Doe" className="flex-1 bg-transparent py-3 outline-none text-sm" />
            </div>
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Email</span>
            <div className="mt-1 flex items-center gap-2 rounded-xl glass px-3">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <input type="email" required placeholder="you@example.com" className="flex-1 bg-transparent py-3 outline-none text-sm" />
            </div>
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Password</span>
            <div className="mt-1 flex items-center gap-2 rounded-xl glass px-3">
              <Lock className="w-4 h-4 text-muted-foreground" />
              <input type="password" required placeholder="At least 8 characters" className="flex-1 bg-transparent py-3 outline-none text-sm" />
            </div>
          </label>

          <button className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-hero text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition">
            Create account <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">Sign in</Link>
        </p>
      </div>

      <div className="hidden lg:block order-1 lg:order-2">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Join the community</span>
        <h1 className="mt-2 font-display text-5xl font-bold leading-tight">
          12,000+ people<br /> are already <span className="text-gradient">discovering more</span>.
        </h1>
        <ul className="mt-8 space-y-3 text-muted-foreground">
          {["Personal event timeline", "One-tap registrations", "Smart recommendations", "Reminders & QR tickets"].map((f) => (
            <li key={f} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gradient-hero" /> {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
