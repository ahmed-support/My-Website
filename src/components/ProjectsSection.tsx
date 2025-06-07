
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Windows Server Setup",
      description: "Installed and configured Windows Server in VirtualBox environment",
      category: "Virtualization",
      tools: ["VirtualBox", "Windows Server", "Networking"],
      details: "Set up a complete Windows Server environment including domain controller configuration, user management, and basic networking services.",
      challenges: "Resource allocation, network configuration, and understanding domain services",
      outcomes: "Successfully deployed functional server environment with user authentication",
      icon: "🖥️",
      status: "Completed"
    },
    {
      id: 2,
      title: "Active Directory Management",
      description: "User account creation and management system implementation",
      category: "System Administration",
      tools: ["Active Directory", "PowerShell", "Group Policy"],
      details: "Implemented user lifecycle management including account creation, group assignments, and security policies.",
      challenges: "Understanding AD structure, group policy implementation, and security best practices",
      outcomes: "Streamlined user management process with automated workflows",
      icon: "👥",
      status: "Completed"
    },
    {
      id: 3,
      title: "Network Troubleshooting",
      description: "Real-world printer and POS connectivity issue resolution",
      category: "Hardware Support",
      tools: ["IP Configuration", "Cable Testing", "Network Tools"],
      details: "Diagnosed and resolved connectivity issues for thermal printers and POS systems in restaurant environment.",
      challenges: "Identifying root causes of intermittent connection issues and cable management",
      outcomes: "Reduced downtime by 80% and improved system reliability",
      icon: "🔧",
      status: "Ongoing"
    },
    {
      id: 4,
      title: "PowerShell Automation",
      description: "Information gathering and system administration scripts",
      category: "Scripting",
      tools: ["PowerShell", "Windows CLI", "Automation"],
      details: "Developed PowerShell scripts for system information gathering, user management, and routine maintenance tasks.",
      challenges: "Learning PowerShell syntax and understanding system cmdlets",
      outcomes: "Automated repetitive tasks and improved efficiency by 60%",
      icon: "⚡",
      status: "In Progress"
    },
    {
      id: 5,
      title: "Home Lab Network",
      description: "Multi-VM environment with network segmentation",
      category: "Networking",
      tools: ["VirtualBox", "pfSense", "Network Configuration"],
      details: "Built comprehensive home lab with multiple VMs, network segmentation, and security implementations.",
      challenges: "Resource management and understanding network topologies",
      outcomes: "Created realistic testing environment for continuous learning",
      icon: "🌐",
      status: "Expanding"
    },
    {
      id: 6,
      title: "CompTIA A+ Preparation",
      description: "Comprehensive study and practical application project",
      category: "Certification",
      tools: ["Professor Messer", "Jason Dion", "Practice Labs"],
      details: "Systematic preparation for CompTIA A+ certification with hands-on practice and documentation.",
      challenges: "Covering broad curriculum and practical application of concepts",
      outcomes: "Strong foundation in IT fundamentals and troubleshooting methodology",
      icon: "📚",
      status: "In Progress"
    }
  ];

  const categories = ["All", "Virtualization", "System Administration", "Hardware Support", "Scripting", "Networking", "Certification"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-20 h-20 bg-accent/20 rounded-lg rotate-45 floating-shape"></div>
        <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-primary/20 rounded-full floating-shape-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <p className="text-accent font-semibold text-lg mb-2">MY WORK</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Home Lab Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Hands-on learning through practical IT projects, troubleshooting scenarios, 
            and continuous skill development in my home laboratory environment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "ghost"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-accent text-accent-foreground" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-card border-border hover:shadow-xl transition-all duration-300 card-hover cursor-pointer group slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'In Progress' ? 'bg-accent/20 text-accent' :
                    project.status === 'Ongoing' ? 'bg-primary/20 text-primary' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.slice(0, 3).map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="text-xs text-muted-foreground px-2 py-1">
                      +{project.tools.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-accent font-medium">{project.category}</span>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-primary hover:bg-primary/10"
                  >
                    View Details →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal would go here - simplified for now */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <Card className="bg-card max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading font-bold text-2xl">{selectedProject.title}</h3>
                  <Button 
                    variant="ghost" 
                    onClick={() => setSelectedProject(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Project Details</h4>
                    <p className="text-muted-foreground">{selectedProject.details}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Challenges</h4>
                    <p className="text-muted-foreground">{selectedProject.challenges}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Outcomes</h4>
                    <p className="text-muted-foreground">{selectedProject.outcomes}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, index) => (
                        <span 
                          key={index}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
