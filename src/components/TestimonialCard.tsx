import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
}

export const TestimonialCard = ({ name, role, content, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="bg-gradient-card border border-border rounded-xl p-6 shadow-card hover:border-primary/30 transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground mb-4 leading-relaxed">{content}</p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};
