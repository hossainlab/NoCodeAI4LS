import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import WhyNoCode from "@/components/WhyNoCode";
import Landscape from "@/components/Landscape";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Benefits from "@/components/Benefits";
import Curriculum from "@/components/Curriculum";
import Sessions from "@/components/Sessions";
import ToolsShowcase from "@/components/ToolsShowcase";
import Outcomes from "@/components/Outcomes";
import Certificate from "@/components/Certificate";
import Pricing from "@/components/Pricing";
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
      <Sessions />
      <ToolsShowcase />
      <Outcomes />
      <Certificate />
      <Pricing />
      <Mentor />
      <Footer />
    </main>
  );
}
