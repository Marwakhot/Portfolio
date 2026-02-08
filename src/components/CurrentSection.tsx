import { Briefcase, GraduationCap } from "lucide-react";

const CurrentSection = () => {
  const currentRoles = [
    {
      title: "Data Science Intern @ Alamar",
      description: "Building analytical tables using AWS and Redshift to support quarterly reporting and business insights. Collaborating with stakeholders to transform raw data into structured, decision-ready datasets.",
      icon: <Briefcase className="w-5 h-5" />,
      bgColor: "bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100",
      borderColor: "border-orange-300",
      titleColor: "text-orange-700",
      badgeColor: "bg-gradient-to-r from-orange-500 to-amber-500"
    },
    {
      title: "CS Student @ UOW Dubai",
      description: "Pursuing a strong foundation in machine learning, data systems, and scalable computing.",
      icon: <GraduationCap className="w-5 h-5" />,
      bgColor: "bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100",
      borderColor: "border-emerald-300",
      titleColor: "text-emerald-700",
      badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="pt-20 pb-8 px-6 lg:px-20 relative overflow-hidden">
      {/* Funky Background Blobs */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-orange-400/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Right now,{" "}
          <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            I'm...
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {currentRoles.map((role, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-6 border-2 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 group animate-fadeInUp ${role.bgColor} ${role.borderColor} shadow-xl`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/50 to-transparent rounded-tr-3xl rounded-bl-[80px]" />
              
              {/* Icon Badge */}
              <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-lg ${role.badgeColor}`}>
                {role.icon}
              </div>

              {/* Card Number */}
              <div className="absolute top-4 right-4 text-4xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3 className={`text-xl font-bold mb-4 mt-4 ${role.titleColor} group-hover:scale-[1.02] transition-transform`}>
                {role.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {role.description}
              </p>

              {/* Hover Indicator */}
              <div className={`mt-4 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500 ${role.badgeColor}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentSection;
