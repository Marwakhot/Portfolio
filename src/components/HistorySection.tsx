import { Award, Users, GraduationCap, Mic, Sparkles } from "lucide-react";

const HistorySection = () => {
    const experiences = [
        {
            title: "AI Product Representative (Gitex 25) @ Dreamloop.ai",
            description: "Represented Dreamloop.ai at GITEX Global 2025 / Expand North Star, engaging with CEOs, founders, and enterprise stakeholders on AI-powered platforms. Delivered live product demos and translated complex AI capabilities (text-to-game, text-to-app generation) for non-technical audiences.",
            icon: <Mic className="w-5 h-5" />,
            bgColor: "bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100",
            borderColor: "border-orange-300",
            titleColor: "text-orange-700",
            badgeColor: "bg-gradient-to-r from-orange-500 to-amber-500"
        },
        {
            title: "School Headgirl @ NIMS",
            description: "Led a 35+ member student council, driving initiatives and representing the student body. Planned and executed multiple inter-school events, coordinating teams and logistics at scale.",
            icon: <Award className="w-5 h-5" />,
            bgColor: "bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100",
            borderColor: "border-rose-300",
            titleColor: "text-rose-700",
            badgeColor: "bg-gradient-to-r from-rose-500 to-pink-500"
        },
        {
            title: "Director General @ NIMSMUN",
            description: "Oversaw a 150+ delegate Model United Nations conference conducted over three days. Managed committees, executive teams, and event operations to ensure smooth end-to-end execution.",
            icon: <Users className="w-5 h-5" />,
            bgColor: "bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100",
            borderColor: "border-yellow-300",
            titleColor: "text-yellow-700",
            badgeColor: "bg-gradient-to-r from-yellow-500 to-amber-500"
        },
        {
            title: "High School Graduate @ NIMS Dubai",
            description: "Completed high school with distinction, focusing on science and mathematics. Participated in various extracurricular activities and academic competitions.",
            icon: <GraduationCap className="w-5 h-5" />,
            bgColor: "bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100",
            borderColor: "border-emerald-300",
            titleColor: "text-emerald-700",
            badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-500"
        }
    ];

    return (
        <section id="history" className="pt-8 pb-20 px-6 lg:px-20 relative overflow-hidden">
            {/* Funky Background Blobs */}
            <div className="absolute top-10 right-20 w-64 h-64 bg-amber-400/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-20 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

            <div className="container mx-auto relative z-10">
                <div className="mb-12">
                    <div className="relative inline-block">
                        <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-primary animate-bounce" />
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Things I've{" "}
                            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                                done...
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-6 border-2 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 group animate-fadeInUp ${exp.bgColor} ${exp.borderColor} shadow-xl`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/50 to-transparent rounded-tr-3xl rounded-bl-[80px]" />

                            {/* Icon Badge */}
                            <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-lg ${exp.badgeColor}`}>
                                {exp.icon}
                            </div>

                            {/* Card Number */}
                            <div className="absolute top-4 right-4 text-4xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <h3 className={`text-lg font-bold mb-4 mt-4 ${exp.titleColor} group-hover:scale-[1.02] transition-transform`}>
                                {exp.title}
                            </h3>
                            <p className="text-foreground/80 text-sm leading-relaxed">
                                {exp.description}
                            </p>

                            {/* Hover Indicator */}
                            <div className={`mt-4 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500 ${exp.badgeColor}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HistorySection;
