import { useState } from "react";
import { Github, Brain, Shield, TrendingUp, Code2, Sparkles, Zap, Target, Wrench } from "lucide-react";

interface Project {
  title: string;
  problem: string;
  solution: string;
  techStack: string;
  github: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  tabColor: string;
  cardBg: string;
  accent: string;
  btnColor: string;
  projects: Project[];
}

const categories: Category[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: <Brain className="w-5 h-5" />,
    tabColor: "bg-gradient-to-r from-violet-500 to-purple-600 text-white border-violet-400",
    cardBg: "bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100",
    accent: "text-violet-700",
    btnColor: "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700",
    projects: [
      {
        title: "Automated Bug Triage System",
        problem: "Slow bug assignment causing delays in development cycles and inefficient resource allocation.",
        solution: "Built an NLP and ML system to automatically predict the responsible team and priority for each bug report, handling bulk predictions via a Streamlit dashboard.",
        techStack: "Python, NLP (TF-IDF), LightGBM, Flask API, Streamlit, Docker",
        github: "https://github.com/Marwakhot/bug-triage-nlp-api"
      },
      {
        title: "Robot Navigation Using AI Techniques",
        problem: "Autonomous navigation challenges in complex environments with dynamic obstacles.",
        solution: "Implemented Fuzzy Logic, Behavior Trees, and Q-Learning for obstacle avoidance in a 10m × 10m simulated arena.",
        techStack: "Python, Fuzzy Logic, Behavior Trees, Reinforcement Learning (Q-Learning)",
        github: "https://github.com/Marwakhot/Gazebo_robot_navigation"
      }
    ]
  },
  {
    id: "responsible-ai",
    name: "Responsible AI & Risk",
    icon: <Shield className="w-5 h-5" />,
    tabColor: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-emerald-400",
    cardBg: "bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100",
    accent: "text-emerald-700",
    btnColor: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700",
    projects: [
      {
        title: "AI Safety Audit: Credit Fairness",
        problem: "Black box problem in loan-approval AI with hidden biases causing legal and ethical risks.",
        solution: "Identified hidden biases and created a safety roadmap using NIST AI RMF to prevent discriminatory outcomes.",
        techStack: "Python, Fairlearn, Scikit-learn, NIST AI RMF",
        github: "https://github.com/Marwakhot/-AI-Risk-Management-Audit"
      }
    ]
  },
  {
    id: "finance",
    name: "Finance & Quantitative Analysis",
    icon: <TrendingUp className="w-5 h-5" />,
    tabColor: "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-amber-400",
    cardBg: "bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100",
    accent: "text-amber-700",
    btnColor: "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700",
    projects: [
      {
        title: "Portfolio Capital Optimization",
        problem: "Risk of extreme portfolio losses without proper capital reserves.",
        solution: "Calculated risk-adjusted capital requirements for a $1,000,000 portfolio, recommending a $21,578 daily capital reserve using 3 VaR models.",
        techStack: "Python, Pandas, NumPy, SciPy, Monte Carlo Simulation",
        github: "https://github.com/Marwakhot/QuantRisk-VaR-Validation"
      },
      {
        title: "Quantopian Failure Analysis",
        problem: "Need to understand why a $48M fintech startup failed.",
        solution: "Identified weaknesses in scope control, risk monitoring, and stakeholder communication using PMBOK principles.",
        techStack: "PMBOK Framework, Case Study Research",
        github: "https://github.com/Marwakhot/Quantopian_Failure_Analysis"
      },
      {
        title: "Stratify",
        problem: "Automotive companies struggling to manage the transition to EVs.",
        solution: "Provided real-time KPI tracking, sustainability monitoring, and operational insights to optimize resource use and decision-making.",
        techStack: "System Design, UML Modeling",
        github: "https://github.com/Marwakhot/Stratify"
      }
    ]
  },
  {
    id: "fullstack",
    name: "Full-Stack Platforms",
    icon: <Code2 className="w-5 h-5" />,
    tabColor: "bg-gradient-to-r from-rose-500 to-pink-600 text-white border-rose-400",
    cardBg: "bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100",
    accent: "text-rose-700",
    btnColor: "bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700",
    projects: [
      {
        title: "PEAR Internships Platform",
        problem: "Disconnected process for students finding internships and companies managing applications.",
        solution: "Built a full-stack web application that connects students and companies by streamlining internship postings, applications, and tracking through role-based dashboards.",
        techStack: "HTML, JavaScript, CSS, Node.js, MySQL, REST APIs",
        github: "https://github.com/Marwakhot/pear-internships"
      },
      {
        title: "Brain Brew",
        problem: "Passive PDF learning not engaging students in critical thinking.",
        solution: "Created an AI-powered platform that asks thought-provoking questions instead of direct answers, with 4 adaptive difficulty levels.",
        techStack: "React, TypeScript, Supabase, PostgreSQL, Three.js, Tailwind CSS",
        github: "https://github.com/Marwakhot/BrainBrew"
      }
    ]
  }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 lg:px-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Funky Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12">
          {/* Left Side - Heading & Filters */}
          <div className="space-y-8">
            <div className="relative">
              <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-amber-500 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                look into my<br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  projects
                </span>
              </h2>
              <div className="w-24 h-2 bg-gradient-to-r from-accent via-primary to-accent rounded-full mt-4 animate-pulse" />
            </div>

            {/* Vertical Category Filters */}
            <div className="flex flex-col gap-4">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl border-2 font-semibold transition-all duration-500 text-left group ${
                    activeCategory === category.id
                      ? `${category.tabColor} shadow-xl scale-[1.03] -rotate-1`
                      : "bg-card/80 backdrop-blur-sm text-foreground/70 border-border hover:border-foreground/30 hover:shadow-lg hover:scale-[1.02] hover:rotate-1"
                  }`}
                >
                  <span className={`p-2 rounded-xl transition-all duration-300 ${
                    activeCategory === category.id 
                      ? "bg-white/20" 
                      : "bg-muted group-hover:bg-primary/10"
                  }`}>
                    {category.icon}
                  </span>
                  <span className="flex-1">{category.name}</span>
                  {activeCategory === category.id && (
                    <Zap className="w-4 h-4 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Project Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {currentCategory?.projects.map((project, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 150}ms` }}
                className={`relative rounded-3xl p-6 border-2 border-white/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 group animate-fadeInUp ${currentCategory.cardBg} shadow-xl`}
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/40 to-transparent rounded-tr-3xl rounded-bl-[100px]" />
                
                {/* Card Number Badge */}
                <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg ${currentCategory.btnColor}`}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className={`text-xl font-bold mb-5 mt-2 ${currentCategory.accent} group-hover:scale-[1.02] transition-transform`}>
                  {project.title}
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-rose-200/50 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest flex items-center gap-2">
                      <Target className="w-3.5 h-3.5" />
                      Problem
                    </span>
                    <p className="text-foreground/80 mt-2 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-emerald-200/50 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Solution
                    </span>
                    <p className="text-foreground/80 mt-2 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-violet-200/50 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-xs font-bold text-violet-600 uppercase tracking-widest flex items-center gap-2">
                      <Wrench className="w-3.5 h-3.5" />
                      Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.split(', ').map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-xs font-medium border border-violet-200/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 mt-6 px-6 py-3 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-rotate-2 ${currentCategory.btnColor}`}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
