import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type EventoEvent } from "@prisma/client";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getEvents(city: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  const events: EventoEvent[] = await response.json();

  return events;
}

export async function getEvent(slug: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: EventoEvent = await response.json();

  return event;
}
