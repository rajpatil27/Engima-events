import { Link } from "@tanstack/react-router";
import { Sparkles, Github, Twitter, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-hero grid place-items-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </span>
            Enigma<span className="text-gradient">Events</span>
          </Link>
          <p className="mt-4 text-muted-foreground max-w-sm">
            A modern event management platform — discover, register and host unforgettable experiences in one place.
          </p>
          <div className="flex gap-3 mt-5">
            {[Twitter, Instagram, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 grid place-items-center rounded-full glass hover:bg-white/10 transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/events">All Events</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Account</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground space-y-1 px-4">
        <p>© 2026 Enigma Events | All Rights Reserved</p>
        <p>Created by Dr. P. B. Dhamdhere</p>
        <p>Designed & Developed for innovation and learning</p>
      </div>
    </footer>
  );
}
