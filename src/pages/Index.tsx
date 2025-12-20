import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
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
    description: "Solved the problem of black box AI discrimination by auditing a loan-approval model to detect hidden biases and implementing a NIST-based risk framework that transformed a high-liability system into a safe, compliant, and transparent business asset.", 
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
    description: "Solves the challenge of helping traditional automakers transition to EV manufacturing by providing real-time visibility, sustainability tracking, and data-driven strategic planning in one system.", 
    techStack: "Enterprise System Design • UML Modeling • Agile Methodology",
    color: "bg-funky-pink", 
    github: "https://github.com/Marwakhot/Stratify" 
  },
  { 
    title: "Quantopian Failure Analysis", 
    description: "Solves the problem of understanding why well-funded fintech startups fail by pinpointing critical project management gaps in scope, risk, and communication using the PMBOK framework", 
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
    details: "Building analytical tables using AWS and Redshift to support quarterly reporting and business insights. Collaborating with stakeholders to transform raw data into structured, decision-ready datasets."
  },
  { 
    title: "Studying Bachelor of Computer Science", 
    period: "Major: AI and Big Data", 
    place: "University of Wollongong Dubai", 
    color: "text-funky-teal",
    details: "Pursuing a strong foundation in machine learning, data systems, and scalable computing."
  },
];

const pastActivities = [
  { 
    title: "Gitex Representative", 
    period: "Oct 2025", 
    place: "dreamloop.ai",
    details: "Represented dreamloop.ai at GITEX Global, one of the world's largest tech exhibitions.Presented AI products to potential clients and investors, translating technical concepts into clear value propositions."
  },
  { 
    title: "School Headgirl", 
    period: "2023-2024", 
    place: "NIMS",
    details: "Led a 35+ member student council, driving initiatives and representing the student body. Planned and executed multiple inter-school events, coordinating teams and logistics at scale."
  },
  { 
    title: "Director General NIMSMUN", 
    period: "2023-2024", 
    place: "NIMS",
    details: "Oversaw a 150+ delegate Model United Nations conference conducted over three days. Managed committees, executive teams, and event operations to ensure smooth end-to-end execution."
  },
  { 
    title: "High School Diploma", 
    period: "2022-2024", 
    place: "NIMS, Dubai",
    details: "Completed high school with distinction, focusing on science and mathematics. Participated in various extracurricular activities and academic competitions."
  }
];

const Index = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Track when projects section hits the top of viewport
  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end end"],
  });

  // Card spread animation - only starts when section is at top
  const spread = useTransform(projectsScrollProgress, [0, 0.5], [0, 1]);

  return (
    <div className="bg-background">
      {/* About Me Section */}
      <section className="min-h-screen flex items-center px-6 overflow-hidden">
        <div className="container mx-auto flex items-center justify-between">
          {/* Text content - left aligned */}
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
              I could write a long "About Me," but honestly the projects below say it better. Go take a look.
            </motion.p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-12 text-3xl text-funky-teal"
            >
              ↓
            </motion.div>
          </div>

          {/* Hanging ID Card - moved more to center */}
          <div className="hidden md:block pt-32 -ml-96 -translate-x-[3cm]">
            <HangingIDCard />
          </div>
        </div>
      </section>

      {/* Projects Section - Sticky with cards spreading */}
      <section ref={projectsRef} className="min-h-[200vh] mt-60">
        <div className="sticky top-0 h-screen flex items-center pt-24">
          <div className="container mx-auto px-6 flex flex-row items-center gap-12">
            {/* Left side - Title */}
            <motion.div 
              className="w-1/3 flex-shrink-0 -mt-96"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-outfit font-bold text-foreground leading-tight">
                look into my{" "}
                <span className="text-funky-teal">projects</span>
              </h2>
              <div className="mt-4 h-1 w-24 bg-funky-yellow rounded-full" />
            </motion.div>

            {/* Right side - Stacked Cards that spread to 2-column grid */}
            <div className="w-2/3 relative h-[1100px] pointer-events-none">
              {projects.map((project, index) => {
                const row = Math.floor(index / 2);
                const col = index % 2;
                const totalCards = projects.length;
                
                return (
                  <motion.div
                    key={project.title}
                    className="absolute w-[300px] md:w-[360px]"
                   style={{
  top: useTransform(
    spread,
    [0, 1],
    [index * 12, 300 + row * 290]
  ),
  left: useTransform(
    spread,
    [0, 1],
    [`calc(50% - 150px + ${index * 8}px)`, col === 0 ? '5%' : '52%']
  ),
  rotate: useTransform(
    spread,
    [0, 1],
    [(index - 2.5) * 5, 0]
  ),
  zIndex: useTransform(
    spread,
    [0, 1],
    [totalCards - index, 10 + index]
  ),
  scale: useTransform(
    spread,
    [0, 1],
    [1 - index * 0.03, 1]
  ),
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

      {/* Journey Section */}
<section className="min-h-screen py-24 px-6 mt-[500px]">
  <div className="container mx-auto">
    {/* Currently I'm */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h3 className="text-2xl md:text-3xl font-outfit font-bold text-foreground mb-8">
        Currently I'm
      </h3>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-2 top-0 bottom-0 w-1 bg-funky-pink" />
        <div className="space-y-8">
          {currentActivities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start gap-6"
            >
              <div className="w-5 h-5 rounded-full bg-funky-pink border-4 border-background shadow-lg z-10 flex-shrink-0" />
              <div className="-mt-1 relative group">
                <h4 className={`text-xl font-outfit font-bold ${item.color} group-hover:underline cursor-pointer`}>{item.title}</h4>
                <p className="text-muted-foreground font-space text-sm">{item.period}</p>
                <p className="text-foreground font-space">{item.place}</p>
               
                {/* Hover tooltip */}
                <div className="absolute left-full ml-6 top-0 w-80 p-4 bg-card border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="absolute -left-2 top-4 w-4 h-4 bg-card border-l border-t border-border rotate-[-45deg]" />
                  <h5 className={`font-outfit font-bold ${item.color} mb-2`}>{item.title}</h5>
                  <p className="text-muted-foreground font-space text-sm leading-relaxed">{item.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* I've been */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl md:text-3xl font-outfit font-bold text-foreground mb-8">
        I've been
      </h3>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-2 top-0 bottom-0 w-1 bg-funky-orange" />
        <div className="space-y-8">
          {pastActivities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start gap-6"
            >
              <div className="w-5 h-5 rounded-full bg-funky-orange border-4 border-background shadow-lg z-10 flex-shrink-0" />
              <div className="-mt-1 relative group">
                <h4 className="text-lg font-outfit font-bold text-foreground group-hover:underline cursor-pointer">{item.title}</h4>
                <p className="text-funky-teal font-space text-sm">{item.period}</p>
                <p className="text-muted-foreground font-space text-sm">{item.place}</p>
               
                {/* Hover tooltip */}
                <div className="absolute left-full ml-6 top-0 w-80 p-4 bg-card border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="absolute -left-2 top-4 w-4 h-4 bg-card border-l border-t border-border rotate-[-45deg]" />
                  <h5 className="font-outfit font-bold text-funky-orange mb-2">{item.title}</h5>
                  <p className="text-muted-foreground font-space text-sm leading-relaxed">{item.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>

{/* Footer spacer */}
<div className="h-32" />

    </div>
  );
};

export default Index;
