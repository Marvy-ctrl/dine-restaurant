import Image from "next/image";
import Hero from "@/components/hero";
import EnjoyablePlaces from "@/components/enjoyable-places";
import Menu from "@/components/menu";
import Events from "@/components/events";
import Ready from "@/components/ready";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <EnjoyablePlaces />
      <Menu />
      <Events />
      <Ready />
      <Footer />
    </main>
  );
}
