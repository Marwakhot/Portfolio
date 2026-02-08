import { Trophy, Users, Github, Sparkles } from "lucide-react";

const HackathonsSection = () => {
    const hackathons = [
        {
            title: "Space42 Bounty Challenge - 3rd Place 🏆",
            event: "Google Developers Group on Campus: University of Birmingham Dubai",
            team: "Zahny Fathima, Hudha Ibrahim, Amsha Nasar",
            project: "ORION - AI-Powered Talent & Onboarding Partner",
            description: "Our team won 3rd place at the Bounty Challenge, hosted by the Google Developers Group on Campus: University of Birmingham Dubai. We built ORION, an AI-powered talent and onboarding partner that revolutionizes the hiring process.",
            features: [
                "CV upload with instant eligibility matching against non-negotiable job skills",
                "Behavioral AI assessment through voice or text, plus parallel technical CV evaluation",
                "Combined scoring system that ranks candidates directly on the HR dashboard for smart shortlisting",
                "Real-time application status tracking for candidates",
                "Conversational AI chatbot powered by LangChain and RAG that understands company documents and answers candidate questions instantly",
                "Employee zone unlock with a structured Day One plan upon acceptance",
                "A Talent Orbit for rejected candidates, allowing CV updates and continuous re-ranking for future roles"
            ],
            techStack: "React, TypeScript, Node.js, LangChain, RAG, AI/ML",
            github: "https://github.com/Marwakhot/space42_final",
            icon: <Trophy className="w-5 h-5" />,
            bgColor: "bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100",
            borderColor: "border-amber-300",
            titleColor: "text-amber-700",
            badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500"
        },
        {
            title: "BITS Pilani Hackathon - Participant",
            event: "BITS Pilani Dubai Campus",
            project: "Brain Brew - AI-Powered Learning Platform",
            description: "Participated in the BITS Pilani hackathon, presenting Brain Brew, an innovative AI-powered platform designed to transform passive PDF learning into an engaging, interactive experience.",
            features: [
                "AI-powered platform that asks thought-provoking questions instead of providing direct answers",
                "4 adaptive difficulty levels to match learner progress",
                "Interactive learning experience that promotes critical thinking",
                "Beautiful 3D interface with Three.js for immersive learning",
                "Built with modern web technologies for optimal performance"
            ],
            techStack: "React, TypeScript, Supabase, PostgreSQL, Three.js, Tailwind CSS",
            github: "https://github.com/Marwakhot/BrainBrew",
            icon: <Users className="w-5 h-5" />,
            bgColor: "bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100",
            borderColor: "border-violet-300",
            titleColor: "text-violet-700",
            badgeColor: "bg-gradient-to-r from-violet-500 to-purple-500"
        }
    ];

    return (
        <section id="hackathons" className="py-20 px-6 lg:px-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
            {/* Funky Background Blobs */}
            <div className="absolute top-10 left-20 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-violet-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

            <div className="container mx-auto relative z-10">
                <div className="mb-12">
                    <div className="relative inline-block">
                        <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-amber-500 animate-bounce" />
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Hackathon{" "}
                            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                                Adventures
                            </span>
                        </h2>
                    </div>
                    <div className="w-32 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-full mt-4 animate-pulse" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {hackathons.map((hackathon, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 border-2 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 group animate-fadeInUp ${hackathon.bgColor} ${hackathon.borderColor} shadow-xl`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/50 to-transparent rounded-tr-3xl rounded-bl-[100px]" />

                            {/* Icon Badge */}
                            <div className={`absolute -top-3 -left-3 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${hackathon.badgeColor}`}>
                                {hackathon.icon}
                            </div>

                            {/* Card Number */}
                            <div className="absolute top-4 right-4 text-5xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <h3 className={`text-xl font-bold mb-3 mt-2 ${hackathon.titleColor} group-hover:scale-[1.02] transition-transform`}>
                                {hackathon.title}
                            </h3>

                            <div className="space-y-3 mb-4">
                                <p className="text-sm font-semibold text-foreground/70">
                                    📍 {hackathon.event}
                                </p>
                                {hackathon.team && (
                                    <p className="text-sm text-foreground/70">
                                        <span className="font-semibold">Team:</span> {hackathon.team}
                                    </p>
                                )}
                                <p className="text-sm font-bold text-foreground/90">
                                    🚀 {hackathon.project}
                                </p>
                            </div>

                            <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                                {hackathon.description}
                            </p>

                            {/* Features */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-foreground/10 mb-4">
                                <h4 className="text-xs font-bold text-foreground/70 uppercase tracking-widest mb-3">
                                    Key Features:
                                </h4>
                                <ul className="space-y-2">
                                    {hackathon.features.map((feature, i) => (
                                        <li key={i} className="text-xs text-foreground/80 leading-relaxed flex items-start gap-2">
                                            <span className="text-emerald-500 font-bold mt-0.5">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-foreground/10 mb-5">
                                <h4 className="text-xs font-bold text-foreground/70 uppercase tracking-widest mb-2">
                                    Tech Stack:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {hackathon.techStack.split(', ').map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 rounded-full text-xs font-medium border shadow-sm ${index === 0
                                                    ? 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 border-amber-200/50'
                                                    : 'bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border-violet-200/50'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* GitHub Link */}
                            <a
                                href={hackathon.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-6 py-3 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-rotate-2 ${hackathon.badgeColor}`}
                            >
                                <Github className="w-4 h-4" />
                                View on GitHub
                            </a>

                            {/* Hover Indicator */}
                            <div className={`mt-4 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500 ${hackathon.badgeColor}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HackathonsSection;
