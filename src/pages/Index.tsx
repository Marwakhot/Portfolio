import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import HangingIDCard from "@/components/HangingIDCard";

const projects = [
  { 
    title: "Automated Bug Triage System", 
    description: "Solves slow bug assignment by using NLP and ML to automatically predict the responsible team and priority for each bug report, handling bulk predictions via a Streamlit dashboard.", 
    techStack: "Python • NLP (TF-IDF) • LightGBM • Flask API • Streamlit • Docker",
    color: "bg-funky-pink", 
    github: "https://github.com/Marwakhot/bug-triage-nlp-api" 
  },
  { 
    title: "AI Safety Audit: Credit Fairness", 
    description: "Fixed the 'black box' problem in a loan-approval AI by finding hidden biases and creating a safety roadmap to prevent legal and ethical risks.", 
    techStack: "Python • Fairlearn • Scikit-learn • NIST AI RMF",
    color: "bg-funky-teal", 
    github: "#" 
  },
  { 
    title: "Portfolio Capital Optimization", 
    description: "Prevents extreme portfolio losses by calculating risk-adjusted capital requirements for a $1,000,000 portfolio, recommending a $21,578 daily capital reserve using 3 VaR models.", 
    techStack: "Python • Pandas • NumPy • SciPy • Monte Carlo Simulation",
    color: "bg-funky-yellow", 
    github: "https://github.com/Marwakhot/QuantRisk-VaR-Validation" 
  },
  { 
    title: "PEAR Internships Platform", 
    description: "A full-stack web application that connects students and companies by streamlining internship postings, applications, and application tracking through role-based dashboards.", 
    techStack: "HTML • JavaScript • CSS • Node.js • MySQL • REST APIs",
    color: "bg-funky-orange", 
    github: "https://github.com/Marwakhot/pear-internships" 
  },
  { 
    title: "Robot Navigation Using AI", 
    description: "Solves autonomous navigation challenges in a 10m × 10m simulated arena by implementing Fuzzy Logic, Behavior Trees, and Q-Learning for obstacle avoidance.", 
    techStack: "Python • Fuzzy Logic • Behavior Trees • Reinforcement Learning (Q-Learning)",
    color: "bg-funky-purple", 
    github: "https://github.com/Marwakhot/Gazebo_robot_navigation" 
  },
  { 
    title: "Brain Brew", 
    description: "An AI-powered platform that tackles passive PDF learning by using AI to ask thought-provoking questions, making students think critically with 4 adaptive difficulty levels.", 
    techStack: "React • TypeScript • Supabase • PostgreSQL • Three.js • Tailwind CSS",
    color: "bg-funky-green", 
    github: "https://github.com/Marwakhot/BrainBrew" 
  },
  { 
    title: "Stratify", 
    description: "Helps automotive companies manage the transition to EVs by providing real-time KPI tracking, sustainability monitoring, and operational insights to optimize resource use.", 
    techStack: "System Design • UML Modeling",
    color: "bg-funky-pink", 
    github: "https://github.com/Marwakhot/Stratify" 
  },
  { 
    title: "Quantopian Failure Analysis", 
    description: "Explains the failure of a $48M fintech startup by identifying weaknesses in scope control, risk monitoring, and stakeholder communication using PMBOK principles.", 
    techStack: "PMBOK Framework • Case Study Research",
    color: "bg-funky-teal", 
    github: "https://github.com/Marwakhot/Quantopian_Failure_Analysis" 
  },
];

const currentActivities = [
  { 
    title: "Data Science Intern", 
    period: "Oct 2025 - April 2026", 
    place: "Alamar", 
    color: "text-funky-orange",
  },
  { 
    title: "Studying Bachelor of CS", 
    period: "AI and Big Data", 
    place: "UOWD", 
    color: "text-funky-teal",
  },
];

const pastActivities = [
  { 
    title: "Gitex Representative", 
    period: "Oct 2025", 
    place: "dreamloop.ai",
  },
  { 
    title: "High School Diploma", 
    period: "2022-2024", 
    place: "NIMS, Dubai",
  },
];

const Index = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end end"],
  });

  const spread = useTransform(projectsScrollProgress, [0, 0.5], [0, 1]);

  return (
    <div className="bg-background">
      {/* About Me Section */}
      <section className="min-h-screen flex items-center px-6 overflow-hidden">
        <div className="container mx-auto flex items-center justify-between">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-outfit font-bold text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi I'm <span className="text-funky-pink">Marwa</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-xl md:text-2xl text-muted-foreground font-space leading-relaxed"
            >
              I could write a long "About Me," but honestly the projects below say it better.
            </motion.p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-12 text-3xl text-funky-teal"
            >
              ↓
            </motion.div>
          </div>

          <div className="hidden md:block pt-32 -ml-96 -translate-x-[3cm]">
            <HangingIDCard />
          </div>
        </div>
      </section>

      {/* Main Content Section - Projects & Journey Side-by-Side */}
      {/* Increased min-h to [350vh] to give more scroll room for all rows */}
      <section ref={projectsRef} className="min-h-[350vh] mt-20">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container mx-auto px-6 flex flex-row items-start gap-12">
            
            {/* Left side - Title + Journey */}
            <motion.div 
              className="w-1/3 flex-shrink-0 pt-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-outfit font-bold text-foreground leading-tight">
                look into my{" "}
                <span className="text-funky-teal">projects</span>
              </h2>
              <div className="mt-4 h-1 w-24 bg-funky-yellow rounded-full mb-12" />

              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-outfit font-bold text-foreground mb-4 uppercase tracking-wider">Currently</h3>
                  <div className="space-y-4 border-l-2 border-funky-pink pl-4">
                    {currentActivities.map((item, i) => (
                      <div key={i}>
                        <h4 className={`text-lg font-bold ${item.color}`}>{item.title}</h4>
                        <p className="text-xs font-space text-muted-foreground">{item.period} • {item.place}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-outfit font-bold text-foreground mb-4 uppercase tracking-wider">Previously</h3>
                  <div className="space-y-4 border-l-2 border-funky-orange pl-4">
                    {pastActivities.map((item, i) => (
                      <div key={i}>
                        <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                        <p className="text-xs font-space text-muted-foreground">{item.period} • {item.place}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Stacked Cards */}
            <div className="w-2/3 relative h-[85vh]">
              {projects.map((project, index) => {
                const row = Math.floor(index / 2);
                const col = index % 2;
                const totalCards = projects.length;
                
                return (
                  <motion.div
                    key={project.title}
                    className="absolute w-[300px] md:w-[350px] pointer-events-auto"
                    style={{
                      // Adjusted vertical spacing: row * 260 ensures they don't overlap too much
                      // Lowered the starting 'top' when spread=1 to move cards higher up
                      top: useTransform(spread, [0, 1], [index * 12, row * 260 - 40]),
                      left: useTransform(
                        spread,
                        [0, 1],
                        [`calc(50% - 150px + ${index * 8}px)`, col === 0 ? '0%' : '52%']
                      ),
                      rotate: useTransform(spread, [0, 1], [(index - 2.5) * 5, 0]),
                      zIndex: useTransform(spread, [0, 1], [totalCards - index, 10 + index]),
                      scale: useTransform(spread, [0, 1], [1 - index * 0.03, 1]),
                    }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      techStack={project.techStack}
                      color={project.color}
                      index={index}
                      github={project.github}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="h-32" />
    </div>
  );
};

export default Index;