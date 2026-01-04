import React, { useState, useRef } from "react";
import {
  Box,
  Twitter,
  Instagram,
  Download,
  Mail,
  MapPin,
  ArrowUpRight,
  Lock,
  Asterisk,
  Flower2,
  Zap,
  MessageSquare,
  Globe,
  Star,
  Play,
  CircleDot,
  ChevronLeft,
  ChevronRight,
  Code2,
  Rocket,
  Sparkles,
  X,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { motion, AnimatePresence } from "framer-motion";
import { StardustButton } from "@/components/ui/stardust-button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { ScrollReveal } from "@/components/scroll-reveal";

// Enrollment Modal Component
const EnrollmentModal = ({ isOpen, onClose, onSuccess }: { isOpen: boolean, onClose: () => void, onSuccess: () => void }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    goal: "",
    reason: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const roles = ["Designer", "Developer", "Product Manager", "Founder / Solo Builder", "Student", "Other"];
  const goals = ["Mobile app (iOS / Android)", "SaaS / Web app", "Internal tool / Automation", "I’m still exploring"];
  const reasons = ["I want to ship my first real product", "I’ve ideas but never launched"];

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      if (newErrors.email && emailRef.current) {
        emailRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        emailRef.current.focus();
      }
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('applications')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            role: formData.role,
            goal: formData.goal,
            reason: formData.reason
          }
        ]);

      if (error) throw error;

      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#FAF9F2] text-[#1a1a1a] p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/[0.03] flex items-center gap-4 min-w-[320px] pointer-events-auto"
        >
          <div className="w-10 h-10 rounded-full bg-[#D4E845] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[14px] tracking-tight">Form Submitted</span>
            <p className="text-gray-500 text-[12px] font-medium leading-none mt-0.5">
              We'll get in touch within 24 hours
            </p>
          </div>
        </motion.div>
      ), {
        position: 'top-center',
        duration: 4000,
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        role: "",
        goal: "",
        reason: ""
      });

      onSuccess();
      onClose();
    } catch (error: any) {
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#FAF9F2] text-[#1a1a1a] p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/[0.03] flex items-center gap-4 min-w-[320px] pointer-events-auto"
        >
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
            <X className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[14px] tracking-tight">Submission Failed</span>
            <p className="text-gray-500 text-[12px] font-medium leading-none mt-0.5">
              Please try again
            </p>
          </div>
        </motion.div>
      ), {
        position: 'top-center',
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md hidden md:block"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: { type: "spring", damping: 25, stiffness: 300 }
            }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full h-full md:h-auto md:max-w-xl bg-[#FAF9F2] md:rounded-3xl overflow-hidden shadow-2xl border-none pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-[#D4E845] p-6 md:p-8 pb-10 relative overflow-hidden shrink-0">
              <button 
                onClick={onClose}
                className="absolute top-4 md:top-6 right-4 md:right-6 w-8 md:w-10 h-8 md:h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors z-20"
              >
                <X className="w-4 md:w-5 h-4 md:h-5 text-black" />
              </button>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-medium font-instrument text-black mb-1 md:mb-2">Apply for LaunchAnyway</h2>
                <p className="text-black/60 text-[12px] md:text-sm font-medium">Batch starts Jan 18th • 13 seats left</p>
              </div>
            </div>

            <div className="p-8 pb-32 -mt-6 relative z-10 bg-[#FAF9F2] rounded-t-3xl h-full md:max-h-[70vh] overflow-y-auto custom-scrollbar">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Section 1: Basic Info */}
                <div className="space-y-6">
                  <h3 className="text-[11px] font-bold font-mono text-gray-400 uppercase tracking-widest border-b border-black/5 pb-2">Basic Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-gray-700 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Bruce Wayne (Batman)"
                        className="w-full px-4 py-3 rounded-xl bg-black/5 border-none focus:ring-2 focus:ring-[#D4E845] transition-all text-sm font-inter"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-gray-700 ml-1">Email Address</label>
                      <input 
                        ref={emailRef}
                        type="email" 
                        required
                        placeholder="john@example.com"
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-black/5 border-none focus:ring-2 transition-all text-sm font-inter",
                          errors.email ? "ring-2 ring-red-500 bg-red-50" : "focus:ring-[#D4E845]"
                        )}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({...formData, email: e.target.value});
                          if (errors.email) setErrors({...errors, email: ""});
                        }}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-500 font-bold ml-1 uppercase tracking-wider">{errors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-gray-700 ml-1">Phone / WhatsApp (Preferred)</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 8123456780"
                        className="w-full px-4 py-3 rounded-xl bg-black/5 border-none focus:ring-2 focus:ring-[#D4E845] transition-all text-sm font-inter"
                        value={formData.phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9+ ]/g, "");
                          setFormData({...formData, phone: value});
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Role & Goals */}
                <div className="space-y-6">
                  <h3 className="text-[11px] font-bold font-mono text-gray-400 uppercase tracking-widest border-b border-black/5 pb-2">Your Profile</h3>
                  
                  <div className="space-y-4">
                    <label className="text-[14px] font-bold text-gray-800 ml-1">What is your primary role?</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {roles.map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => setFormData({...formData, role})}
                          className={`px-3 py-2.5 rounded-xl text-[12px] font-bold transition-all border ${
                            formData.role === role 
                            ? "bg-black text-[#D4E845] border-black" 
                            : "bg-white border-black/10 text-gray-600 hover:border-black/30"
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[14px] font-bold text-gray-800 ml-1">What do you want to build?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {goals.map((goal) => (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => setFormData({...formData, goal})}
                          className={`px-4 py-3 rounded-xl text-[12px] font-bold text-left transition-all border ${
                            formData.goal === goal 
                            ? "bg-black text-[#D4E845] border-black" 
                            : "bg-white border-black/10 text-gray-600 hover:border-black/30"
                          }`}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 3: Motivation */}
                <div className="space-y-6">
                  <h3 className="text-[11px] font-bold font-mono text-gray-400 uppercase tracking-widest border-b border-black/5 pb-2">Why apply</h3>
                  
                  <div className="space-y-4">
                    <label className="text-[14px] font-bold text-gray-800 ml-1">Why are you applying right now?</label>
                    <div className="space-y-2">
                      {reasons.map((reason) => (
                        <button
                          key={reason}
                          type="button"
                          onClick={() => setFormData({...formData, reason})}
                          className={`w-full px-4 py-3 rounded-xl text-[12px] font-bold text-left transition-all border ${
                            formData.reason === reason 
                            ? "bg-black text-[#D4E845] border-black" 
                            : "bg-white border-black/10 text-gray-600 hover:border-black/30"
                          }`}
                        >
                          {reason}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 pb-2">
                  <StardustButton
                    type="submit"
                    disabled={!formData.fullName || !formData.email || !formData.phone || !formData.role || !formData.goal || !formData.reason || isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </StardustButton>
                  <p className="text-[9px] text-center text-gray-400 mt-3 uppercase tracking-widest font-bold">
                    100% Secure • No Payment Required Yet
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Video Player Component
const VideoPlayer = ({ videoId }: { videoId: string }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="relative aspect-video rounded-3xl overflow-hidden bg-black/5 border border-black/5 group cursor-pointer mt-6">
      {!isPlaying ? (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          onClick={() => setIsPlaying(true)}
        >
          <img 
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video Thumbnail"
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
          <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-xl transition-transform duration-300 group-hover:scale-110">
            <Play className="w-5 h-5 text-black fill-current translate-x-0.5" />
          </div>
        </div>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full border-none"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};
import profileImage from "@assets/generated_images/professional_portrait_of_a_young_woman_with_dark_hair.png";

// Inline Icon Pill Component
const IconPill = ({ 
  icon: Icon, 
  color = "bg-gray-100", 
  iconColor = "text-black", 
  className 
}: { 
  icon: any, 
  color?: string, 
  iconColor?: string,
  className?: string 
}) => (
  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${color} mx-1 align-text-bottom ${className} translate-y-[1px]`}>
    <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
  </span>
);

// Circled Text Component
const CircledText = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block border-[1.5px] border-blue-600/40 rounded-full px-2.5 py-0 mx-0.5 text-inherit leading-normal">
    {children}
  </span>
);

// Flag Component
const Flag = ({ country }: { country: string }) => {
  const flags: Record<string, string> = {
    georgia: "🇬🇪",
    canada: "🇨🇦",
    us: "🇺🇸"
  };
  return <span className="mx-1 align-middle">{flags[country] || "🏳️"}</span>;
};

// Case Item Component
const CaseItem = ({ 
  icon: Icon, 
  color, 
  title, 
  date, 
  tag, 
  isLocked = false 
}: { 
  icon: any, 
  color: string, 
  title: string, 
  date: string, 
  tag: string, 
  isLocked?: boolean 
}) => (
  <div className="flex gap-5 mb-10 group cursor-pointer">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${color} text-white transition-all group-hover:scale-105 shadow-sm`}>
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex flex-col pt-1">
      <h3 className="text-[17px] font-semibold leading-tight text-gray-900 mb-1.5 group-hover:text-gray-600 transition-colors">
        {title}
      </h3>
      <div className="flex items-center text-[11px] text-gray-400 font-mono gap-3 tracking-wider">
        <span className="font-bold">{date}</span>
        <span className="w-1 h-1 rounded-full bg-gray-200"></span>
        <div className="flex items-center gap-2">
          {isLocked && <Lock className="w-3.5 h-3.5 opacity-60" />}
          <span className="uppercase font-bold text-gray-500">{tag}</span>
        </div>
      </div>
    </div>
  </div>
);

// Tool Icon Component
const ToolIcon = ({ src, alt, className }: { src: string, alt: string, className?: string }) => (
  <span className={`inline-flex items-center justify-center w-6 h-6 mx-1 align-text-bottom translate-y-[1px] ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-contain" />
  </span>
);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F2] text-[#1a1a1a] font-inter selection:bg-[#D4E845] selection:text-black antialiased pb-12 md:pb-16">
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={() => setHasSubmitted(true)} />
      {/* Navbar */}
      <header className="absolute md:fixed top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-50 pointer-events-none">
        <div className="flex items-center pointer-events-auto h-[18px] md:h-[22px]">
          <span className="text-[16px] md:text-[18px] font-medium tracking-tight text-gray-900 font-inter leading-none">
            LaunchAnyway.
          </span>
        </div>
        <div className="flex items-center pointer-events-auto h-[18px] md:h-[22px]">
          <span className="text-[11px] font-bold font-mono text-gray-400 uppercase tracking-[0.2em] leading-none">
            Course by Designfolio
          </span>
        </div>
      </header>
      <main className="max-w-[1200px] mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-[65%] space-y-10">
            
            {/* Course Header Chip */}
            <ScrollReveal delay={0.1} duration={0.6}>
              <div className="flex items-center">
                <div className="inline-flex items-center bg-[#E5E4DE] rounded-full p-1 pr-3 gap-2.5 border border-black/5 group cursor-default">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white fill-current" />
                  </div>
                  <span className="text-[10px] font-bold font-mono text-gray-900 tracking-[0.2em] uppercase">3-DAYS LIVE COURSE</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Title / Hero Intro */}
            <div className="space-y-6">
              <ScrollReveal delay={0.2} duration={0.9}>
                <h1 className="text-[44px] md:text-[68px] leading-[1.0] font-medium text-gray-900 tracking-tight font-instrument">
                  You have an idea? <br />
                  Are you going to ship it?
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.4} duration={0.8}>
                <div className="text-[18px] md:text-[21px] leading-[1.5] text-[#4a4a4a] font-normal max-w-xl font-inter tracking-tight">
                  <p>
                    LaunchAnyway is a live, hands-on course for accidental founders to learn vibe coding
                    <IconPill icon={Zap} color="bg-[#D4E845]" iconColor="text-black" />
                    and ship real products.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Sections Wrapper */}
            <div className="space-y-12 pt-6">
              {/* Why This Course */}
              <ScrollReveal>
                <div className="space-y-4 max-w-xl">
                  <h2 className="text-[13px] font-bold font-mono text-gray-500 uppercase tracking-[0.3em]">The Vibe</h2>
                  <VideoPlayer videoId="9BtxpKQHga4" />
                  <p className="text-[16px] md:text-[17px] leading-[1.6] text-[#5a5a5a] font-inter">
                    Stop watching tutorials and start shipping. We use modern tools like
                    Replit <ToolIcon src="/logos/replit.png" alt="Replit" />,
                    Lovable <ToolIcon src="/logos/lovable.png" alt="Lovable" />,
                    LLMs,
                    Supabase <ToolIcon src="/logos/supabase.png" alt="Supabase" />,
                    Vercel <ToolIcon src="/logos/vercel.png" alt="Vercel" />,
                    and Github
                    to turn founders into builders. No CS degree required
                    <IconPill icon={Asterisk} color="bg-[#8B5CF6]" iconColor="text-white" />.
                  </p>
                </div>
              </ScrollReveal>

              {/* Curriculum / Journey */}
              <ScrollReveal>
                <div id="journey" className="space-y-8 max-w-xl scroll-mt-32">
                  <h2 className="text-[13px] font-bold font-mono text-gray-500 uppercase tracking-[0.3em]">The Journey — 3-Day Live Workshop</h2>

                  <div className="space-y-10 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-black/5">
                  {/* Day 1 */}
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-0 w-[35px] h-[35px] rounded-full bg-[#D4E845] flex items-center justify-center text-black font-mono font-bold text-[10px] z-10">D1</div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-[17px] font-bold text-gray-900 tracking-tight uppercase">Build Your First AI Web App</h3>
                        <p className="text-[11px] text-gray-400 font-mono uppercase tracking-widest font-bold mt-1">Day 1</p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black font-mono text-black bg-[#D4E845] px-2 py-1 rounded flex items-center justify-center shrink-0">01</span>
                            <div className="w-[1.5px] h-full bg-black/5 mt-2"></div>
                          </div>
                          <div className="space-y-1 pb-4">
                            <p className="text-[15px] text-gray-900 font-bold leading-none">What happens on this day:</p>
                          </div>
                        </div>
                        <div className="space-y-3 pl-[46px]">
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#D4E845] mt-1.5 shrink-0">•</span>
                            What vibe coding means (in very simple terms)
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#D4E845] mt-1.5 shrink-0">•</span>
                            Using Lovable to turn an idea into a working screen
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#D4E845] mt-1.5 shrink-0">•</span>
                            Connecting Gemini AI to your app
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#D4E845] mt-1.5 shrink-0">•</span>
                            Sending user input to AI and showing results on screen
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#D4E845] mt-1.5 shrink-0">•</span>
                            Running and testing your web app live
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] font-bold text-gray-900 pt-2 italic">
                            By the end of Day 1: You’ll have a working AI-powered web app.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Day 2 */}
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-0 w-[35px] h-[35px] rounded-full bg-[#E895C9] flex items-center justify-center text-black font-mono font-bold text-[10px] z-10">D2</div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-[17px] font-bold text-gray-900 tracking-tight uppercase">Build a Mobile App (iOS & Android)</h3>
                        <p className="text-[11px] text-gray-400 font-mono uppercase tracking-widest font-bold mt-1">Day 2</p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black font-mono text-black bg-[#E895C9] px-2 py-1 rounded flex items-center justify-center shrink-0">02</span>
                            <div className="w-[1.5px] h-full bg-black/5 mt-2"></div>
                          </div>
                          <div className="space-y-1 pb-4">
                            <p className="text-[15px] text-gray-900 font-bold leading-none">What happens on this day:</p>
                          </div>
                        </div>
                        <div className="space-y-3 pl-[46px]">
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#E895C9] mt-1.5 shrink-0">•</span>
                            How mobile apps work (screens, buttons, flows — explained simply)
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#E895C9] mt-1.5 shrink-0">•</span>
                            Using Replit to build mobile apps
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#E895C9] mt-1.5 shrink-0">•</span>
                            Creating multiple screens and navigation
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#E895C9] mt-1.5 shrink-0">•</span>
                            Handling user actions like taps and inputs
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#E895C9] mt-1.5 shrink-0">•</span>
                            Fixing errors with AI when things break
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] font-bold text-gray-900 pt-2 italic">
                            By the end of Day 2: You’ll have a mobile app running on iOS and Android.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Day 3 */}
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-0 w-[35px] h-[35px] rounded-full bg-[#A5B4FC] flex items-center justify-center text-black font-mono font-bold text-[10px] z-10">D3</div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-[17px] font-bold text-gray-900 tracking-tight uppercase">Add Backend & Make It Real</h3>
                        <p className="text-[11px] text-gray-400 font-mono uppercase tracking-widest font-bold mt-1">Day 3</p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black font-mono text-black bg-[#A5B4FC] px-2 py-1 rounded flex items-center justify-center shrink-0">03</span>
                          </div>
                          <div className="space-y-1 pb-4">
                            <p className="text-[15px] text-gray-900 font-bold leading-none">What happens on this day:</p>
                          </div>
                        </div>
                        <div className="space-y-3 pl-[46px]">
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#A5B4FC] mt-1.5 shrink-0">•</span>
                            What backend actually means (no jargon)
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#A5B4FC] mt-1.5 shrink-0">•</span>
                            Using Supabase to store real data
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#A5B4FC] mt-1.5 shrink-0">•</span>
                            Login, signup, and saving user information
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#A5B4FC] mt-1.5 shrink-0">•</span>
                            Connecting your web app and mobile app to the backend
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] leading-relaxed flex items-start gap-2">
                            <span className="text-[#A5B4FC] mt-1.5 shrink-0">•</span>
                            Debugging and understanding what to fix before shipping
                          </p>
                          <p className="text-[14px] text-[#5a5a5a] font-bold text-gray-900 pt-2 italic">
                            By the end of Day 3: You’ll have a real, usable product — not a demo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </ScrollReveal>

              {/* Testimonials Section */}
              <ScrollReveal>
                <div className="space-y-6 max-w-xl pt-12 border-t border-black/5">
                  <h2 className="text-[13px] font-bold font-mono text-gray-500 uppercase tracking-[0.3em]">Testimonials</h2>

                  <div className="relative overflow-hidden">
                    {/* Subtle fade edges */}
                    <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#FAF9F2] to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#FAF9F2] to-transparent z-20 pointer-events-none" />

                    <StaggerTestimonials />
                  </div>
                </div>
              </ScrollReveal>

              {/* Deliverables Section */}
              <ScrollReveal>
                <div className="space-y-5 max-w-xl pt-12 border-t border-black/5">
                  <h2 className="text-[13px] font-bold font-mono text-gray-500 uppercase tracking-[0.3em]">The Deliverables</h2>
                  <p className="text-[18px] md:text-[20px] font-medium text-gray-900 font-inter leading-tight tracking-tight">
                    At the end, what will you have built?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="bg-[#eeede8] p-5 rounded-2xl border border-black/[0.03]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center mb-3">
                        <Globe className="w-4 h-4 text-gray-600" />
                      </div>
                      <h3 className="text-[15px] font-bold text-gray-900 mb-2 underline underline-offset-4 decoration-[#D4E845] decoration-2">1. An AI Web App</h3>
                      <ul className="space-y-1.5">
                        {["A web app that uses AI (Gemini)", "Takes user input and shows results", "Runs in the browser", "Actually works"].map((item, i) => (
                          <li key={i} className="text-[13px] text-gray-500 leading-tight flex items-start gap-2">
                            <span className="text-[#D4E845] font-bold mt-0.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="bg-[#eeede8] p-5 rounded-2xl border border-black/[0.03]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center mb-3">
                        <Zap className="w-4 h-4 text-gray-600" />
                      </div>
                      <h3 className="text-[15px] font-bold text-gray-900 mb-2 underline underline-offset-4 decoration-[#E895C9] decoration-2">2. A Habit-Tracking Mobile App</h3>
                      <ul className="space-y-1.5">
                        {["A mobile app for iOS & Android", "Track daily habits and streaks", "Multiple screens and flows", "Runs like a real app"].map((item, i) => (
                          <li key={i} className="text-[13px] text-gray-500 leading-tight flex items-start gap-2">
                            <span className="text-[#E895C9] font-bold mt-0.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  <p className="text-[14px] text-gray-400 italic font-inter pt-2">
                    Three intense days. Two real-world products. No excuses.
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>

          {/* Right Sidebar Column - Enrollment Card (Fixed/Sticky) */}
          <aside id="enrollment" className="w-full lg:w-[35%] lg:pl-12 lg:sticky lg:top-28 self-start scroll-mt-32">
            <ScrollReveal delay={0.1} duration={0.6}>
              <h2 className="text-[13px] font-bold font-mono text-gray-500 uppercase tracking-[0.3em] mb-10">Enrollment</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div
                className="bg-[#eeede8] border-2 border-black/5 p-6 space-y-8 shadow-sm relative"
                style={{
                  clipPath: `polygon(40px 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, calc(100% - 40px) 100%, 40px 100%, 0 100%, 0 0)`,
                }}
              >
              {/* Folder accent line */}
              <span
                className="absolute block origin-top-right rotate-45 bg-black/5"
                style={{
                  right: -2,
                  top: 38,
                  width: Math.sqrt(3200),
                  height: 2
                }}
              />

              <div className="space-y-1 relative z-10">
                <p className="text-[11px] font-bold font-mono text-blue-600 uppercase tracking-widest">Next Intake</p>
                <p className="text-[20px] font-medium text-gray-900 font-inter tracking-tight">January 18th, 2026</p>
              </div>

                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Cost</p>
                    <p className="text-[15px] font-semibold text-gray-800 font-inter">₹4,200</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">What you'll get</p>
                    <p className="text-[15px] font-semibold text-gray-800 font-inter leading-tight">Live workshop + recordings</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Duration</p>
                    <p className="text-[15px] font-semibold text-gray-800 font-inter">3 Days</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Timing</p>
                    <p className="text-[15px] font-semibold text-gray-800 font-inter">8:00PM IST</p>
                  </div>
                </div>

              <div className="space-y-3 relative z-10">
                {!hasSubmitted ? (
                  <>
                    <StardustButton onClick={() => setIsModalOpen(true)}>
                      Secure Your Spot
                    </StardustButton>
                    <p className="text-[11px] text-center text-blue-600 font-bold font-mono uppercase tracking-wider">
                      Price increases to ₹5,999 next batch
                    </p>
                  </>
                ) : (
                  <div className="bg-white/50 backdrop-blur-sm border border-black/[0.06] p-4 rounded-xl text-center">
                    <p className="text-[14px] font-semibold tracking-tight text-gray-900 mb-1">You're In</p>
                    <p className="text-[11px] font-medium text-gray-500">
                      We'll Hit You Up Within 24hrs
                    </p>
                  </div>
                )}
              </div>
              
              <p className="text-[10px] text-center text-gray-400 font-medium font-inter relative z-10">
                Limited cohort size for personalized feedback.
              </p>
              </div>
            </ScrollReveal>
          </aside>

        </div>
      </main>
      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end text-[11px] font-bold font-mono text-gray-400 pointer-events-none bg-gradient-to-t from-[#FAF9F2] via-[#FAF9F2] via-60% to-transparent h-24 z-40">
        <div className="pointer-events-auto">
          <button 
            onClick={() => document.getElementById('enrollment')?.scrollIntoView({ behavior: 'smooth' })}
            className="tracking-[0.2em] uppercase cursor-pointer hover:text-black transition-colors"
          >
            Register Now
          </button>
        </div>
        
        <div className="pointer-events-auto">
          <button 
            onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer hover:text-black transition-colors tracking-[0.2em] group uppercase"
          >
            <CircleDot className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" /> Curriculum
          </button>
        </div>
      </footer>
    </div>
  );
}
