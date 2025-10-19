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
    
  const sizeStyles = variant === 'banner'
    ? "gap-1 sm:gap-2 md:gap-3"
    : "gap-2 sm:gap-3 md:gap-4";
    
  const boxSizeStyles = variant === 'banner'
    ? "p-1.5 sm:p-2 md:p-3 min-w-[45px] sm:min-w-[55px] md:min-w-[65px]"
    : "p-2 sm:p-3 md:p-4 min-w-[60px] sm:min-w-[70px] md:min-w-[80px]";
    
  const numberStyles = variant === 'banner'
    ? "text-lg sm:text-2xl md:text-3xl"
    : "text-2xl sm:text-3xl md:text-4xl";
    
  const labelSizeStyles = variant === 'banner'
    ? "text-[10px] sm:text-xs mt-0.5 sm:mt-1"
    : "text-xs sm:text-sm mt-1 sm:mt-2";

  return (
    <div className={`flex ${sizeStyles} justify-center`}>
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="flex flex-col items-center">
          <div className={`${boxStyles} ${boxSizeStyles} rounded-lg`}>
            <div className={`${numberStyles} font-bold ${textStyles} tabular-nums`}>
              {String(value).padStart(2, '0')}
            </div>
          </div>
          <div className={`${labelSizeStyles} ${labelStyles} capitalize`}>{interval}</div>
        </div>
      ))}
    </div>
  );
};
