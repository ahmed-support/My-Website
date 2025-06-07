
const ToolsSection = () => {
  const experiences = [
    {
      role: "Sales Coordinator",
      company: "A.H. Alsagar & Bros Co.",
      period: "2024 – Present",
      description: "Providing internal IT support for office infrastructure while managing technical sales operations and customer relationships.",
      skills: ["IT Support", "Network Troubleshooting", "Customer Service"],
      current: true
    },
    {
      role: "Technical Support",
      company: "Tabliah Restaurant", 
      period: "2022 – 2024",
      description: "Managed POS systems, thermal printers, and network connectivity while delivering excellent customer service.",
      skills: ["POS Systems", "Hardware Troubleshooting", "Network Configuration"],
      current: false
    },
    {
      role: "IT Enthusiast",
      company: "Home Lab Projects",
      period: "2022 – Present", 
      description: "Continuously developing IT skills through hands-on practice with virtualization, networking, and system administration.",
      skills: ["VirtualBox", "Windows Server", "PowerShell"],
      current: true
    }
  ];

  return (
    <section id="tools" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-24 h-24 bg-purple-400/10 rounded-full floating-shape"></div>
        <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-pink-400/10 rounded-lg rotate-45 floating-shape-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <p className="text-accent font-semibold text-lg mb-2">ABOUT ME</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Designing Solutions, Not Just Visuals
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - About content */}
          <div className="slide-up">
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm passionate about technology and helping others solve their IT challenges. 
              My journey in IT support combines formal learning with practical, hands-on experience 
              gained through real-world troubleshooting scenarios.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  01
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">5+ Complete Project</h4>
                  <p className="text-muted-foreground">Successfully completed various IT projects including server setups, network configurations, and troubleshooting scenarios.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  02
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">2+ Years of Experience</h4>
                  <p className="text-muted-foreground">Hands-on experience in technical support roles, providing real-world problem-solving skills and customer service excellence.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full transition-colors duration-300">
                Hire Me →
              </button>
            </div>
          </div>

          {/* Right side - Experience timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
                  {exp.current && (
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      Current
                    </span>
                  )}
                </div>
                
                <p className="text-primary font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
