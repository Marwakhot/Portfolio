import HeroSection from "@/components/HeroSection";
import CurrentSection from "@/components/CurrentSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import HackathonsSection from "@/components/HackathonsSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <HackathonsSection />
      <CurrentSection />
      <ExperienceSection />
    </main>
  );
};

export default Index;
