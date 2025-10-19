import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  variant?: 'default' | 'banner';
}

export const CountdownTimer = ({ targetDate, variant = 'default' }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const boxStyles = variant === 'banner' 
    ? "bg-white border-2 border-white" 
    : "bg-gradient-card border border-border shadow-card";
  
  const textStyles = variant === 'banner'
    ? "text-black"
    : "text-primary";
    
  const labelStyles = variant === 'banner'
    ? "text-white"
    : "text-muted-foreground";

  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="flex flex-col items-center">
          <div className={`${boxStyles} rounded-lg p-2 sm:p-3 md:p-4 min-w-[60px] sm:min-w-[70px] md:min-w-[80px]`}>
            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${textStyles} tabular-nums`}>
              {String(value).padStart(2, '0')}
            </div>
          </div>
          <div className={`text-xs sm:text-sm ${labelStyles} mt-1 sm:mt-2 capitalize`}>{interval}</div>
        </div>
      ))}
    </div>
  );
};
