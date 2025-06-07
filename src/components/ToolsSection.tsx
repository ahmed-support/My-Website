
const ToolsSection = () => {
  const tools = [
    {
      name: "Windows OS",
      category: "Operating Systems",
      proficiency: 90,
      icon: "💻"
    },
    {
      name: "PowerShell",
      category: "Scripting",
      proficiency: 75,
      icon: "⚡"
    },
    {
      name: "VirtualBox",
      category: "Virtualization",
      proficiency: 85,
      icon: "📦"
    },
    {
      name: "Networking Tools",
      category: "Network",
      proficiency: 80,
      icon: "🌐"
    },
    {
      name: "Printer Support",
      category: "Hardware",
      proficiency: 95,
      icon: "🖨️"
    },
    {
      name: "Office 365",
      category: "Cloud Services",
      proficiency: 85,
      icon: "☁️"
    }
  ];

  return (
    <section id="tools" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Tools I <span className="text-primary">Know</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Technologies and platforms I'm actively practicing and using in my IT journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <div 
              key={tool.name}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 hover:scale-105 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{tool.icon}</div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">{tool.name}</h3>
                  <p className="text-sm text-foreground/60">{tool.category}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Proficiency</span>
                  <span className="text-primary font-medium">{tool.proficiency}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${tool.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
