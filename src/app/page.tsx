import Hero from "@/components/Hero";
import StackMarquee from "@/components/StackMarquee";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import AiWorkflow from "@/components/AiWorkflow";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
import Marquee from "@/components/Marquee";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <StackMarquee />
      </Reveal>
      <Services />
      <Reveal>
        <FeaturedProjects />
      </Reveal>
      <Reveal>
        <AiWorkflow />
      </Reveal>
      <Reveal>
        <AboutMe />
      </Reveal>
      <Reveal>
        <TechStack />
      </Reveal>
      <Reveal>
        <Marquee />
      </Reveal>
      <Reveal>
        <ContactCta />
      </Reveal>
    </>
  );
}
