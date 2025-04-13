
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
}

const SkillBadge = ({ name, className }: SkillBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground",
        className
      )}
    >
      {name}
    </span>
  );
};

export default SkillBadge;
