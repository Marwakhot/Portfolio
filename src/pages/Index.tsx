import HeroSection from "@/components/HeroSection";
import CurrentSection from "@/components/CurrentSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <CurrentSection />
      <TimelineSection />
    </main>
  );
};

export default Index;
