import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/hero-video.mp4';

export const VideoHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [hasUnmuted, setHasUnmuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-lg sm:rounded-xl overflow-hidden shadow-card">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={heroVideo}
        muted={isMuted}
        autoPlay
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Unmute Overlay - Shows when video is muted */}
      {isMuted && !hasUnmuted && (
        <div
          onClick={() => {
            setIsMuted(false);
            setHasUnmuted(true);
            if (videoRef.current) {
              videoRef.current.muted = false;
            }
          }}
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer animate-pulse-glow"
        >
          <div className="bg-background/90 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-center border border-primary/30 mx-4">
            <VolumeX className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-2 sm:mb-3 text-primary" />
            <p className="text-base sm:text-lg font-semibold mb-1">Your video has started...</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Click anywhere to listen</p>
          </div>
        </div>
      )}

      {/* Mute/Unmute Button - Hidden after first unmute */}
      {!hasUnmuted && (
        <Button
          onClick={() => {
            setIsMuted(!isMuted);
            if (videoRef.current) {
              videoRef.current.muted = !isMuted;
            }
          }}
          size="icon"
          variant="secondary"
          className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 rounded-full h-8 w-8 sm:h-10 sm:w-10"
        >
          {isMuted ? <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" /> : <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />}
        </Button>
      )}
    </div>
  );
};
