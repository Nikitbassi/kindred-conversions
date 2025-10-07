import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Notification {
  id: number;
  name: string;
  city: string;
}

const mockNotifications: Notification[] = [
  { id: 1, name: 'Amit', city: 'Mumbai' },
  { id: 2, name: 'Priya', city: 'Delhi' },
  { id: 3, name: 'Rahul', city: 'Bangalore' },
  { id: 4, name: 'Sneha', city: 'Pune' },
  { id: 5, name: 'Vikram', city: 'Chennai' },
];

export const FomoNotification = () => {
  const [visible, setVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);

  useEffect(() => {
    const showNotification = () => {
      const randomNotification = mockNotifications[Math.floor(Math.random() * mockNotifications.length)];
      setCurrentNotification(randomNotification);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    const interval = setInterval(showNotification, 15000);
    setTimeout(showNotification, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!visible || !currentNotification) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-up">
      <div className="bg-card border border-primary/20 rounded-lg shadow-glow p-4 pr-10 max-w-sm">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div>
            <p className="text-sm font-medium text-foreground">
              {currentNotification.name} from {currentNotification.city}
            </p>
            <p className="text-xs text-muted-foreground">just joined the Inner Circle!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
