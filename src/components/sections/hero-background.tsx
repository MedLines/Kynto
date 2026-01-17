export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-white">
      {/* Studio Light Effect: Bright Cyan/Blue Top -> Deep Blue -> White Bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_90%_at_50%_0%,#3CB9FF_0%,#0055FF_60%,#FFFFFF_100%)]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />
    </div>
  );
}
