import React from "react";
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
  CircleDot
} from "lucide-react";

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
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0`}
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
  return (
    <div className="min-h-screen bg-[#FAF9F2] text-[#1a1a1a] font-inter selection:bg-[#D4E845] selection:text-black antialiased">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-start z-50 pointer-events-none">
        <div className="flex items-center pointer-events-auto">
          <span className="text-[16px] md:text-[18px] font-medium tracking-tight text-gray-900 font-inter">
            LaunchAnyway.
          </span>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-64">
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
                        <h3 className="text-[17px] font-bold text-gray-900 tracking-tight">Foundations & Setup</h3>
                        <p className="text-[11px] text-gray-400 font-mono uppercase tracking-widest font-bold mt-1">Days 1 — 3</p>
                      </div>
                      <div className="space-y-5">
                        <div className="flex gap-4">
                          <span className="text-[10px] font-black font-mono text-black bg-[#D4E845] w-6 h-6 rounded flex items-center justify-center shrink-0">01</span>
                          <p className="text-[15px] text-[#5a5a5a] leading-relaxed"><span className="text-gray-900 font-semibold">Vibe Coding 101:</span> Prompt engineering and content architecture.</p>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-[10px] font-black font-mono text-black bg-[#D4E845] w-6 h-6 rounded flex items-center justify-center shrink-0">02</span>
                          <p className="text-[15px] text-[#5a5a5a] leading-relaxed"><span className="text-gray-900 font-semibold">Interface Design:</span> Mastering Cyber Island aesthetics.</p>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-[10px] font-black font-mono text-black bg-[#D4E845] w-6 h-6 rounded flex items-center justify-center shrink-0">03</span>
                          <p className="text-[15px] text-[#5a5a5a] leading-relaxed"><span className="text-gray-900 font-semibold">Database Architecture:</span> Connecting Supabase securely.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Week 2 */}
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-0 w-[35px] h-[35px] rounded-full bg-[#E895C9] flex items-center justify-center text-black font-mono font-bold text-[10px] z-10">W2</div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-[17px] font-bold text-gray-900 tracking-tight">Shipping & Scaling</h3>
                        <p className="text-[11px] text-gray-400 font-mono uppercase tracking-widest font-bold mt-1">Days 4 — 7</p>
                      </div>
                      <div className="space-y-5">
                        <div className="flex gap-4">
                          <span className="text-[10px] font-black font-mono text-black bg-[#E895C9] w-6 h-6 rounded flex items-center justify-center shrink-0">04</span>
                          <p className="text-[15px] text-[#5a5a5a] leading-relaxed"><span className="text-gray-900 font-semibold">Logic & Auth:</span> Building functional SaaS workflows.</p>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-[10px] font-black font-mono text-black bg-[#E895C9] w-6 h-6 rounded flex items-center justify-center shrink-0">05</span>
                          <p className="text-[15px] text-[#5a5a5a] leading-relaxed"><span className="text-gray-900 font-semibold">Mobile Optimization:</span> Native-feel PWA experiences.</p>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-[10px] font-black font-mono text-black bg-[#E895C9] w-6 h-6 rounded flex items-center justify-center shrink-0">06</span>
                          <p className="text-[15px] text-[#5a5a5a] leading-relaxed"><span className="text-gray-900 font-semibold">Deployment:</span> Going live on your own domain.</p>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-[10px] font-black font-mono text-black bg-[#E895C9] w-6 h-6 rounded flex items-center justify-center shrink-0">07</span>
                          <p className="text-[15px] text-[#5a5a5a] leading-relaxed"><span className="text-gray-900 font-semibold">Launch Day:</span> Psychology of shipping and final reveals.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deliverables Section */}
              <div className="space-y-5 max-w-xl pt-4 border-t border-black/5">
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
            
            <div className="bg-[#eeede8] border border-black/5 rounded-3xl p-6 space-y-8 shadow-sm">
              <div className="space-y-1">
                <p className="text-[11px] font-bold font-mono text-blue-600 uppercase tracking-widest">Next Intake</p>
                <p className="text-[20px] font-medium text-gray-900 font-inter tracking-tight">January 20th, 2026</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Availability</p>
                  <p className="text-[15px] font-semibold text-gray-800 font-inter">9 / 20 Seats</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Duration</p>
                  <p className="text-[15px] font-semibold text-gray-800 font-inter">2 Week Sprint</p>
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-black/5">
                <p className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Live Sessions</p>
                <p className="text-[15px] font-semibold text-gray-800 font-inter">8:00 PM IST (x3)</p>
              </div>

              <button className="w-full py-4 rounded-2xl bg-black text-white text-[14px] font-bold hover:bg-gray-800 transition-all uppercase tracking-[0.15em] shadow-xl shadow-black/5 hover:scale-[1.02] active:scale-[0.98]">
                Secure Your Spot
              </button>
              
              <p className="text-[10px] text-center text-gray-400 font-medium font-inter">
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
