import { useEffect } from 'react';
import { Play } from 'lucide-react';

interface VideoTestimonialProps {
  id: string;
  name: string;
  role: string;
  videoUrl: string; // YouTube/Vimeo URL or direct video file URL
  thumbnailUrl?: string;
  isYouTube?: boolean;
  isVimeo?: boolean;
  isPlaying: boolean;
  onPlay: () => void;
}

export const VideoTestimonial = ({ 
  id,
  name, 
  role, 
  videoUrl, 
  thumbnailUrl,
  isYouTube = false,
  isVimeo = false,
  isPlaying,
  onPlay
}: VideoTestimonialProps) => {

  // Extract YouTube video ID
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : '';
  };

  // Extract Vimeo video ID
  const getVimeoEmbedUrl = (url: string) => {
    const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
    return videoId ? `https://player.vimeo.com/video/${videoId}?autoplay=1` : '';
  };

  const embedUrl = isYouTube 
    ? getYouTubeEmbedUrl(videoUrl)
    : isVimeo 
    ? getVimeoEmbedUrl(videoUrl)
    : videoUrl;

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
      <div className="relative aspect-[9/16] bg-muted group">
        {!isPlaying ? (
          <>
            {/* Thumbnail */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: thumbnailUrl 
                  ? `url(${thumbnailUrl})` 
                  : 'linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.05))'
              }}
            />
            
            {/* Play Button Overlay */}
            <button
              onClick={onPlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors cursor-pointer"
              aria-label={`Play testimonial from ${name}`}
            >
              <div className="bg-primary/90 hover:bg-primary rounded-full p-4 sm:p-5 md:p-6 shadow-glow transition-all duration-300 group-hover:scale-110">
                <Play className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary-foreground" fill="currentColor" />
              </div>
            </button>

            {/* Name overlay on thumbnail */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
              <p className="font-semibold text-sm sm:text-base text-white">{name}</p>
              <p className="text-xs sm:text-sm text-gray-300">{role}</p>
            </div>
          </>
        ) : (
          <>
            {isYouTube || isVimeo ? (
              <iframe
                src={embedUrl}
                title={`${name} testimonial`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="absolute inset-0 w-full h-full object-cover"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </>
        )}
      </div>

      {isPlaying && (
        <div className="p-3 sm:p-4 bg-card/50">
          <p className="text-sm sm:text-base font-semibold">{name}</p>
          <p className="text-xs sm:text-sm text-muted-foreground">{role}</p>
        </div>
      )}
    </div>
  );
};