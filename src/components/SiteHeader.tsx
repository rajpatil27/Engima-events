import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
  { to: "/dashboard", label: "Dashboard" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="w-8 h-8 rounded-lg bg-gradient-hero shadow-glow grid place-items-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </span>
          <span>Enigma<span className="text-gradient">Events</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
              activeProps={{ className: "px-4 py-2 rounded-full text-sm text-foreground bg-white/10" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/login" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition">
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-hero text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-foreground">
                {n.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2 border-t border-border">
              <Link to="/login" onClick={() => setOpen(false)} className="flex-1 py-2 text-center rounded-full border border-border">
                Login
              </Link>
              <Link to="/register" onClick={() => setOpen(false)} className="flex-1 py-2 text-center rounded-full bg-gradient-hero text-primary-foreground">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
