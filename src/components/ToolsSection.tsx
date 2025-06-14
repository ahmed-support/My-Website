const ToolsSection = () => {
  const toolCategories = [
    {
      category: "Operating Systems",
      tools: [
        { name: "Windows 10/11", icon: "🪟", level: "Advanced" },
        { name: "Windows Server", icon: "🖥️", level: "Intermediate" },
        { name: "Linux Basics", icon: "🐧", level: "Beginner" }
      ]
    },
    {
      category: "Virtualization",
      tools: [
        { name: "VirtualBox", icon: "📦", level: "Intermediate" },
        { name: "VMware", icon: "☁️", level: "Beginner" },
        { name: "Hyper-V", icon: "🔧", level: "Beginner" }
      ]
    },
    {
      category: "Networking",
      tools: [
        { name: "TCP/IP", icon: "🌐", level: "Intermediate" },
        { name: "Network Troubleshooting", icon: "🔍", level: "Intermediate" },
        { name: "IP Configuration", icon: "⚙️", level: "Advanced" }
      ]
    },
    {
      category: "Scripting & Automation",
      tools: [
        { name: "PowerShell", icon: "⚡", level: "Intermediate" },
        { name: "Batch Scripts", icon: "📝", level: "Beginner" },
        { name: "Command Line", icon: "💻", level: "Intermediate" }
      ]
    },
    {
      category: "Hardware Support",
      tools: [
        { name: "Printer Troubleshooting", icon: "🖨️", level: "Advanced" },
        { name: "POS Systems", icon: "💳", level: "Advanced" },
        { name: "Cable Testing", icon: "🔌", level: "Intermediate" }
      ]
    },
    {
      category: "Software & Applications",
      tools: [
        { name: "Office 365", icon: "📊", level: "Advanced" },
        { name: "Active Directory", icon: "👥", level: "Intermediate" },
        { name: "Remote Desktop", icon: "🖱️", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate": return "bg-accent/20 text-accent border-accent/30";
      case "Beginner": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="tools" className="py-20 bg-muted/30 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-24 h-24 bg-purple-400/10 rounded-full floating-shape"></div>
        <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-pink-400/10 rounded-lg rotate-45 floating-shape-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-accent/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-3 text-foreground">
            Tools & Technologies
          </h2>
          <p className="text-accent font-semibold text-base mb-2">
            My Expertise
          </p>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Proficiency levels across various IT tools and technologies gained through 
            hands-on practice, home lab projects, and real-world troubleshooting experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {toolCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-300 card-hover slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="font-heading font-semibold text-xl mb-6 text-primary">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div 
                    key={tool.name}
                    className="flex items-center justify-between p-3 bg-background/50 rounded-lg hover:bg-background/70 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tool.icon}</span>
                      <span className="font-medium text-foreground">{tool.name}</span>
                    </div>
                    
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(tool.level)}`}>
                      {tool.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Resources */}
        <div className="mt-16 text-center">
          <p className="font-heading font-semibold text-2xl mb-8 text-primary">
            Learning Resources
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-3xl mb-4">🎓</div>
              <p className="font-semibold text-lg mb-2">Professor Messer</p>
              <p className="text-muted-foreground text-sm">CompTIA A+ Course & Study Materials</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-3xl mb-4">📝</div>
              <p className="font-semibold text-lg mb-2">Jason Dion</p>
              <p className="text-muted-foreground text-sm">Practice Exams & Training Materials</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-3xl mb-4">🏠</div>
              <p className="font-semibold text-lg mb-2">Home Lab</p>
              <p className="text-muted-foreground text-sm">Practical Experience & Documentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
