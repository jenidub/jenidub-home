import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PathCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export default function PathCard({ title, description, buttonText, href }: PathCardProps) {
  return (
    <Card
      className="p-10 bg-background shadow-xl hover:shadow-2xl transition-shadow duration-300"
      data-testid={`card-path-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <h3 className="text-3xl font-bold text-primary mb-4" data-testid="text-path-title">{title}</h3>
      <p className="text-lg text-foreground leading-relaxed mb-6" data-testid="text-path-description">{description}</p>
      <Button
        size="lg"
        className="bg-secondary text-white hover:bg-secondary/90 font-semibold rounded-full px-8"
        data-testid={`button-path-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <a href={href}>{buttonText}</a>
      </Button>
    </Card>
  );
}
