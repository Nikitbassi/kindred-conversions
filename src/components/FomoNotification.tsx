import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Notification {
  id: number;
  message: string;
  type: 'join' | 'count-week' | 'count-today' | 'milestone';
}

const mockNotifications: Notification[] = [
  { id: 1, message: 'Arjun from Mumbai just joined the Inner Circle!', type: 'join' },
  { id: 2, message: 'Neha from Delhi just joined the Inner Circle!', type: 'join' },
  { id: 3, message: 'Karthik from Bangalore just joined the Inner Circle!', type: 'join' },
  { id: 4, message: 'Priyanka from Pune just joined the Inner Circle!', type: 'join' },
  { id: 5, message: 'Rohan from Chennai just joined the Inner Circle!', type: 'join' },
  { id: 6, message: '127 people joined last week', type: 'count-week' },
  { id: 7, message: '23 people joined today', type: 'count-today' },
  { id: 8, message: '89 people joined last week', type: 'count-week' },
  { id: 9, message: '31 people joined today', type: 'count-today' },
  { id: 10, message: 'Aisha from Hyderabad just joined the Inner Circle!', type: 'join' },
  { id: 11, message: '156 people joined last week', type: 'count-week' },
  { id: 12, message: '42 people joined today', type: 'count-today' },
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
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 animate-slide-up max-w-[calc(100vw-2rem)] sm:max-w-sm">
      <div className="bg-card border border-primary/20 rounded-lg shadow-glow p-3 sm:p-4 pr-8 sm:pr-10">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
          <div>
            <p className="text-xs sm:text-sm font-medium text-foreground">
              {currentNotification.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
