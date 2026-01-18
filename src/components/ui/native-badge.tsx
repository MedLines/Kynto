import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface NativeBadgeProps extends React.ComponentProps<typeof Badge> {
  dotClass?: string;
}

export function NativeBadge({
  className,
  children,
  dotClass,
  ...props
}: NativeBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "rounded-xl px-4 py-3 text-base font-normal font-poppins gap-2.5 bg-secondary hover:bg-muted text-foreground border-none",
        className,
      )}
      {...props}
    >
      <span
        className={cn("w-2 h-2 rounded-full bg-foreground shrink-0", dotClass)}
      />
      {children}
    </Badge>
  );
}
