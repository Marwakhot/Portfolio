import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack?: string;
  color: string;
  index: number;
  github?: string;
}

const ProjectCard = ({ title, description, techStack, color, index, github }: ProjectCardProps) => {
  return (
    <motion.div
      className={`${color} rounded-3xl p-5 h-[240px] flex flex-col justify-between shadow-card transition-all duration-300 border-2 border-foreground/10 backdrop-blur-none relative overflow-hidden group pointer-events-auto`}
      whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-foreground/5 rounded-full" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-foreground/5 rounded-full" />
      
      {/* Glowing border effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold font-outfit text-white group-hover:text-black transition-colors leading-tight mb-3">
          {title}
        </h3>
      </div>
      
      <div className="relative z-10 flex flex-col gap-2">
        <p className="text-white/90 font-space text-xs leading-relaxed">{description}</p>
        
        {/* Tech Stack */}
        {techStack && (
          <div className="flex flex-wrap gap-1 mt-1">
            {techStack.split('•').map((tech, i) => (
              <span 
                key={i}
                className="text-[10px] font-space font-semibold text-white/95 bg-foreground/10 px-2 py-0.5 rounded-full"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}
        
        <a 
          href={github || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors w-fit mt-1 relative z-[100] cursor-pointer"
          onClick={(e) => {
            if (github && github !== "#") {
              e.stopPropagation();
              window.open(github, '_blank', 'noopener,noreferrer');
            } else {
              e.preventDefault();
            }
          }}
        >
          <Github className="w-4 h-4 text-white/70" />
          <span className="text-xs font-space text-white/70">
            GitHub
          </span>
        </a>
      </div>
      
      {/* Tech dots decoration */}
      <div className="absolute bottom-4 right-4 flex gap-1 pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-funky-pink/60" />
        <div className="w-2 h-2 rounded-full bg-funky-teal/60" />
        <div className="w-2 h-2 rounded-full bg-funky-yellow/80" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;