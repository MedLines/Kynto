import { cn } from "@/lib/utils";

interface SectionPlaceholderProps {
  title: string;
  className?: string;
}

export function SectionPlaceholder({
  title,
  className,
}: SectionPlaceholderProps) {
  return (
    <section
      className={cn(
        "w-full min-h-[400px] flex items-center justify-center bg-gray-50 border-y border-gray-100",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-4 text-gray-400">
        <div className="w-16 h-16 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
          <span className="text-2xl font-mono">?</span>
        </div>
        <h2 className="text-xl font-medium font-mono">{title}</h2>
        <p className="text-sm">Component Placeholder</p>
      </div>
    </section>
  );
}
