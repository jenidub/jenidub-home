import { Card } from "@/components/ui/card";

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  rotation?: string;
}

export default function SkillCard({ icon, title, description, rotation = "rotate-0" }: SkillCardProps) {
  return (
    <Card
      className={`p-8 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${rotation}`}
      data-testid={`card-skill-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-5xl mb-4" data-testid="text-skill-icon">{icon}</div>
      <h3 className="text-2xl font-bold text-primary mb-4" data-testid="text-skill-title">{title}</h3>
      <p className="text-base text-foreground leading-relaxed" data-testid="text-skill-description">{description}</p>
    </Card>
  );
}
