
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Sales Coordinator",
      company: "A.H. Alsagar & Bros Co.",
      period: "2024 – Present",
      description: "Provided internal IT support for office printers, PCs, and networking issues while managing technical sales operations and reporting.",
      skills: ["IT Support", "Network Troubleshooting", "Technical Sales", "Customer Service"],
      current: true,
      icon: "💼"
    },
    {
      role: "Waiter/Cashier",
      company: "Tabliah Restaurant", 
      period: "2022 – 2024",
      description: "Managed POS and thermal printer troubleshooting (IP configuration, cable testing, device errors) alongside customer service.",
      skills: ["POS Systems", "Thermal Printers", "IP Configuration", "Hardware Troubleshooting"],
      current: false,
      icon: "🖨️"
    },
    {
      role: "IT Enthusiast",
      company: "Home Lab Projects",
      period: "2022 – Present", 
      description: "Continuously developing IT skills through hands-on practice with virtualization, networking (including Cisco Packet Tracer labs), and system administration.",
      skills: ["VirtualBox", "Windows Server", "PowerShell", "Active Directory", "Cisco Packet Tracer", "Network Simulation"],
      current: true,
      icon: "🏠"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-accent/10 rounded-full floating-shape"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/10 rounded-lg rotate-45 floating-shape-delayed"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-purple-500/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header: Single Heading */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Building expertise through hands-on experience in IT support, troubleshooting, 
            and customer service across different environments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative flex items-start gap-6 slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                      exp.current ? 'bg-accent' : 'bg-primary'
                    } shadow-lg`}>
                      {exp.icon}
                    </div>
                  </div>
                  
                  {/* Experience card */}
                  <Card className="flex-1 bg-card border-border hover:shadow-xl transition-all duration-300 card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-heading font-semibold text-xl text-foreground">{exp.role}</h3>
                        {exp.current && (
                          <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-sm text-accent mb-4">{exp.period}</p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
