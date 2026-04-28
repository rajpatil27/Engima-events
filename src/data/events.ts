import tech from "@/assets/event-tech.jpg";
import music from "@/assets/event-music.jpg";
import workshop from "@/assets/event-workshop.jpg";
import culture from "@/assets/event-culture.jpg";

export type EventItem = {
  id: string;
  name: string;
  category: "Tech" | "Music" | "Workshop" | "Culture";
  date: string;
  time: string;
  venue: string;
  city: string;
  price: string;
  seats: number;
  taken: number;
  image: string;
  description: string;
};

export const events: EventItem[] = [
  {
    id: "1",
    name: "Enigma Tech Summit 2026",
    category: "Tech",
    date: "2026-05-12",
    time: "09:00",
    venue: "MMIT Auditorium",
    city: "Pune",
    price: "Free",
    seats: 500,
    taken: 312,
    image: tech,
    description:
      "Two days of keynotes from engineers shaping AI, distributed systems and the future of the web.",
  },
  {
    id: "2",
    name: "Neon Pulse Music Festival",
    category: "Music",
    date: "2026-06-08",
    time: "17:00",
    venue: "Lohgaon Open Grounds",
    city: "Pune",
    price: "₹899",
    seats: 3000,
    taken: 2140,
    image: music,
    description:
      "An open-air sunset festival with indie, electronic and hip-hop artists from across the country.",
  },
  {
    id: "3",
    name: "Founders & Builders Workshop",
    category: "Workshop",
    date: "2026-05-22",
    time: "10:30",
    venue: "Innovation Hub, MMIT",
    city: "Pune",
    price: "₹299",
    seats: 80,
    taken: 64,
    image: workshop,
    description:
      "A hands-on day to validate your idea, prototype with no-code, and pitch to working founders.",
  },
  {
    id: "4",
    name: "Lantern Cultural Night",
    category: "Culture",
    date: "2026-07-02",
    time: "18:30",
    venue: "Heritage Plaza",
    city: "Pune",
    price: "₹150",
    seats: 1200,
    taken: 580,
    image: culture,
    description:
      "Food stalls, classical fusion stages and a sky full of paper lanterns released at midnight.",
  },
  {
    id: "5",
    name: "DevOps & Cloud Bootcamp",
    category: "Tech",
    date: "2026-05-30",
    time: "09:30",
    venue: "MMIT CS Block",
    city: "Pune",
    price: "₹499",
    seats: 120,
    taken: 41,
    image: tech,
    description:
      "Ship to production by lunch — Docker, Kubernetes, CI/CD pipelines and cloud-native patterns.",
  },
  {
    id: "6",
    name: "Acoustic Sunset Sessions",
    category: "Music",
    date: "2026-06-19",
    time: "18:00",
    venue: "Riverside Amphitheatre",
    city: "Pune",
    price: "₹450",
    seats: 600,
    taken: 410,
    image: music,
    description:
      "Stripped-down sets from your favourite indie voices, candle-lit, by the river.",
  },
];
