import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVenue";
import HeroSection from "@/components/details/HeroSection";
import { getEventById } from "@/db/quires";

async function generateMetadata({ params: { id } }) {
  const event = await getEventById(id);
  return {
    title: `Eventry - ${event?.name}`,
    description: event?.description,
  };
}

const EventDetailsPage = async ({ params: { id } }) => {
  const eventInfo = await getEventById(id);
  console.log(eventInfo);

  return (
    <>
      <HeroSection eventInfo={eventInfo} />
      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails details={eventInfo?.details} swags={eventInfo?.swags} />
          <EventVenue location={eventInfo?.location} />
        </div>
      </section>
    </>
  );
};

export default EventDetailsPage;
