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
  CircleDot
} from "lucide-react";

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
  <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${color} mx-1 align-text-bottom ${className} translate-y-[1px]`}>
    <Icon className={`w-3 h-3 ${iconColor}`} />
  </span>
);

// Circled Text Component
const CircledText = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block border-[1.5px] border-blue-600/40 rounded-full px-2.5 py-0 mx-0.5 text-inherit leading-normal">
    {children}
  </span>
);

// Tool Icon Component
const ToolIcon = ({ label, bg, text = "text-white" }: { label: string, bg: string, text?: string }) => (
  <span className={`inline-flex items-center justify-center w-5 h-5 rounded-sm mx-1 align-text-bottom ${bg} ${text} text-[10px] font-bold font-mono translate-y-[1px]`}>
    {label}
  </span>
);

// Sidebar Course Card Component
const CourseCard = ({ title, status, date, icon: Icon, color }: { title: string, status: string, date: string, icon: any, color: string }) => (
  <div className="p-5 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
    <div className="flex justify-between items-start mb-4">
      <div className={`w-10 h-10 rounded-2xl ${color} flex items-center justify-center text-white`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-[10px] font-mono font-bold px-2 py-1 rounded-full bg-gray-50 text-gray-400 uppercase tracking-wider">{status}</span>
    </div>
    <h3 className="text-[15px] font-bold text-gray-900 mb-1 leading-tight">{title}</h3>
    <p className="text-[11px] font-mono text-gray-400">{date}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1a1a1a] font-sans selection:bg-[#D4E845] selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#D4E845] flex items-center justify-center">
            <Zap className="w-5 h-5 text-black" />
          </div>
          <span className="text-sm font-bold tracking-tight uppercase">LaunchAnyway</span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-[11px] font-mono text-gray-400 tracking-widest uppercase">
            <a href="#" className="hover:text-black transition-colors">Curriculum</a>
            <a href="#" className="hover:text-black transition-colors">Pricing</a>
            <a href="#" className="hover:text-black transition-colors">FAQ</a>
          </div>
          <button className="px-5 py-2 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors pointer-events-auto">
            Apply Now
          </button>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-24">
            
            {/* Title / Hero Intro */}
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4E845]/20 text-[#85941c] text-[10px] font-bold uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4E845] animate-pulse" />
                Next Cohort: May 2026
              </div>
              <h1 className="text-[48px] md:text-[64px] leading-[1] font-bold text-gray-900 tracking-tighter">
                You have an idea? <br />
                Are you going to <CircledText>ship</CircledText> it?
              </h1>
              <p className="text-[20px] md:text-[22px] leading-[1.5] text-[#4a4a4a] font-light max-w-2xl">
                LaunchAnyway is a live, hands-on course for accidental founders to learn <span className="font-semibold text-black italic">vibe coding</span> and ship real products in weeks, not months.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h2 className="text-[11px] font-mono text-gray-400 uppercase tracking-[0.2em] font-semibold">The Vibe</h2>
                <p className="text-[16px] leading-relaxed text-[#5a5a5a]">
                  Stop watching tutorials and start building. We use modern AI tools like Cursor <ToolIcon label="C" bg="bg-black" /> and Replit <ToolIcon label="R" bg="bg-[#F24E1E]" /> to turn ideas into software.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-[11px] font-mono text-gray-400 uppercase tracking-[0.2em] font-semibold">The Result</h2>
                <p className="text-[16px] leading-relaxed text-[#5a5a5a]">
                  Leave with a live product on your own domain <IconPill icon={Globe} color="bg-[#E895C9]" iconColor="text-black" /> and the confidence to build anything you can imagine.
                </p>
              </div>
            </div>

            {/* Testimonial / Social Proof */}
            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-6">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#D4E845] text-[#D4E845]" />)}
              </div>
              <p className="text-[18px] italic text-gray-700 leading-relaxed">
                "I went from zero coding knowledge to shipping my first SaaS in 4 weeks. Vibe coding is a superpower for non-technical founders."
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Alex Rivera</p>
                  <p className="text-[11px] font-mono text-gray-400 uppercase">Founder, Synthly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-32 space-y-6">
              <div className="p-8 rounded-[40px] bg-black text-white space-y-8 shadow-2xl shadow-black/20">
                <div className="space-y-2">
                  <h2 className="text-[24px] font-bold leading-tight italic">Ship your vision. <br />Join the cohort.</h2>
                  <p className="text-gray-400 text-sm">Limited to 50 builders per cohort to ensure hands-on mentorship.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm py-3 border-b border-white/10">
                    <span className="text-gray-400">Duration</span>
                    <span className="font-mono uppercase">4 Weeks</span>
                  </div>
                  <div className="flex justify-between items-center text-sm py-3 border-b border-white/10">
                    <span className="text-gray-400">Next Cohort</span>
                    <span className="font-mono uppercase italic">May 12, 2026</span>
                  </div>
                  <div className="flex justify-between items-center text-sm py-3">
                    <span className="text-gray-400">Format</span>
                    <span className="font-mono uppercase">Live Workshops</span>
                  </div>
                </div>

                <div className="pt-4 space-y-4">
                  <button className="w-full py-5 rounded-2xl bg-[#D4E845] text-black text-[16px] font-black hover:scale-[1.02] transition-all uppercase tracking-widest">
                    Apply for $999
                  </button>
                  <p className="text-center text-[10px] text-gray-500 font-mono uppercase tracking-widest">Only 12 seats remaining</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <CourseCard 
                  title="Cohort #01"
                  status="Waitlist"
                  date="May 12 - June 10"
                  icon={Zap}
                  color="bg-[#D4E845] !text-black"
                />
                <CourseCard 
                  title="Cohort #02"
                  status="Enrolling"
                  date="Aug 05 - Sep 02"
                  icon={Asterisk}
                  color="bg-[#8B5CF6]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modern Footer */}
      <footer className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#D4E845] flex items-center justify-center">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <span className="text-sm font-bold tracking-tight uppercase">LaunchAnyway</span>
            </div>
            <p className="text-gray-500 max-w-sm text-sm">
              Helping accidental founders, designers, and thinkers ship their visions without the friction of traditional engineering.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-[11px] font-mono text-gray-400 uppercase tracking-widest font-bold">Social</h3>
            <div className="flex flex-col gap-3 text-sm font-medium">
              <a href="#" className="hover:text-[#D4E845] transition-colors">Twitter / X</a>
              <a href="#" className="hover:text-[#D4E845] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#D4E845] transition-colors">YouTube</a>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-[11px] font-mono text-gray-400 uppercase tracking-widest font-bold">Legal</h3>
            <div className="flex flex-col gap-3 text-sm font-medium">
              <a href="#" className="hover:text-[#D4E845] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D4E845] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 flex justify-between items-center text-[10px] font-mono text-gray-400 uppercase tracking-widest">
          <span>© 2026 LaunchAnyway</span>
          <span>Crafted by tmpl</span>
        </div>
      </footer>
    </div>
  );
}
