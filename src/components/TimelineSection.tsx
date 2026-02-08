import { useState } from "react";
import { Calendar, Trophy, Award, Users, GraduationCap, Mic, Sparkles, Github, ExternalLink, ChevronDown } from "lucide-react";

interface TimelineEvent {
    date: string;
    year: number;
    title: string;
    organization: string;
    type: "hackathon" | "experience" | "education";
    description: string;
    details?: string[];
    team?: string;
    techStack?: string;
    github?: string;
    icon: React.ReactNode;
    bgColor: string;
    borderColor: string;
    titleColor: string;
    badgeColor: string;
}

const TimelineSection = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const events: TimelineEvent[] = [
        {
            date: "Oct 2025",
            year: 2025,
            title: "AI Product Representative (Gitex 25)",
            organization: "Dreamloop.ai",
            type: "experience",
            description: "Represented Dreamloop.ai at GITEX Global 2025 / Expand North Star, engaging with CEOs, founders, and enterprise stakeholders on AI-powered platforms.",
            details: [
                "Delivered live product demos showcasing complex AI capabilities",
                "Translated technical concepts (text-to-game, text-to-app generation) for non-technical audiences",
                "Engaged with enterprise stakeholders at one of the world's largest tech exhibitions"
            ],
            icon: <Mic className="w-5 h-5" />,
            bgColor: "bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100",
            borderColor: "border-orange-300",
            titleColor: "text-orange-700",
            badgeColor: "bg-gradient-to-r from-orange-500 to-amber-500"
        },
        {
            date: "Nov 2024",
            year: 2024,
            title: "Space42 Bounty Challenge - 3rd Place 🏆",
            organization: "Google Developers Group - UOB Dubai",
            type: "hackathon",
            description: "Won 3rd place building ORION, an AI-powered talent and onboarding partner built in a single weekend.",
            details: [
                "CV upload with instant eligibility matching against non-negotiable job skills",
                "Behavioral AI assessment through voice or text with parallel technical CV evaluation",
                "Combined scoring system ranking candidates on HR dashboard for smart shortlisting",
                "Conversational AI chatbot powered by LangChain and RAG",
                "Employee zone unlock with structured Day One plan upon acceptance"
            ],
            team: "Zahny Fathima, Hudha Ibrahim, Amsha Nasar",
            techStack: "React, TypeScript, Node.js, LangChain, RAG, AI/ML",
            github: "https://github.com/Marwakhot/space42_final",
            icon: <Trophy className="w-5 h-5" />,
            bgColor: "bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100",
            borderColor: "border-amber-300",
            titleColor: "text-amber-700",
            badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500"
        },
        {
            date: "2024",
            year: 2024,
            title: "BITS Pilani Hackathon - Participant",
            organization: "BITS Pilani Dubai Campus",
            type: "hackathon",
            description: "Presented Brain Brew, an AI-powered platform that transforms passive PDF learning into an engaging, interactive experience.",
            details: [
                "AI-powered platform asking thought-provoking questions instead of direct answers",
                "4 adaptive difficulty levels matching learner progress",
                "Beautiful 3D interface with Three.js for immersive learning",
                "Interactive learning experience promoting critical thinking"
            ],
            techStack: "React, TypeScript, Supabase, PostgreSQL, Three.js, Tailwind CSS",
            github: "https://github.com/Marwakhot/BrainBrew",
            icon: <Users className="w-5 h-5" />,
            bgColor: "bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100",
            borderColor: "border-violet-300",
            titleColor: "text-violet-700",
            badgeColor: "bg-gradient-to-r from-violet-500 to-purple-500"
        },
        {
            date: "2023-2024",
            year: 2023,
            title: "School Headgirl",
            organization: "NIMS Dubai",
            type: "experience",
            description: "Led a 35+ member student council, driving initiatives and representing the student body.",
            details: [
                "Planned and executed multiple inter-school events",
                "Coordinated teams and logistics at scale",
                "Represented student body in school decisions and initiatives"
            ],
            icon: <Award className="w-5 h-5" />,
            bgColor: "bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100",
            borderColor: "border-rose-300",
            titleColor: "text-rose-700",
            badgeColor: "bg-gradient-to-r from-rose-500 to-pink-500"
        },
        {
            date: "2023",
            year: 2023,
            title: "Director General - NIMSMUN",
            organization: "NIMS Dubai",
            type: "experience",
            description: "Oversaw a 150+ delegate Model United Nations conference conducted over three days.",
            details: [
                "Managed committees and executive teams",
                "Ensured smooth end-to-end event operations",
                "Coordinated logistics for 150+ delegates"
            ],
            icon: <Users className="w-5 h-5" />,
            bgColor: "bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100",
            borderColor: "border-yellow-300",
            titleColor: "text-yellow-700",
            badgeColor: "bg-gradient-to-r from-yellow-500 to-amber-500"
        },
        {
            date: "2022",
            year: 2022,
            title: "High School Graduate",
            organization: "NIMS Dubai",
            type: "education",
            description: "Completed high school with distinction, focusing on science and mathematics.",
            details: [
                "Participated in various extracurricular activities",
                "Competed in academic competitions",
                "Built foundation in STEM subjects"
            ],
            icon: <GraduationCap className="w-5 h-5" />,
            bgColor: "bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100",
            borderColor: "border-emerald-300",
            titleColor: "text-emerald-700",
            badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-500"
        }
    ];

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="timeline" className="py-20 px-6 lg:px-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background">
            {/* Background Blobs */}
            <div className="absolute top-20 left-10 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-rose-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <div className="relative inline-block">
                        <Calendar className="absolute -top-2 -left-2 w-6 h-6 text-primary animate-bounce" />
                        <h2 className="text-4xl md:text-5xl font-bold">
                            My{" "}
                            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                                Journey
                            </span>
                        </h2>
                    </div>
                    <p className="text-foreground/60 mt-4 text-lg">From high school to hackathons and beyond</p>
                    <div className="w-32 h-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full mt-4 mx-auto animate-pulse" />
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-accent/40 to-primary/20 transform -translate-x-1/2 hidden md:block" />

                    {/* Timeline Events */}
                    <div className="space-y-12">
                        {events.map((event, index) => {
                            const isExpanded = expandedIndex === index;
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                        } flex-col gap-8 animate-fadeInUp`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Timeline Dot */}
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
                                        <div className={`w-6 h-6 rounded-full border-4 border-background shadow-lg ${event.badgeColor}`} />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[calc(50%-2rem)]`}>
                                        <div
                                            className={`relative rounded-3xl p-6 border-2 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer ${event.bgColor} ${event.borderColor} shadow-xl text-left`}
                                            onClick={() => toggleExpand(index)}
                                        >
                                            {/* Decorative Corner */}
                                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/40 to-transparent rounded-tr-3xl rounded-bl-[100px]" />

                                            {/* Icon Badge */}
                                            <div className={`absolute -top-3 -left-3 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${event.badgeColor}`}>
                                                {event.icon}
                                            </div>

                                            {/* Date Badge */}
                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3 ${event.badgeColor} text-white shadow-md`}>
                                                <Calendar className="w-3 h-3" />
                                                {event.date}
                                            </div>

                                            <h3 className={`text-xl font-bold mb-2 ${event.titleColor} group-hover:scale-[1.02] transition-transform`}>
                                                {event.title}
                                            </h3>

                                            <p className="text-sm font-semibold text-foreground/70 mb-3">
                                                {event.organization}
                                            </p>

                                            <p className="text-foreground/80 text-sm leading-relaxed mb-3">
                                                {event.description}
                                            </p>

                                            {/* Team Info */}
                                            {event.team && (
                                                <p className="text-xs text-foreground/60 mb-2">
                                                    <span className="font-semibold">Team:</span> {event.team}
                                                </p>
                                            )}

                                            {/* Expand/Collapse Indicator */}
                                            {event.details && (
                                                <div className="flex items-center justify-center mt-4">
                                                    <ChevronDown
                                                        className={`w-5 h-5 text-foreground/40 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                                    />
                                                </div>
                                            )}

                                            {/* Expanded Details */}
                                            {isExpanded && event.details && (
                                                <div className="mt-4 pt-4 border-t border-foreground/10 space-y-4 animate-fadeInUp">
                                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-foreground/10">
                                                        <h4 className="text-xs font-bold text-foreground/70 uppercase tracking-widest mb-3">
                                                            {event.type === 'hackathon' ? 'Key Features:' : 'Highlights:'}
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {event.details.map((detail, i) => (
                                                                <li key={i} className="text-xs text-foreground/80 leading-relaxed flex items-start gap-2">
                                                                    <span className="text-emerald-500 font-bold mt-0.5">•</span>
                                                                    <span>{detail}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Tech Stack */}
                                                    {event.techStack && (
                                                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-foreground/10">
                                                            <h4 className="text-xs font-bold text-foreground/70 uppercase tracking-widest mb-2">
                                                                Tech Stack:
                                                            </h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {event.techStack.split(', ').map((tech, i) => (
                                                                    <span
                                                                        key={i}
                                                                        className="px-2.5 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-xs font-medium border border-violet-200/50"
                                                                    >
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* GitHub Link */}
                                                    {event.github && (
                                                        <a
                                                            href={event.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className={`inline-flex items-center gap-2 px-4 py-2 text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${event.badgeColor}`}
                                                        >
                                                            <Github className="w-4 h-4" />
                                                            View Repository
                                                            <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    )}
                                                </div>
                                            )}

                                            {/* Hover Indicator */}
                                            <div className={`mt-4 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500 ${event.badgeColor}`} />
                                        </div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
