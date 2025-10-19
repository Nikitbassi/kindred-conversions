import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { VideoHero } from "@/components/VideoHero";
import { CountdownTimer } from "@/components/CountdownTimer";
import { FomoNotification } from "@/components/FomoNotification";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ValueStackItem } from "@/components/ValueStackItem";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Shield, Users, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import testimonialVideo from "@/assets/testimonial-video.mp4";
import mustangPhoto1 from "@/assets/mustang-photo-1.png";
import mustangPhoto2 from "@/assets/mustang-photo-2.avif";
import certificationsImage from "@/assets/certifications.avif";
import companyLogos from "@/assets/company-logos.avif";
const Index = () => {
  // Set enrollment deadline (Oct 27th, 2025)
  const enrollmentDeadline = new Date("2025-10-27T23:59:59");

  // Track which video testimonial is currently playing
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Initialize separate Autoplay plugins for each carousel
  const videoTestimonialsAutoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    }),
  );

  const textTestimonialsAutoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    }),
  );
  const handleJoinNow = () => {
    window.open("https://pages.razorpay.com/mic-2", "_blank");
  };
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Top Banner with Countdown */}
      <div className="w-full">
        {/* Red Banner */}
        <div className="bg-red-600 text-white text-center py-3 px-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
            Last Agency Optimization Masterclass of the Year
          </h2>
        </div>
        
        {/* Timer Section */}
        <div className="bg-black text-white py-4 px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-3">
            <p className="text-sm sm:text-base md:text-lg font-medium">
              Limited time offer ends in
            </p>
            <CountdownTimer targetDate={enrollmentDeadline} variant="banner" />
          </div>
        </div>
      </div>
      
      <FomoNotification />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              You're Not Overwhelmed.
              <br />
              <span className="text-primary">You're Under-fulfilled.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Join 10,000+ people who've stopped settling and started winning in life, career, and relationships.
            </p>
          </div>

          <div className="mb-8 animate-slide-up">
            <VideoHero />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 sm:mb-6 animate-scale-in">
            <Button
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-accent shadow-glow hover:scale-105 transition-transform w-full sm:w-auto"
              onClick={handleJoinNow}
            >
              Join The Inner Circle Now
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          {/* Social Proof Bar */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-border animate-fade-in">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-xs sm:text-sm font-medium">10,000+ Transformations</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-xs sm:text-sm font-medium">7+ Years Proven</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-xs sm:text-sm font-medium">100% Money-Back</span>
            </div>
          </div>
        </div>
      </section>

      {/* Walk Away With Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-center">
              What You'll <span className="text-primary">Walk Away With:</span>
            </h2>
            <p className="text-center text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12">
              By the end of the Mustang Inner Circle, you'll experience deep internal shifts -
            </p>

            <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
              {[
                "Emotional Pattern Clarity",
                "Powerful Self-Expression",
                "Money & Visibility Empowerment",
                "Nervous System Regulation",
                "Unshakeable Inner Authority",
                "Personal Leadership Code",
                "Healed Relationship Patterns",
                "Purpose-Work Alignment",
                "Lifelong Growth Community",
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className="bg-background/50 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all hover:border-primary/40 group animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary animate-pulse" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg font-medium text-foreground">{item}</p>
                    </div>
                  </div>
                  {/* Connecting Dot */}
                  {index < 8 && (
                    <div className="flex justify-center py-2">
                      <div 
                        className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-fade-in"
                        style={{ animationDelay: `${index * 150 + 75}ms`, animationFillMode: 'backwards' }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                This is not just personal development.
                <br />
                It's a full <span className="font-semibold italic text-foreground">recalization</span> of how you live,
                lead, love, and show up in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Here's Everything Inside Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 text-center">
              Here's everything <span className="text-primary">INSIDE</span> 🎁
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {/* Left Column - 5 Core Courses */}
              <div className="bg-gradient-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-glow transition-all">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center md:text-left">
                  5 Core Courses - Watch Anytime, Own Forever
                </h3>
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex gap-3 sm:gap-4 items-start group">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg sm:text-xl group-hover:bg-primary/20 transition-colors">
                      🧠
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base mb-1">Mindset Framework</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        rewire limiting beliefs into empowering ones
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4 items-start group">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg sm:text-xl group-hover:bg-primary/20 transition-colors">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base mb-1">Emotional Foundations</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        understand and regulate your inner world
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4 items-start group">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg sm:text-xl group-hover:bg-primary/20 transition-colors">
                      💪
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base mb-1">Health Fundamentals</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        energy, habits, and resilience for daily life
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4 items-start group">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg sm:text-xl group-hover:bg-primary/20 transition-colors">
                      💰
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base mb-1">Money Blueprint</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        psychology of money, spending, and growth
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4 items-start group">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg sm:text-xl group-hover:bg-primary/20 transition-colors">
                      ❤️
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base mb-1">Relationship Essentials</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">build healthier, stronger connections</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Additional Benefits */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Certificate Of Completion",
                  "Community Lifetime Access",
                  "50+ Worksheets & Exercises",
                  "Access to Monthly Live QA",
                  "City Meetup Access",
                  "Reward for top performer up to 10k",
                  "Ronit's Exclusive Ebook - Becoming Irresistible",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 text-center font-medium text-sm sm:text-base hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-[1.02] cursor-default shadow-sm"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-5 sm:py-6 md:py-7 bg-gradient-accent shadow-glow hover:scale-105 transition-transform font-bold w-full sm:w-auto"
                onClick={handleJoinNow}
              >
                CHOOSE YOURSELF NOW ✨
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Am I AKA MUSTANG Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 sm:mb-20 md:mb-24 text-center">
              WHO AM I <span className="italic font-normal">AKA</span> <span className="text-primary">MUSTANG</span>?
            </h2>

            {/* Creative Magazine-Style Layout */}
            <div className="relative">
              {/* Row 1 - Top section with photos and intro */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16 items-center">
                {/* Left - Two tilted photos */}
                <div className="flex justify-center lg:justify-start gap-4 relative">
                  <div className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="w-40 h-48 sm:w-48 sm:h-56 md:w-52 md:h-60 bg-gradient-to-br from-amber-200 via-blue-400 to-blue-200 rounded-2xl shadow-2xl overflow-hidden">
                      <img src={mustangPhoto2} alt="Ronit Ranjan" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300 mt-6">
                    <div className="w-36 h-44 sm:w-40 sm:h-52 md:w-44 md:h-56 bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400 rounded-2xl shadow-2xl overflow-hidden">
                      <img src={mustangPhoto2} alt="Ronit Ranjan" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Right - Intro text and photo/newspaper combo */}
                <div className="space-y-6">
                  <div className="bg-background/80 backdrop-blur-sm p-8 rounded-xl">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      <span className="font-bold">Ronit Ranjan</span> is an Emotional Fitness Coach & Leadership
                      Trainer, Entrepreneur, 5X TEDx speaker, and Ex-Indian Army Cadet
                    </p>
                  </div>

                  {/* Photo and newspaper clipping tilted */}
                  <div className="flex justify-end gap-3 relative -mt-4">
                    <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300">
                      <div className="w-40 h-48 sm:w-44 sm:h-52 md:w-48 md:h-56 bg-gradient-to-br from-gray-700 via-gray-500 to-gray-300 rounded-2xl shadow-2xl overflow-hidden">
                        <img src={mustangPhoto2} alt="Ronit Ranjan" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-300 -mt-8">
                      <div className="w-44 h-52 sm:w-48 sm:h-56 md:w-52 md:h-60 bg-white rounded-xl shadow-2xl p-2 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                          <img src={mustangPhoto2} alt="Ronit Ranjan" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 - Youngest person achievement and credentials */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    He's the <span className="font-bold text-primary text-xl sm:text-2xl">youngest person</span> in the
                    world to walk from Kanyakumari to Kashmir.
                  </p>

                  {/* Certifications Image */}
                  <div className="w-full max-w-md">
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/40 rounded-xl shadow-lg overflow-hidden">
                      <img src={certificationsImage} alt="Ronit Ranjan Certifications" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="bg-card border border-border p-6 sm:p-8 rounded-2xl shadow-card">
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                      He has more than{" "}
                      <span className="font-bold text-primary text-xl sm:text-2xl">15 credentials under his belt</span>,
                      and has been mentored by the giants like{" "}
                      <span className="font-bold">Jack Canfield, Tony Robbins, and Vikram Dhar</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 4 - Featured in and logos */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16 items-center">
                <div>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                    He has been featured by G-20, European Commission, Amazon Prime, The Hindu, The Indian Express, Zee
                    Network, Times of India, TEDx, Brut, Humans of Bombay, The Quint, and many more.
                  </p>
                </div>

                {/* Company Logos Card */}
                <div className="flex justify-center lg:justify-end">
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl border border-border/50 transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <img src={companyLogos} alt="Featured Companies and Media" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Row 5 - Air Marshal commendation with photo */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16 items-center">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="w-44 h-52 sm:w-48 sm:h-56 md:w-52 md:h-60 bg-gradient-to-br from-green-900 via-green-700 to-green-500 rounded-2xl shadow-2xl overflow-hidden">
                      <img src={mustangPhoto2} alt="Ronit Ranjan" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border p-6 sm:p-8 rounded-2xl shadow-card">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    He has been commended by{" "}
                    <span className="font-bold text-primary">Air Marshal JS Kler, Indian Air Force</span>
                  </p>
                </div>
              </div>

              {/* Row 6 - Personal hobbies and quote */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
                <div className="order-2 lg:order-1">
                  <div className="space-y-4">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      In his free time, he hunts for the best Chole Bhature in town, writes poetry, and kicks
                      patriarchy's ass.
                    </p>
                    <div className="bg-muted/50 p-5 rounded-xl border-l-4 border-primary">
                      <p className="text-sm sm:text-base md:text-lg italic">
                        He says,{" "}
                        <span className="font-semibold text-foreground">
                          "You can take a soldier out of the army but not the army out of the soldier."
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom right photos */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end gap-3">
                  <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="w-36 h-44 sm:w-40 sm:h-48 md:w-44 md:h-52 bg-gradient-to-br from-pink-400 via-pink-300 to-pink-200 rounded-2xl shadow-2xl overflow-hidden">
                      <img src={mustangPhoto2} alt="Ronit Ranjan" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8">
                    <div className="w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-48 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-200 rounded-2xl shadow-2xl overflow-hidden">
                      <img src={mustangPhoto2} alt="Ronit Ranjan" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
              Here's Everything You Get
            </h2>
            <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12">
              When you join today, you get instant access to:
            </p>

            <div className="bg-gradient-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-card">
              <div className="space-y-6">
                <ValueStackItem
                  title="5 Core Transformation Courses"
                  description="Mindset mastery, health optimization, career growth, relationship intelligence, and financial freedom"
                  value="29,999"
                />
                <ValueStackItem
                  title="Lifetime Access to Private Community"
                  description="Connect with 10,000+ like-minded people, share experiences, get support 24/7"
                  value="19,999"
                />
                <ValueStackItem
                  title="50+ Worksheets & Action Plans"
                  description="Practical exercises and templates to implement what you learn immediately"
                  value="9,999"
                />
                <ValueStackItem
                  title="Monthly Live Q&A with Ronit"
                  description="Get your questions answered directly, gain personalized insights"
                  value="24,000"
                />
                <ValueStackItem
                  title="City Meetup Access"
                  description="Network and connect with members in your city through exclusive local events"
                  value="Priceless"
                />
                <ValueStackItem
                  title="Ronit's Exclusive Ebook - Becoming Irresistible"
                  description="Master the art of attraction and influence in all areas of life"
                  value="4,000"
                />
                <ValueStackItem
                  title="Weekly Accountability Groups"
                  description="Stay on track with peer support and structured check-ins"
                  value="Priceless"
                />
                <ValueStackItem
                  title="Certificate Of Completion"
                  description="Official recognition of your transformation journey and achievement"
                  value="Priceless"
                />
                <ValueStackItem
                  title="Reward for Top Performer"
                  description="Compete for excellence and win rewards up to ₹10,000"
                  value="Priceless"
                />
              </div>

              <div className="border-t border-border mt-6 sm:mt-8 pt-4 sm:pt-6">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="text-base sm:text-lg font-semibold">Total Value:</span>
                  <span className="text-xl sm:text-2xl font-bold text-muted-foreground line-through">₹95,997</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-2xl font-bold">Your Investment Today:</span>
                  <span className="text-3xl sm:text-4xl font-bold text-primary">₹4,990</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 bg-gradient-accent shadow-glow hover:scale-105 transition-transform w-full sm:w-auto"
                onClick={handleJoinNow}
              >
                Claim Your Spot Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
            Hear from Our Community
          </h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12">
            Real transformations. Real stories. Real people.
          </p>

          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[videoTestimonialsAutoplay.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <VideoTestimonial
                    id="video-1"
                    name="Arjun Mehta"
                    role="Software Engineer, Mumbai"
                    videoUrl={testimonialVideo}
                    thumbnailUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop"
                    isPlaying={playingVideoId === "video-1"}
                    onPlay={() => setPlayingVideoId("video-1")}
                  />
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <VideoTestimonial
                    id="video-2"
                    name="Karthik Reddy"
                    role="Entrepreneur, Bangalore"
                    videoUrl={testimonialVideo}
                    thumbnailUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=450&fit=crop"
                    isPlaying={playingVideoId === "video-2"}
                    onPlay={() => setPlayingVideoId("video-2")}
                  />
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <VideoTestimonial
                    id="video-3"
                    name="Rohan Sharma"
                    role="Marketing Manager, Delhi"
                    videoUrl={testimonialVideo}
                    thumbnailUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=450&fit=crop"
                    isPlaying={playingVideoId === "video-3"}
                    onPlay={() => setPlayingVideoId("video-3")}
                  />
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <VideoTestimonial
                    id="video-4"
                    name="Vikram Patel"
                    role="Product Manager, Pune"
                    videoUrl={testimonialVideo}
                    thumbnailUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=450&fit=crop"
                    isPlaying={playingVideoId === "video-4"}
                    onPlay={() => setPlayingVideoId("video-4")}
                  />
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <VideoTestimonial
                    id="video-5"
                    name="Sahil Kumar"
                    role="Fitness Coach, Hyderabad"
                    videoUrl={testimonialVideo}
                    thumbnailUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=450&fit=crop"
                    isPlaying={playingVideoId === "video-5"}
                    onPlay={() => setPlayingVideoId("video-5")}
                  />
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <VideoTestimonial
                    id="video-6"
                    name="Aditya Singh"
                    role="Startup Founder, Gurgaon"
                    videoUrl={testimonialVideo}
                    thumbnailUrl="https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&h=450&fit=crop"
                    isPlaying={playingVideoId === "video-6"}
                    onPlay={() => setPlayingVideoId("video-6")}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Text Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">More Success Stories</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12">
            Join thousands who've already transformed their lives
          </p>

          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[textTestimonialsAutoplay.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="h-auto sm:h-[400px]">
                    <TestimonialCard
                      name="Chiradeep Patra"
                      role="Life Coach"
                      content="I myself, being a Life Coach, have come across many coaches and colleagues who often rely on terms that are difficult to understand and remember for clients or people in general. But in the case of Ronit's approach, I would say it was absolutely simple to grasp, easy to understand, and practically implementable. He stays part of the community, not someone directing from the top only. I loved that about him."
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="h-auto sm:h-[400px]">
                    <TestimonialCard
                      name="Ramya"
                      role="Entrepreneur"
                      content="You might be wondering— is it worth the money, time, and effort? Without a doubt, yes. One of the best experiences I've had, and I walked away feeling like it was worth far more than what I paid. Absolutely recommend it!"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="h-auto sm:h-[400px]">
                    <TestimonialCard
                      name="Anjali Gupta"
                      role="Business Consultant"
                      content="He is such an amazing mentor! Despite of 100s of us joining the masterclass he made sure to listen to everyone out there. He is very grounded and the most present coach I have ever seen in my life. His sharings were practical and to the point and i got so many insights from it. It is definitely going to help transform me thats for sure. Highly recommended to all"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="h-auto sm:h-[400px]">
                    <TestimonialCard
                      name="Navya Manjunath"
                      role="Marketing Professional"
                      content="Ronit is a wonderful coach! I love his coaching style which is a careful balance between 'I will not tolerate bullshit' and 'I will be there for you no matter what'. He is empathetic, funny and has a great depth of knowledge to identify and understand his client's issues so that he can partner up with them in their journey to reach their highest potential. Personally, he has empathetically challenged me to let go of my fears and embrace the power within me."
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="h-auto sm:h-[400px]">
                    <TestimonialCard
                      name="Dr Ritu Priya Pareek"
                      role="Medical Professional"
                      content="It covers everything—from recognising past mistakes to having a clear future vision, overcoming obstacles, healing, and improving life step by step. The exercises are simple yet powerful, helping you take real action. I highly recommend it to anyone looking for self-improvement and a better, more fulfilling life"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="h-auto sm:h-[400px]">
                    <TestimonialCard
                      name="Disha Mehra"
                      role="Creative Director"
                      content="The flow of workshop was fantastic and to the point discussions, it just didn't seem like those regular workshops, looking forward for more such insightful sessions, Great job Ronit Ranjan, cheers!"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-card border-2 border-primary/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-glow text-center">
              <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Our "More Than Your Money Back" Guarantee
              </h2>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Join the Inner Circle. Do the work for 90 days. If you don't see real transformation in your life, we'll
                refund your full ₹4,990{" "}
                <span className="font-bold text-primary">PLUS give you an additional ₹5,000.</span>
              </p>
              <div className="flex items-start gap-2 sm:gap-3 text-left max-w-2xl mx-auto mb-4 sm:mb-6">
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-muted-foreground">
                  That's right - if you complete the courses and engage with the community, and you're not moved, you'll
                  walk away with ₹9,990. We take all the risk.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground italic">
                Why? Because we know this works. And we're confident you'll never want to leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-primary">
              Enrollment Closes Soon
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12">
              The November 1st batch is filling fast. Secure your spot before the timer runs out.
            </p>

            <div className="mb-8 sm:mb-12">
              <CountdownTimer targetDate={enrollmentDeadline} />
            </div>

            <div className="bg-gradient-card border border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-card">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Early Bird Bonus (Limited Time)</h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Join in the next 48 hours and get exclusive access to Ronit's private "First Principles Thinking"
                masterclass (Value: ₹9,999) — absolutely free.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base font-semibold">Bonus unlocked for early action-takers only</span>
              </div>
            </div>

            <Button
              size="lg"
              className="text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-6 sm:py-8 bg-gradient-accent shadow-glow hover:scale-105 transition-transform w-full sm:w-auto"
              onClick={handleJoinNow}
            >
              Join The Inner Circle Now
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>

            <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
              Secure payment powered by Razorpay • 100% encrypted & safe
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">The Choice Is Yours</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              You can keep going it alone, hoping things will magically change.
              <br />
              <br />
              Or you can take action today and join a community that will push you, support you, and help you become the
              man you're meant to be.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8">What will you choose?</p>

            <Button
              size="lg"
              className="text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-6 sm:py-8 bg-gradient-accent shadow-glow hover:scale-105 transition-transform mb-4 sm:mb-6 w-full sm:w-auto"
              onClick={handleJoinNow}
            >
              Yes, I'm Ready to Join
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>

            <p className="text-xs sm:text-sm text-muted-foreground">Questions? Email us at contact@ronitranjan.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2025 Mustang Inner Circle. All rights reserved.</p>
          <p className="mt-2">Privacy Policy • Terms of Service • Refund Policy</p>
        </div>
      </footer>
    </div>
  );
};
export default Index;
