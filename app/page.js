import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container">
      <Header />
      <Suspense key={query} fallback={<Loading />}>
        <EventList query={query} />
      </Suspense>
    </section>
  );
}

// MONGO_URL = mongodb://localhost:27017/eventry
// SEND_EMAIL_RESEND_API_URL = re_dKeWxQ9t_M3k5dQhyXcnndubaMEgw55w1
