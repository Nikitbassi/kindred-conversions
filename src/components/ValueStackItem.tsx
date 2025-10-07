import { Check } from 'lucide-react';

interface ValueStackItemProps {
  title: string;
  description: string;
  value: string;
}

export const ValueStackItem = ({ title, description, value }: ValueStackItemProps) => {
  return (
    <div className="flex gap-4 items-start border-b border-border pb-6 last:border-0 last:pb-0">
      <div className="flex-shrink-0 mt-1">
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
          <Check className="h-4 w-4 text-primary" />
        </div>
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <span className="text-sm font-medium text-primary">{value === "Priceless" ? value : `₹${value}`}</span>
      </div>
    </div>
  );
};
