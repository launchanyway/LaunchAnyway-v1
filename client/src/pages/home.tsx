import React, { useState } from "react";
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

// Enrollment Modal Component
const EnrollmentModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 300
              }
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-[#FAF9F2] rounded-2xl overflow-hidden shadow-2xl border-none pointer-events-auto"
          >
            {/* Header / Banner */}
            <div className="bg-[#D4E845] p-8 pb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 z-20">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors pointer-events-auto cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>
              <div className="relative z-10 space-y-1">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight font-instrument text-black">
                  Apply for LaunchAnyway
                </h2>
              </div>
            </div>

            <div className="p-8 space-y-8 -mt-6 relative z-10 bg-[#FAF9F2] rounded-t-2xl">
              <div className="space-y-6">
                <p className="text-[16px] text-gray-600 leading-relaxed font-inter">
                  We review each application to make sure it’s the right fit for everyone involved.
                </p>

                <div className="relative space-y-0">
                  {/* Timeline line */}
                  <div className="absolute left-[11px] top-3 bottom-3 w-[1.5px] bg-black/5" />

                  {/* Step 1 */}
                  <div className="relative flex gap-6 pb-8">
                    <div className="relative z-10 w-[24px] h-[24px] rounded-full bg-[#D4E845] border-4 border-[#FAF9F2] flex-shrink-0" />
                    <div className="space-y-1">
                      <h3 className="font-bold text-[11px] uppercase tracking-[0.15em] text-gray-400 font-mono leading-none pt-1">Step 01</h3>
                      <p className="text-gray-900 leading-tight text-[17px] font-medium">
                        Fill out a short application.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex gap-6">
                    <div className="relative z-10 w-[24px] h-[24px] rounded-full bg-blue-600 border-4 border-[#FAF9F2] flex-shrink-0" />
                    <div className="space-y-1">
                      <h3 className="font-bold text-[11px] uppercase tracking-[0.15em] text-gray-400 font-mono leading-none pt-1">Step 02</h3>
                      <p className="text-gray-900 leading-tight text-[17px] font-medium">
                        We'll get in touch within 4 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <StardustButton onClick={() => {}}>
                  Apply Now
                </StardustButton>
              </div>
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
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
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

  return (
    <div className="min-h-screen bg-[#FAF9F2] text-[#1a1a1a] font-inter selection:bg-[#D4E845] selection:text-black antialiased pb-12 md:pb-16">
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
            <div className="flex items-center">
              <div className="inline-flex items-center bg-[#E5E4DE] rounded-full p-1 pr-3 gap-2.5 border border-black/5 group cursor-default">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white fill-current" />
                </div>
                <span className="text-[10px] font-bold font-mono text-gray-900 tracking-[0.2em] uppercase">LIVE COURSE</span>
              </div>
            </div>

            {/* Title / Hero Intro */}
            <div className="space-y-6">
              <h1 className="text-[44px] md:text-[68px] leading-[1.0] font-medium text-gray-900 tracking-tight font-instrument">
                You have an idea? <br />
                Are you going to ship it?
              </h1>
              <div className="text-[18px] md:text-[21px] leading-[1.5] text-[#4a4a4a] font-normal max-w-xl font-inter tracking-tight">
                <p>
                  LaunchAnyway is a live, hands-on course for accidental founders to learn vibe coding 
                  <IconPill icon={Zap} color="bg-[#D4E845]" iconColor="text-black" /> 
                  and ship real products.
                </p>
              </div>
            </div>

            {/* Sections Wrapper */}
            <div className="space-y-12 pt-6">
              {/* Why This Course */}
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

              {/* Curriculum / Journey */}
              <div id="journey" className="space-y-8 max-w-xl scroll-mt-32">
                <h2 className="text-[13px] font-bold font-mono text-gray-500 uppercase tracking-[0.3em]">The Journey</h2>
                
                <div className="space-y-10 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-black/5">
                  {/* Week 1 */}
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-0 w-[35px] h-[35px] rounded-full bg-[#D4E845] flex items-center justify-center text-black font-mono font-bold text-[10px] z-10">W1</div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-[17px] font-bold text-gray-900 tracking-tight uppercase">Build & Launch Your First SaaS</h3>
                        <p className="text-[11px] text-gray-400 font-mono uppercase tracking-widest font-bold mt-1">Week 1</p>
                      </div>
                      <div className="space-y-8">
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black font-mono text-black bg-[#D4E845] px-2 py-1 rounded flex items-center justify-center shrink-0">01</span>
                            <div className="w-[1.5px] h-full bg-black/5 mt-2"></div>
                          </div>
                          <div className="space-y-1 pb-4">
                            <p className="text-[15px] text-gray-900 font-bold leading-none">Live session</p>
                            <p className="text-[14px] text-[#5a5a5a] leading-relaxed">We build your first AI-powered product together. You'll use Lovable, Gemini, and Supabase to create a real working AI tool — not a demo.</p>
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black font-mono text-black bg-[#D4E845] px-2 py-1 rounded flex items-center justify-center shrink-0">2–7</span>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[15px] text-gray-900 font-bold leading-none">Build & launch</p>
                            <p className="text-[14px] text-[#5a5a5a] leading-relaxed">You'll work on daily assignments to improve what you built. By the end of the week, you'll launch your first real SaaS product with a live URL.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Week 2 */}
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-0 w-[35px] h-[35px] rounded-full bg-[#E895C9] flex items-center justify-center text-black font-mono font-bold text-[10px] z-10">W2</div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-[17px] font-bold text-gray-900 tracking-tight uppercase">Build Your First Mobile App</h3>
                        <p className="text-[11px] text-gray-400 font-mono uppercase tracking-widest font-bold mt-1">Week 2</p>
                      </div>
                      <div className="space-y-8">
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black font-mono text-black bg-[#E895C9] px-2 py-1 rounded flex items-center justify-center shrink-0">08</span>
                            <div className="w-[1.5px] h-full bg-black/5 mt-2"></div>
                          </div>
                          <div className="space-y-1 pb-4">
                            <p className="text-[15px] text-gray-900 font-bold leading-none">Live session</p>
                            <p className="text-[14px] text-[#5a5a5a] leading-relaxed">We build a cross-platform mobile app using Replit. You'll run it on both iOS and Android using Expo.</p>
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black font-mono text-black bg-[#E895C9] px-2 py-1 rounded flex items-center justify-center shrink-0">09</span>
                            <div className="w-[1.5px] h-full bg-black/5 mt-2"></div>
                          </div>
                          <div className="space-y-1 pb-4">
                            <p className="text-[15px] text-gray-900 font-bold leading-none">Backend & debugging</p>
                            <p className="text-[14px] text-[#5a5a5a] leading-relaxed">We connect your mobile app to Supabase. You'll learn how to store data, handle auth, and debug real issues.</p>
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black font-mono text-black bg-[#E895C9] px-2 py-1 rounded flex items-center justify-center shrink-0">10–14</span>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[15px] text-gray-900 font-bold leading-none">Build & refine</p>
                            <p className="text-[14px] text-[#5a5a5a] leading-relaxed">Daily assignments focused on building a complete mobile app. You'll design habit flows, streaks, and nudges — and end with a fully working app.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials Section */}
              <div className="space-y-6 max-w-xl pt-12 border-t border-black/5">
                <h2 className="text-[13px] font-bold font-mono text-gray-500 uppercase tracking-[0.3em]">Testimonials</h2>
                
                <div className="relative overflow-hidden">
                  {/* Subtle fade edges */}
                  <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#FAF9F2] to-transparent z-20 pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#FAF9F2] to-transparent z-20 pointer-events-none" />
                  
                  <StaggerTestimonials />
                </div>
              </div>

              {/* Deliverables Section */}
              <div className="space-y-5 max-w-xl pt-12 border-t border-black/5">
                <h2 className="text-[13px] font-bold font-mono text-gray-500 uppercase tracking-[0.3em]">The Deliverables</h2>
                <p className="text-[18px] md:text-[20px] font-medium text-gray-900 font-inter leading-tight tracking-tight">
                  At the end, what will you have built?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#eeede8] p-5 rounded-2xl border border-black/[0.03]">
                    <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center mb-3">
                      <Globe className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-1">SaaS Web App</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">A fully functional, responsive web application ready for users.</p>
                  </div>
                  <div className="bg-[#eeede8] p-5 rounded-2xl border border-black/[0.03]">
                    <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center mb-3">
                      <Zap className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-1">Mobile Application</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">A native-feel mobile experience optimized for modern devices.</p>
                  </div>
                </div>
                <p className="text-[14px] text-gray-400 italic font-inter pt-2">
                  Two real-world products. Two weeks. No excuses.
                </p>
              </div>

            </div>
          </div>

          {/* Right Sidebar Column - Enrollment Card (Fixed/Sticky) */}
          <aside id="enrollment" className="w-full lg:w-[35%] lg:pl-12 lg:sticky lg:top-28 self-start scroll-mt-32">
            <h2 className="text-[13px] font-bold font-mono text-gray-500 uppercase tracking-[0.3em] mb-10">Enrollment</h2>
            
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
                <p className="text-[20px] font-medium text-gray-900 font-inter tracking-tight">January 20th, 2026</p>
              </div>

              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Availability</p>
                  <p className="text-[15px] font-semibold text-gray-800 font-inter">13 / 20 Seats</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Cost</p>
                  <p className="text-[15px] font-semibold text-gray-800 font-inter">₹6,999</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Duration</p>
                  <p className="text-[15px] font-semibold text-gray-800 font-inter">2 Week Sprint</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Sessions</p>
                  <p className="text-[15px] font-semibold text-gray-800 font-inter">x2 Live</p>
                </div>
              </div>

              <div className="space-y-3 relative z-10">
                <StardustButton onClick={() => setIsModalOpen(true)}>
                  Secure Your Spot
                </StardustButton>
                <p className="text-[11px] text-center text-blue-600 font-bold font-mono uppercase tracking-wider">
                  Price increases to ₹8,999 next month
                </p>
              </div>
              
              <p className="text-[10px] text-center text-gray-400 font-medium font-inter relative z-10">
                Limited cohort size for personalized feedback.
              </p>
            </div>
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end text-[11px] font-bold font-mono text-gray-400 pointer-events-none bg-gradient-to-t from-[#FAF9F2] via-[#FAF9F2] via-60% to-transparent h-24 z-40">
        <div className="pointer-events-auto">
          <button 
            onClick={() => setIsModalOpen(true)}
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
