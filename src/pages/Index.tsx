import { Button } from '@/components/ui/button';
import { VideoHero } from '@/components/VideoHero';
import { CountdownTimer } from '@/components/CountdownTimer';
import { FomoNotification } from '@/components/FomoNotification';
import { TestimonialCard } from '@/components/TestimonialCard';
import { ValueStackItem } from '@/components/ValueStackItem';
import { Shield, Users, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

const Index = () => {
  // Set enrollment deadline (Nov 1st, 2025)
  const enrollmentDeadline = new Date('2025-11-01T23:59:59');

  const handleJoinNow = () => {
    // Replace with actual Razorpay integration
    window.open('https://razorpay.com/payment-link', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <FomoNotification />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Find Your Tribe.
              <br />
              <span className="text-primary">Never Fight Alone Again.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join 10,000+ men who've stopped settling and started winning—in life, career, and relationships.
            </p>
          </div>
          
          <div className="mb-8 animate-slide-up">
            <VideoHero />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 animate-scale-in">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-accent shadow-glow hover:scale-105 transition-transform"
              onClick={handleJoinNow}
            >
              Join The Inner Circle Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Proof Bar */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-border animate-fade-in">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">10,000+ Members</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">7+ Years Proven</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">100% Money-Back</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              You're Tired of Fighting Your Battles Alone
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                You wake up every day, show up for work, take care of responsibilities. On paper, you're doing fine.
              </p>
              <p>
                But deep down? You feel stuck. Isolated. Like you're the only one who doesn't have it all figured out.
              </p>
              <p className="font-semibold text-foreground">
                The truth is: <span className="text-primary">You were never meant to do this alone.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enter The <span className="text-primary">Mustang Inner Circle</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A brotherhood of men who refuse to settle. We're building better versions of ourselves—together.
            </p>
            <p className="text-lg">
              No fluff. No fake gurus. Just real support, proven frameworks, and a community that has your back.
            </p>
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Here's Everything You Get
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              When you join today, you get instant access to:
            </p>

            <div className="bg-gradient-card border border-border rounded-2xl p-8 mb-8 shadow-card">
              <div className="space-y-6">
                <ValueStackItem
                  title="5 Core Transformation Courses"
                  description="Mindset mastery, health optimization, career growth, relationship intelligence, and financial freedom"
                  value="29,999"
                />
                <ValueStackItem
                  title="Lifetime Access to Private Community"
                  description="Connect with 10,000+ like-minded men, share experiences, get support 24/7"
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
                  title="Weekly Accountability Groups"
                  description="Stay on track with peer support and structured check-ins"
                  value="12,000"
                />
              </div>

              <div className="border-t border-border mt-8 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total Value:</span>
                  <span className="text-2xl font-bold text-muted-foreground line-through">₹95,997</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">Your Investment Today:</span>
                  <span className="text-4xl font-bold text-primary">₹4,990</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="text-lg px-12 py-6 bg-gradient-accent shadow-glow hover:scale-105 transition-transform"
                onClick={handleJoinNow}
              >
                Claim Your Spot Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Real Results from Real Members
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Don't take our word for it. Here's what the brotherhood says:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TestimonialCard
              name="Arjun Mehta"
              role="Software Engineer, Mumbai"
              content="I was skeptical at first. But the Inner Circle gave me the clarity and support I desperately needed. Within 3 months, I got promoted and finally feel confident in my own skin."
            />
            <TestimonialCard
              name="Karthik Reddy"
              role="Entrepreneur, Bangalore"
              content="This isn't another self-help course. It's a real community of men pushing each other to be better. The accountability alone is worth 10x the price."
            />
            <TestimonialCard
              name="Rohan Sharma"
              role="Marketing Manager, Delhi"
              content="For the first time in years, I don't feel alone in my struggles. The frameworks work, and having brothers who understand makes all the difference."
            />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-card border-2 border-primary/30 rounded-2xl p-8 shadow-glow text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our "More Than Your Money Back" Guarantee
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Join the Inner Circle. Do the work for 90 days. If you don't see real transformation in your life, 
                we'll refund your full ₹4,990 <span className="font-bold text-primary">PLUS give you an additional ₹5,000.</span>
              </p>
              <div className="flex items-start gap-3 text-left max-w-2xl mx-auto mb-6">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  That's right—if you complete the courses and engage with the community, and you're not satisfied, 
                  you'll walk away with ₹9,990. We take all the risk.
                </p>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Why? Because we know this works. And we're confident you'll never want to leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Enrollment Closes Soon
            </h2>
            <p className="text-xl mb-12">
              The November 1st batch is filling fast. Secure your spot before the timer runs out.
            </p>

            <div className="mb-12">
              <CountdownTimer targetDate={enrollmentDeadline} />
            </div>

            <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 mb-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">Early Bird Bonus (Limited Time)</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join in the next 48 hours and get exclusive access to Ronit's private "First Principles Thinking" 
                masterclass (Value: ₹9,999) — absolutely free.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-semibold">Bonus unlocked for early action-takers only</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="text-xl px-16 py-8 bg-gradient-accent shadow-glow hover:scale-105 transition-transform"
              onClick={handleJoinNow}
            >
              Join The Inner Circle Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-6">
              Secure payment powered by Razorpay • 100% encrypted & safe
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Choice Is Yours
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              You can keep going it alone, hoping things will magically change.
              <br />
              <br />
              Or you can take action today and join a brotherhood that will push you, support you, 
              and help you become the man you're meant to be.
            </p>
            <p className="text-2xl font-bold mb-8">
              What will you choose?
            </p>
            
            <Button 
              size="lg" 
              className="text-xl px-16 py-8 bg-gradient-accent shadow-glow hover:scale-105 transition-transform mb-6"
              onClick={handleJoinNow}
            >
              Yes, I'm Ready to Join
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>

            <p className="text-sm text-muted-foreground">
              Questions? Email us at support@mustanginnercircle.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Mustang Inner Circle. All rights reserved.</p>
          <p className="mt-2">Privacy Policy • Terms of Service • Refund Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
