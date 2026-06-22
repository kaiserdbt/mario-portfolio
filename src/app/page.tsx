import Hero from "@/components/Hero";
import StackMarquee from "@/components/StackMarquee";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import AiWorkflow from "@/components/AiWorkflow";
import Contributions from "@/components/Contributions";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
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
      <Contributions />
      <Reveal>
        <AboutMe />
      </Reveal>
      <Reveal>
        <TechStack />
      </Reveal>
      <Reveal>
        <ContactCta />
      </Reveal>
    </>
  );
}
