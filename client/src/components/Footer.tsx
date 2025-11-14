export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm opacity-80" data-testid="text-copyright">
          © {new Date().getFullYear()} JeniDub Tech Consulting. All rights reserved.
        </p>
        <p className="text-sm opacity-70 mt-2" data-testid="text-tagline">
          Think Like a Programmer, No Code Required
        </p>
      </div>
    </footer>
  );
}
