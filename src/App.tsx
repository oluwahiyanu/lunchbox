import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Target, 
  Wallet,
  Heart, 
  ChefHat, 
  ArrowRight, 
  CheckCircle2,
  Menu,
  X,
  Sparkles,
  Calendar,
  Clock,
  Globe
} from 'lucide-react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinWaitlist = () => {
    window.open('https://forms.gle/gbYA6JVKxNxRhUFC6', '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Meals",
      description: "You can choose to schedule your meal for the day or for the week so you don't have to disrupt your workflow.",
      animImage: "/anim-scheduling.png",
      animClass: "anim-pulse"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Budget",
      description: "With our AI powered scheduling feature, you can budget for the week.",
      animImage: "/anim-budget.png",
      animClass: "anim-float"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Eat Healthy",
      description: "Every meal is curated with your wellbeing in mind, using fresh, high-quality ingredients.",
      animImage: "/anim-meal.png",
      animClass: "anim-rotate-slow"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Scheduled meals delivered at your workplace at the start of your lunch break and exactly the time you want.",
      animImage: "/anim-clock.png",
      animClass: "anim-spin-slow"
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Chef-Crafted Recipes",
      description: "Enjoy carefully prepared meals from diverse cultures all over the country.",
      animImage: "/anim-chef.png",
      animClass: "anim-bounce-soft"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Diverse Food Options",
      description: "From local favourites to international delights, explore culture in healthy flavours.",
      animImage: "/anim-foods.png",
      animClass: "anim-scroll-foods"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Set Your Health Goals",
      description: "Tell us about your health objectives, dietary preferences, and any restrictions.",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Schedule Your Meals",
      description: "You can choose to schedule your meal for the day or for the week so you don't have to disrupt your workflow.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Budget Your Money",
      description: "With our AI powered scheduling feature, you can budget for the week.",
      icon: <Wallet className="w-6 h-6" />
    },
    {
      step: "04",
      title: "AI Analysis & Tracking",
      description: "Our AI processes your data and your health goals to create a personalized nutrition profile.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      step: "05",
      title: "Get Your Food at Lunch Time",
      description: "You get to choose your meal time so that you are always in control.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  const benefits = [
    { icon: <Calendar className="w-5 h-5" />, text: "Schedule Meals" },
    { icon: <Wallet className="w-5 h-5" />, text: "Budget" },
    { icon: <Clock className="w-5 h-5" />, text: "Save Time" },
    { icon: <Heart className="w-5 h-5" />, text: "Eat Healthy" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/lunchbox-logo.png" alt="Lunch Box" className="w-10 h-10" />
              <span className="text-xl font-bold text-gray-900">
                LUNCH BOX
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-[#E53935] transition-colors font-medium">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-[#E53935] transition-colors font-medium">
                How It Works
              </button>
              <button onClick={() => scrollToSection('waitlist')} className="text-gray-600 hover:text-[#E53935] transition-colors font-medium">
                Join Waitlist
              </button>
              <Button 
                onClick={() => window.open('https://forms.gle/gbYA6JVKxNxRhUFC6', '_blank')}
                className="bg-[#E53935] hover:bg-[#C62828] text-white rounded-full px-6"
              >
                Get Early Access
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="flex flex-col p-4 gap-4">
              <button onClick={() => scrollToSection('features')} className="text-left text-gray-600 py-2">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left text-gray-600 py-2">
                How It Works
              </button>
              <button onClick={() => scrollToSection('waitlist')} className="text-left text-gray-600 py-2">
                Join Waitlist
              </button>
              <Button 
                onClick={() => window.open('https://forms.gle/gbYA6JVKxNxRhUFC6', '_blank')}
                className="bg-[#E53935] text-white rounded-full"
              >
                Get Early Access
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Template Style */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#E53935]/20 rounded-full animate-pulse" />
        <div className="absolute top-40 left-20 w-3 h-3 bg-[#E53935]/30 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-40 left-16 w-5 h-5 bg-[#E53935]/10 rounded-full animate-pulse delay-500" />
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-gray-200 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-32 right-20 w-4 h-4 bg-gray-200 rounded-full animate-pulse delay-200" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E53935]/10 rounded-full text-[#E53935] text-sm font-medium animate-fade-in">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Food Delivery</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Favorite Lunch{' '}
                <span className="text-[#E53935]">
                  Delivered Hot &
                </span>
                <br />
                <span className="text-[#E53935]">Delicious</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg">
                Personalized lunch recommendations powered by AI, tailored to your health goals. 
                Designed for the high performer who values their time as much as their health.
              </p>

              <div className="rounded-2xl border border-[#E53935]/20 bg-[#FFF5F5] px-4 py-3 text-sm text-[#B71C1C] shadow-sm">
                We’re making lunch easier, smarter, and more joyful for every busy professional.
              </div>

              <div className="flex flex-wrap gap-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 hover:border-[#E53935]/30 hover:bg-[#E53935]/5 transition-all cursor-default">
                    <span className="text-[#E53935]">{benefit.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => window.open('https://forms.gle/gbYA6JVKxNxRhUFC6', '_blank')}
                  className="bg-[#E53935] hover:bg-[#C62828] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-[#E53935]/25 transition-all hover:scale-105 hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
                <div className="flex -space-x-2">
                  {['D', 'T', 'Y', 'U'].map((letter, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E53935] to-[#FF7043] border-2 border-white flex items-center justify-center text-xs text-white font-medium animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                      {letter}
                    </div>
                  ))}
                </div>
                <p><span className="font-semibold text-gray-900">100+</span> people already joined. Waitlist size - <span className="font-semibold text-[#E53935]">5000</span></p>
              </div>
            </div>

            {/* Right Content - Jollof Rice Image */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Main Image */}
                <img 
                  src="/jollof-rice-no-spoon.png" 
                  alt="Hot Jollof Rice" 
                  className="w-full max-w-md drop-shadow-2xl animate-float"
                />

                {/* Floating decorative elements */}
                <div className="absolute -top-8 right-0 w-16 h-16 bg-[#E53935]/10 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-20 -right-8 w-20 h-20 bg-[#E53935]/10 rounded-full blur-xl animate-pulse delay-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-[#E53935]/10 rounded-full text-[#E53935] text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Future of{' '}
              <span className="text-[#E53935]">
                Workspace Dining
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="group relative p-8 bg-white rounded-3xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E53935]/20 overflow-hidden"
              >
                {/* Animated Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img 
                    src={feature.animImage} 
                    alt="" 
                    className={`w-full h-full object-contain ${feature.animClass}`}
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#E53935]/10 rounded-2xl flex items-center justify-center text-[#E53935] mb-6 group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It{' '}
              <span className="text-[#E53935]">
                Works
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="relative bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-4xl font-bold text-[#E53935]/20 mb-4">{step.step}</div>
                <div className="w-10 h-10 bg-[#E53935] rounded-lg flex items-center justify-center text-white mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#E53935]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div className="hover:scale-110 transition-transform">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-white/80">Waitlist Members</div>
            </div>
            <div className="hover:scale-110 transition-transform">
              <div className="text-4xl md:text-5xl font-bold mb-2">5000</div>
              <div className="text-white/80">Waitlist Size</div>
            </div>
            <div className="hover:scale-110 transition-transform">
              <div className="text-4xl md:text-5xl font-bold mb-2">0min</div>
              <div className="text-white/80">Avg Delivery Time</div>
            </div>
            <div className="hover:scale-110 transition-transform">
              <div className="text-4xl md:text-5xl font-bold mb-2">0%</div>
              <div className="text-white/80">Delivery Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-[#E53935]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-[#E53935]" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join the{' '}
              <span className="text-[#E53935]">
                Waitlist
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be among the first to experience AI-powered meal recommendations. 
              Get early access and exclusive launch benefits.
            </p>

            <div className="max-w-md mx-auto">
              <Button 
                onClick={handleJoinWaitlist}
                className="h-14 px-12 bg-[#E53935] hover:bg-[#C62828] text-white rounded-full text-lg font-semibold shadow-lg shadow-[#E53935]/25 transition-all hover:scale-105"
              >
                Join Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                By joining, you agree to receive updates about LUNCH BOX
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/lunchbox-logo.png" alt="Lunch Box" className="w-10 h-10" />
                <span className="text-xl font-bold">LUNCH BOX</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                AI-powered food delivery that understands your health goals. 
                Eat smart, live better.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-[#E53935] transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#E53935] transition-colors">How It Works</button></li>
                <li><button onClick={() => scrollToSection('waitlist')} className="hover:text-[#E53935] transition-colors">Join Waitlist</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>getlunchbox.hq@gmail.com</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 LUNCH BOX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
