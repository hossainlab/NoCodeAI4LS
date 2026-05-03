import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import WhyNoCode from "@/components/WhyNoCode";
import Landscape from "@/components/Landscape";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Benefits from "@/components/Benefits";
import Curriculum from "@/components/Curriculum";
import Outcomes from "@/components/Outcomes";
import Enroll from "@/components/Enroll";
import Mentor from "@/components/Mentor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <WhyNoCode />
      <Landscape />
      <WhoIsThisFor />
      <Benefits />
      <Curriculum />
      <Outcomes />
      <Enroll />
      <Mentor />
      <Footer />
    </main>
  );
}
