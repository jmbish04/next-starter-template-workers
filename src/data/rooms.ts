import type { Photo } from "./photos";

export interface Room {
  id: string;
  name: string;
  overview: string;
  mood: Photo[];
  level: "lower" | "upper";
}

export const rooms: Room[] = [
  {
    id: "entry",
    name: "Entry",
    overview: "Refresh the front door and flooring for a welcoming feel.",
    level: "lower",
    mood: [
      { src: "/photos/entry.svg", alt: "Entry inspiration" },
    ],
  },
  {
    id: "living-room",
    name: "Living Room",
    overview: "Open up the space with new flooring and lighting.",
    level: "lower",
    mood: [
      { src: "/photos/living-room.svg", alt: "Living room inspiration" },
    ],
  },
  {
    id: "kitchen",
    name: "Kitchen",
    overview: "Upgrade cabinets and appliances for a modern look.",
    level: "lower",
    mood: [
      { src: "/photos/kitchen.svg", alt: "Kitchen inspiration" },
    ],
  },
  {
    id: "patio",
    name: "Patio/Backyard",
    overview: "Create an inviting backyard patio with seating and greenery.",
    level: "lower",
    mood: [
      { src: "/photos/patio.svg", alt: "Patio inspiration" },
    ],
  },
  {
    id: "primary-suite",
    name: "Primary Suite",
    overview: "Combine bedroom and bath into a comfortable retreat.",
    level: "upper",
    mood: [
      { src: "/photos/primary-suite.svg", alt: "Primary suite inspiration" },
    ],
  },
  {
    id: "library",
    name: "Library",
    overview: "Convert the old kitchen into a quiet library with built-ins.",
    level: "upper",
    mood: [
      { src: "/photos/library.svg", alt: "Library inspiration" },
    ],
  },
];
