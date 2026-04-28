import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Lock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — EnigmaEvents" },
      { name: "description", content: "Sign in to your EnigmaEvents account to discover and register for events." },
    ],
  }),
  component: Login,
});

function Login() {
  return (
    <section className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div className="hidden lg:block">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Welcome back</span>
        <h1 className="mt-2 font-display text-5xl font-bold leading-tight">
          Your next great<br /> experience is <span className="text-gradient">one click away</span>.
        </h1>
        <p className="mt-6 text-muted-foreground max-w-md">
          Sign in to track your registrations, get reminders, and never miss the events that matter to you.
        </p>
      </div>

      <div className="max-w-md w-full mx-auto rounded-3xl p-8 bg-gradient-card border border-border shadow-elegant">
        <h2 className="font-display text-2xl font-bold">Sign in</h2>
        <p className="text-sm text-muted-foreground mt-1">Enter your credentials to continue</p>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
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
              <input type="password" required placeholder="••••••••" className="flex-1 bg-transparent py-3 outline-none text-sm" />
            </div>
          </label>

          <div className="flex items-center justify-between text-xs">
            <label className="inline-flex items-center gap-2 text-muted-foreground">
              <input type="checkbox" className="accent-primary" /> Remember me
            </label>
            <a href="#" className="text-primary hover:underline">Forgot password?</a>
          </div>

          <button className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-hero text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition">
            Sign in <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          New here?{" "}
          <Link to="/register" className="text-primary hover:underline">Create an account</Link>
        </p>
      </div>
    </section>
  );
}
