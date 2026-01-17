export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-kynto-white">
      {/* 1. Underlying Gray Grid (Behind Gradient) */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                            linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      {/* 2. Studio Light Effect: Bright Cyan/Blue Top -> Deep Blue -> Transparent Bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_90%_at_50%_0%,#3CB9FF_0%,#019EFF_50%,transparent_100%)]" />

      {/* 3. Top Grid Overlay (White -> Blue Transition) */}

      {/* 3A. White Grid (Fades out at bottom) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                            linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to bottom, #A0DDFF 0%, transparent 50%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 50%)",
        }}
      />

      {/* 3B. Blue Grid (Fades in at bottom) */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, #A0DDFF 1px, transparent 1px),
                            linear-gradient(to bottom, #A0DDFF 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, transparent 20%, #A0DDFF 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 20%, #A0DDFF 100%)",
        }}
      />
    </div>
  );
}
