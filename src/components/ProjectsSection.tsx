
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tools: string[];
  objectives: string[];
  challenges: string[];
  outcomes: string[];
  demoType: "terminal" | "config" | "pdf";
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "windows-server",
      title: "Windows Server Installation",
      description: "Complete Windows Server setup and configuration in VirtualBox environment",
      category: "Virtualization",
      tools: ["VirtualBox", "Windows Server", "Active Directory"],
      objectives: [
        "Install Windows Server in virtual environment",
        "Configure basic server roles and features",
        "Set up domain controller functionality",
        "Practice enterprise-level server management"
      ],
      challenges: [
        "Resource allocation and VM optimization",
        "Network configuration between host and guest",
        "Understanding Windows Server licensing"
      ],
      outcomes: [
        "Successfully deployed Windows Server instance",
        "Configured Active Directory Domain Services",
        "Gained hands-on server administration experience"
      ],
      demoType: "config"
    },
    {
      id: "active-directory",
      title: "Active Directory User Management",
      description: "User account creation, group management, and organizational unit structure",
      category: "Directory Services",
      tools: ["Active Directory", "PowerShell", "Group Policy"],
      objectives: [
        "Create and manage user accounts",
        "Implement organizational unit structure",
        "Configure group policies",
        "Practice identity and access management"
      ],
      challenges: [
        "Understanding AD hierarchy and permissions",
        "Group policy inheritance and conflicts",
        "Bulk user management workflows"
      ],
      outcomes: [
        "Implemented structured AD environment",
        "Created automated user provisioning process",
        "Configured security groups and permissions"
      ],
      demoType: "terminal"
    },
    {
      id: "printer-troubleshooting",
      title: "Printer & IP Troubleshooting",
      description: "Real-world printer connectivity and network troubleshooting scenarios",
      category: "Hardware Support",
      tools: ["Network Tools", "Printer Diagnostics", "IP Configuration"],
      objectives: [
        "Diagnose printer connectivity issues",
        "Resolve IP configuration problems",
        "Test and verify network connections",
        "Document troubleshooting procedures"
      ],
      challenges: [
        "Identifying root cause of connectivity issues",
        "Working with different printer models",
        "Network protocol compatibility"
      ],
      outcomes: [
        "Reduced printer downtime by 80%",
        "Created troubleshooting documentation",
        "Improved network reliability"
      ],
      demoType: "pdf"
    },
    {
      id: "pos-connectivity",
      title: "POS System Connectivity",
      description: "Point-of-sale system troubleshooting and cable testing procedures",
      category: "Hardware Support",
      tools: ["Cable Testers", "Network Analyzers", "POS Systems"],
      objectives: [
        "Troubleshoot POS system connectivity",
        "Test and verify cable integrity",
        "Configure network settings",
        "Minimize system downtime"
      ],
      challenges: [
        "Working under time pressure",
        "Limited access to replacement hardware",
        "Multiple system dependencies"
      ],
      outcomes: [
        "Achieved 99% POS system uptime",
        "Implemented preventive maintenance schedule",
        "Trained staff on basic troubleshooting"
      ],
      demoType: "terminal"
    },
    {
      id: "powershell-script",
      title: "PowerShell Info-Gathering Script",
      description: "Automated system information collection and reporting script",
      category: "Automation",
      tools: ["PowerShell", "WMI", "System APIs"],
      objectives: [
        "Automate system information gathering",
        "Create detailed system reports",
        "Practice PowerShell scripting",
        "Improve IT documentation processes"
      ],
      challenges: [
        "Learning PowerShell syntax and cmdlets",
        "Handling different system configurations",
        "Error handling and validation"
      ],
      outcomes: [
        "Reduced manual documentation time by 70%",
        "Created reusable PowerShell modules",
        "Improved system inventory accuracy"
      ],
      demoType: "terminal"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Home Lab <span className="text-primary">Projects</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Hands-on IT projects and real-world troubleshooting scenarios that demonstrate practical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {project.tools.slice(0, 3).map((tool, idx) => (
                      <span key={idx} className="text-xs bg-secondary text-foreground/80 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-xs text-foreground/60">+{project.tools.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {project.demoType === "terminal" ? "Terminal" : 
                     project.demoType === "config" ? "Config" : "PDF"}
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default ProjectsSection;
