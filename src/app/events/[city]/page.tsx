import EventList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "../loading";
import { capitalize } from "@/lib/utils";
import { type Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = {
  params: {
    city: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const page = searchParams.page || 1;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h">
      <H1 className="mb-10">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventList city={city} page={+page} />
      </Suspense>
    </main>
  );
}
