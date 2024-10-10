import { ContactCard } from "./_components/ContactCard";
import { LocationCard } from "./_components/LocationCard";

export default function Contact() {
  return (
    <>
      <main className="container mx-auto my-5 flex flex-col gap-5 px-4">
        <ContactCard />
        <LocationCard />
      </main>
    </>
  );
}
