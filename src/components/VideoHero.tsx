import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const VideoHero = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-card">
      {/* Video Placeholder - Replace with actual video element */}
      <div className="absolute inset-0 bg-gradient-card flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-1" />
          </div>
          <p className="text-muted-foreground text-sm">Video Player Placeholder</p>
          <p className="text-xs text-muted-foreground mt-1">Integrate your presale video here</p>
        </div>
      </div>

      {/* Unmute Overlay - Shows when video is muted */}
      {isMuted && (
        <div
          onClick={() => setIsMuted(false)}
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer animate-pulse-glow"
        >
          <div className="bg-background/90 backdrop-blur-sm rounded-2xl px-8 py-6 text-center border border-primary/30">
            <VolumeX className="h-12 w-12 mx-auto mb-3 text-primary" />
            <p className="text-lg font-semibold mb-1">Your video has started...</p>
            <p className="text-sm text-muted-foreground">Click anywhere to listen</p>
          </div>
        </div>
      )}

      {/* Mute/Unmute Button */}
      <Button
        onClick={() => setIsMuted(!isMuted)}
        size="icon"
        variant="secondary"
        className="absolute bottom-4 right-4 rounded-full"
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </Button>
    </div>
  );
};
