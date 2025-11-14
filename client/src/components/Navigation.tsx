import { Button } from "@/components/ui/button";
export default function Navigation() {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              data-testid="link-about"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              data-testid="link-skills"
            >
              Skills
            </a>
            <a
              href="#philosophy"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              data-testid="link-philosophy"
            >
              Philosophy
            </a>
          </nav>
        </div>
        <Button
          variant="default"
          size="sm"
          className="bg-foreground text-background hover:bg-foreground/90"
          data-testid="button-contact"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}
