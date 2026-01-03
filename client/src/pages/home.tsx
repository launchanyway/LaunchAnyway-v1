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
  <div className="flex gap-4 mb-8 group cursor-pointer">
    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${color} text-white transition-transform group-hover:scale-105 shadow-sm`}>
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex flex-col pt-0.5">
      <h3 className="text-[15px] font-semibold leading-snug text-gray-800 mb-1 group-hover:text-gray-500 transition-colors">
        {title}
      </h3>
      <div className="flex items-center text-[11px] text-gray-400 font-mono gap-2 tracking-tight">
        <span>{date}</span>
        <span className="w-0.5 h-0.5 rounded-full bg-gray-300"></span>
        <div className="flex items-center gap-1.5">
          {isLocked && <Lock className="w-3 h-3" />}
          <span className="uppercase">{tag}</span>
        </div>
      </div>
    </div>
  </div>
);

// Tool Icon Component
const ToolIcon = ({ label, bg, text = "text-white" }: { label: string, bg: string, text?: string }) => (
  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-sm mx-1 align-text-bottom ${bg} ${text} text-[11px] font-bold font-mono translate-y-[1px]`}>
    {label}
  </span>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1a1a1a] font-sans selection:bg-[#D4E845] selection:text-black">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 p-5 md:p-6 flex justify-between items-start z-50 pointer-events-none mix-blend-multiply">
        <div className="flex gap-4 pointer-events-auto">
          <button className="text-gray-400 hover:text-black transition-colors"><Box className="w-4 h-4" strokeWidth={1.5} /></button>
          <button className="text-gray-400 hover:text-black transition-colors"><Twitter className="w-4 h-4" strokeWidth={1.5} /></button>
          <button className="text-gray-400 hover:text-black transition-colors"><Instagram className="w-4 h-4" strokeWidth={1.5} /></button>
        </div>
        
        <div className="flex gap-6 text-[10px] font-mono text-gray-400 pointer-events-auto tracking-tight">
          <a href="#" className="flex items-center gap-1.5 hover:text-black transition-colors">
            <Download className="w-3 h-3" /> CV
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-black transition-colors">
            <Mail className="w-3 h-3" /> HELLO@TMPL.DIGITAL
          </a>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Content Column */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Course Header */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#D4E845] flex items-center justify-center shadow-inner">
                <IconPill icon={Zap} color="bg-transparent" iconColor="text-black" className="w-8 h-8 !translate-y-0" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[17px] font-bold text-gray-900 leading-tight tracking-tight">LaunchAnyway</h1>
                <span className="text-[12px] font-mono text-gray-400 tracking-widest uppercase font-semibold">LIVE COHORT</span>
              </div>
            </div>

            {/* Title / Hero Intro */}
            <div className="space-y-8">
              <h2 className="text-[32px] md:text-[42px] leading-[1.1] font-bold text-gray-900 max-w-2xl tracking-tight">
                You have an idea? <br />
                Are you going to <CircledText>ship</CircledText> it?
              </h2>
              <div className="text-[18px] md:text-[20px] leading-[1.6] text-[#4a4a4a] font-normal max-w-2xl">
                <p>
                  LaunchAnyway is a live, hands-on course for accidental founders to learn vibe coding 
                  <IconPill icon={Zap} color="bg-[#D4E845]" iconColor="text-black" /> 
                  and ship real products. We help you cut through the 
                  <CircledText>noise</CircledText> of technical jargon and focus on what matters: launching your vision 
                  <IconPill icon={Star} color="bg-[#3FD9D9]" iconColor="text-black" />.
                </p>
              </div>
            </div>

            {/* Why This Course */}
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-[11px] font-mono text-gray-400 uppercase tracking-[0.2em] font-semibold">The Vibe</h2>
              <p className="text-[16px] leading-[1.6] text-[#5a5a5a]">
                Stop watching tutorials and start shipping. We use modern tools like Cursor 
                <ToolIcon label="C" bg="bg-black" />, Replit 
                <ToolIcon label="R" bg="bg-[#F24E1E]" />, and LLMs 
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#10A37F] mx-1 align-text-bottom translate-y-[1px]">
                  <span className="w-3 h-3 border-[1.5px] border-white rounded-full"></span>
                </span>
                to turn founders into builders. No CS degree required 
                <IconPill icon={Asterisk} color="bg-[#8B5CF6]" iconColor="text-white" />.
              </p>
            </div>

            {/* Curriculum / Journey */}
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-[11px] font-mono text-gray-400 uppercase tracking-[0.2em] font-semibold">The Journey</h2>
              <p className="text-[16px] leading-[1.6] text-[#5a5a5a]">
                From your first prompt to a live domain 
                <IconPill icon={Globe} color="bg-[#E895C9]" iconColor="text-black" />. 
                We cover content architecture, interface design at Cyper Island 
                <IconPill icon={Flower2} color="bg-[#E895C9]" iconColor="text-black" />
                , and the psychology of shipping. Join a group of 3M+ builders 
                <IconPill icon={Star} color="bg-[#D4E845]" iconColor="text-black" /> 
                who stopped making excuses.
              </p>
            </div>

            {/* Info Section */}
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-[11px] font-mono text-gray-400 uppercase tracking-[0.2em] font-semibold">Info</h2>
              <p className="text-[16px] leading-[1.6] text-[#5a5a5a]">
                Fluent in English, I work as an individual entrepreneur with a Georgian residence permit. I use tools like Notion 
                <ToolIcon label="N" bg="bg-black" />, Framer 
                <ToolIcon label="F" bg="bg-black" />, Figma 
                <ToolIcon label="F" bg="bg-[#F24E1E]" />, SEO platforms, and ChatGPT 
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#10A37F] mx-1 align-text-bottom translate-y-[1px]">
                  <span className="w-3 h-3 border-[1.5px] border-white rounded-full"></span>
                </span>
                to build structured content systems and lead editorial teams.
              </p>
            </div>

          </div>

          {/* Right Sidebar Column - Cohorts */}
          <div className="lg:col-span-4 lg:pl-12">
            <div className="sticky top-32">
              <h2 className="text-[11px] font-mono text-gray-400 uppercase tracking-widest mb-10">Cohorts</h2>
              
              <div className="space-y-2">
                <CaseItem 
                  icon={Zap}
                  color="bg-[#1a1a1a]"
                  title="Cohort #01: The Pioneers"
                  date="Starts 5/23/25"
                  tag="WAITLIST"
                  isLocked={true}
                />
                
                <CaseItem 
                  icon={Flower2}
                  color="bg-[#F472B6]"
                  title="Cohort #02: Building in Public"
                  date="Planned 7/22/25"
                  tag="SOON"
                  isLocked={true}
                />
                
                <CaseItem 
                  icon={Asterisk}
                  color="bg-[#8B5CF6]"
                  title="Vibe Coding Workshop"
                  date="Online"
                  tag="LIVE"
                  isLocked={false}
                />
              </div>

              <div className="mt-8">
                <button className="w-full py-4 rounded-2xl bg-black text-white text-[14px] font-bold hover:bg-gray-800 transition-all uppercase tracking-widest shadow-lg shadow-black/10">
                  Secure Your Spot
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end text-[10px] font-mono text-gray-400 pointer-events-none bg-gradient-to-t from-[#FAFAF9] via-[#FAFAF9] via-60% to-transparent h-32 z-40">
        <div className="pointer-events-auto tracking-widest uppercase">
          © LAUNCHANYWAY 2026
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex items-center gap-2 pointer-events-auto cursor-pointer hover:text-black transition-colors tracking-widest group">
          <CircleDot className="w-3.5 h-3.5 text-gray-400 group-hover:text-black transition-colors" /> CURRICULUM
        </div>
        
        <div className="pointer-events-auto flex items-center gap-2 tracking-widest uppercase">
          MADE BY <span className="bg-[#e5e5e0] text-gray-500 px-1.5 py-0.5 rounded text-[9px] font-bold">tmpl</span>
        </div>
      </footer>
    </div>
  );
}
