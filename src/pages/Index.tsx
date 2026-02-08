import HeroSection from "@/components/HeroSection";
import CurrentSection from "@/components/CurrentSection";
import ProjectsSection from "@/components/ProjectsSection";
import HackathonsSection from "@/components/HackathonsSection";
import HistorySection from "@/components/HistorySection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <CurrentSection />
      <HackathonsSection />
      <HistorySection />
    </main>
  );
};

export default Index;
