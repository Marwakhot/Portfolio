import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import IDCard from "./IDCard";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ID Card - Shows first on mobile */}
          <div className="flex justify-center lg:justify-end pt-20 order-first lg:order-last -ml-12 lg:-ml-24">
            <IDCard />
          </div>

          {/* Left Content */}
          <div className="space-y-8 order-last lg:order-first lg:pl-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi I'm <span className="bg-gradient-to-r from-accent via-primary to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Marwa</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              I could write a long "About Me," but honestly the projects below say it better. Go take a look.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToProjects}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-xl"
              >
                Projects
              </Button>
              <Button
                onClick={scrollToExperience}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl"
              >
                Experience
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="pt-8">
              <ArrowDown className="text-primary animate-bounce" size={28} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
