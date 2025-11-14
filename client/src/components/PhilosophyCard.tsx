import { Card } from "@/components/ui/card";

interface PhilosophyCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function PhilosophyCard({ icon, title, description }: PhilosophyCardProps) {
  return (
    <Card
      className="p-8 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
      data-testid={`card-philosophy-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-5xl mb-4" data-testid="text-philosophy-icon">{icon}</div>
      <h3 className="text-2xl font-bold text-secondary mb-4" data-testid="text-philosophy-title">{title}</h3>
      <p className="text-base text-foreground leading-relaxed" data-testid="text-philosophy-description">{description}</p>
    </Card>
  );
}
