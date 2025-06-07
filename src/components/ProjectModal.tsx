
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl flex items-center gap-3">
            {project.title}
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {project.category}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-foreground/80 leading-relaxed">{project.description}</p>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-3">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <Badge key={idx} variant="outline" className="border-primary/30 text-foreground">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-primary">Objectives</h3>
              <ul className="space-y-2">
                {project.objectives.map((objective, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-yellow-500">Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-green-500">Outcomes</h3>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
