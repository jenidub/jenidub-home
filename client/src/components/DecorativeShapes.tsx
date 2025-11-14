export default function DecorativeShapes() {
  return (
    <>
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-secondary/20 hidden lg:block" />
      <div className="absolute top-40 right-20 w-20 h-20 bg-accent/20 hidden lg:block" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      <div className="absolute bottom-40 left-1/4 w-28 h-28 rounded-full bg-primary/15 hidden lg:block" />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-secondary/25 hidden lg:block" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      <div className="absolute bottom-20 right-1/3 w-32 h-32 rounded-full bg-accent/20 hidden lg:block" />
    </>
  );
}
