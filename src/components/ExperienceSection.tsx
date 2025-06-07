
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Sales Coordinator",
      company: "A.H. Alsagar & Bros Co.",
      period: "2024 – Present",
      responsibilities: [
        "Provided internal IT support for office printers, PCs, and networking issues",
        "Managed technical sales operations and reporting",
        "Troubleshot hardware and connectivity problems",
        "Supported end-users with technical difficulties"
      ],
      current: true
    },
    {
      role: "Waiter/Cashier",
      company: "Tabliah Restaurant",
      period: "2022 – 2024",
      responsibilities: [
        "Managed POS and thermal printer troubleshooting",
        "Configured IP settings and tested cable connections",
        "Resolved device errors and connectivity issues",
        "Provided excellent customer service while handling technical tasks"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            My Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Building practical IT skills through real-world troubleshooting and technical support roles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16 slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-heading font-semibold text-xl mb-1">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <span className="text-foreground/60">{exp.period}</span>
                        {exp.current && (
                          <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
