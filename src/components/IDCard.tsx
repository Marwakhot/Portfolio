import { Linkedin, Github } from "lucide-react";

const IDCard = () => {
  return (
    <div className="relative -ml-16 -translate-x-12">
      {/* Lanyard/String - extends to top of screen */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[50vh] w-0.5 h-[50vh] bg-foreground/30" />
      <div className="absolute left-1/2 -translate-x-1/2 -top-[50vh] w-4 h-4 rounded-full bg-foreground/20 border-2 border-foreground/30" />
      
      {/* Card */}
      <div className="id-card-hang w-72 bg-card rounded-2xl shadow-2xl relative">
        {/* Photo - positioned above everything */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-12 z-10">
          <div className="w-36 h-36 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
            <img 
              src="/profile.jpeg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Gradient Header */}
        <div 
          className="h-32 relative rounded-t-2xl"
          style={{ background: 'linear-gradient(135deg, hsl(350, 85%, 60%) 0%, hsl(35, 95%, 55%) 100%)' }}
        >
          {/* Clip/Hole */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2">
            <div className="w-10 h-5 bg-foreground/20 rounded-full" />
          </div>
        </div>
        
        {/* Spacing after image */}
        <div className="pt-20"></div>

        {/* Content */}
        <div className="p-6 pt-0 text-center">
          <p className="text-muted-foreground text-base">CS Student</p>
          <p className="text-accent font-semibold text-base">AI & Big Data</p>
        
          
          <div className="mt-4 space-y-1 text-sm text-muted-foreground">
            <p>marwakhot007@gmail.com</p>
            <p>+971 58 588 5323</p>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-5">
            <a 
              href="https://www.linkedin.com/in/marwa-khot-238482353/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Marwakhot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
          
          {/* Barcode */}
          <div className="flex justify-center gap-0.5 mt-4">
            {[2, 1, 3, 1, 2, 1, 3, 2, 1, 2, 3, 1, 2].map((w, i) => (
              <div 
                key={i} 
                className="bg-foreground/20 rounded-sm"
                style={{ width: `${w * 2.5}px`, height: '24px' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;