import { OurMission } from "./_components/OurMission";
import { OurTeam } from "./_components/OurTeem";
import { SubscribeCard } from "./_components/SubscribeCard";
import { Testimonials } from "./_components/Testimonials";
import { WhatWeCanCover } from "./_components/WhatWeCanCover";

export default function Page() {
  return (
    <main className="container mx-auto my-10 px-4">
      <OurMission />
      <WhatWeCanCover />
      <OurTeam />
      <Testimonials />
      <SubscribeCard />
    </main>
  );
}
