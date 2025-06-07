
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const services = [
    {
      title: "IT Support & Troubleshooting",
      description: "Comprehensive technical support for hardware, software, and networking issues with hands-on troubleshooting experience.",
      icon: "💻",
      color: "bg-blue-500"
    },
    {
      title: "Network Configuration",
      description: "Setting up and configuring network connections, IP settings, and resolving connectivity problems.",
      icon: "🌐", 
      color: "bg-primary"
    },
    {
      title: "Printer & POS Support",
      description: "Specialized expertise in printer troubleshooting, POS system maintenance, and thermal printer configuration.",
      icon: "🖨️",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/10 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <p className="text-accent font-semibold text-lg mb-2">SERVICES</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Expertise Service! Let's check it out
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Providing comprehensive IT support services with practical experience in real-world 
            troubleshooting scenarios and technical problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 slide-up relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="font-heading font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
              
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
