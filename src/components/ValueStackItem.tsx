import { Check } from 'lucide-react';

interface ValueStackItemProps {
  title: string;
  description: string;
  value: string;
}

export const ValueStackItem = ({ title, description, value }: ValueStackItemProps) => {
  return (
    <div className="flex gap-3 sm:gap-4 items-start border-b border-border pb-4 sm:pb-6 last:border-0 last:pb-0">
      <div className="flex-shrink-0 mt-1">
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center">
          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">{title}</h4>
        <p className="text-xs sm:text-sm text-muted-foreground mb-2">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <span className="text-xs sm:text-sm font-medium text-primary whitespace-nowrap">{value === "Priceless" ? value : `₹${value}`}</span>
      </div>
    </div>
  );
};
