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
const ToolIcon = ({ label, bg, text = "text-white" }: { label: string, bg: string, text?: string }) => (
  <span className={`inline-flex items-center justify-center px-1.5 min-w-[24px] h-6 rounded-md mx-1 align-text-bottom ${bg} ${text} text-[11px] font-bold font-mono translate-y-[1px] shadow-sm`}>
    {label}
  </span>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F2] text-[#1a1a1a] font-inter selection:bg-[#D4E845] selection:text-black antialiased">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-start z-50 pointer-events-none">
        <div className="flex items-center pointer-events-auto">
          <span className="text-[20px] md:text-[24px] font-bold tracking-tighter text-gray-900 font-inter">
            LaunchAnyway.
          </span>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 md:px-16 pt-36 md:pt-48 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          
          {/* Left Content Column */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* Course Header Chip */}
            <div className="flex items-center">
              <div className="inline-flex items-center bg-[#E5E4DE] rounded-full p-1 pr-4 gap-3 shadow-sm border border-black/5 group cursor-default">
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shadow-sm">
                  <Zap className="w-3.5 h-3.5 text-white fill-current" />
                </div>
                <span className="text-[11px] font-bold font-mono text-gray-900 tracking-[0.2em] uppercase">LIVE COURSE</span>
              </div>
            </div>

            {/* Title / Hero Intro */}
            <div className="space-y-8">
              <h1 className="text-[52px] md:text-[84px] leading-[0.95] font-medium text-gray-900 max-w-3xl tracking-tight font-instrument">
                You have an idea? <br />
                Are you going to ship it?
              </h1>
              <div className="text-[20px] md:text-[24px] leading-[1.5] text-[#4a4a4a] font-normal max-w-2xl font-inter tracking-tight">
                <p>
                  LaunchAnyway is a live, hands-on course for accidental founders to learn vibe coding 
                  <IconPill icon={Zap} color="bg-[#D4E845]" iconColor="text-black" /> 
                  and ship real products.
                </p>
              </div>
            </div>

            {/* Sections Wrapper */}
            <div className="space-y-16 pt-8">
              {/* Why This Course */}
              <div className="space-y-5 max-w-2xl">
                <h2 className="text-[12px] font-bold font-mono text-gray-400 uppercase tracking-[0.3em]">The Vibe</h2>
                <p className="text-[18px] md:text-[20px] leading-[1.6] text-[#5a5a5a] font-inter">
                  Stop watching tutorials and start shipping. We use modern tools like Cursor 
                  <ToolIcon label="C" bg="bg-black" />, Replit 
                  <ToolIcon label="R" bg="bg-[#F24E1E]" />, and LLMs 
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#10A37F] mx-1 align-text-bottom translate-y-[1px] shadow-sm">
                    <span className="w-2.5 h-2.5 border-[1.5px] border-white rounded-full"></span>
                  </span>
                  to turn founders into builders. No CS degree required 
                  <IconPill icon={Asterisk} color="bg-[#8B5CF6]" iconColor="text-white" />.
                </p>
              </div>

              {/* Curriculum / Journey */}
              <div className="space-y-5 max-w-2xl">
                <h2 className="text-[12px] font-bold font-mono text-gray-400 uppercase tracking-[0.3em]">The Journey</h2>
                <p className="text-[18px] md:text-[20px] leading-[1.6] text-[#5a5a5a] font-inter">
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
              <div className="space-y-5 max-w-2xl">
                <h2 className="text-[12px] font-bold font-mono text-gray-400 uppercase tracking-[0.3em]">Info</h2>
                <p className="text-[18px] md:text-[20px] leading-[1.6] text-[#5a5a5a] font-inter">
                  Fluent in English, I work as an individual entrepreneur with a Georgian residence permit. I use tools like Notion 
                  <ToolIcon label="N" bg="bg-black" />, Framer 
                  <ToolIcon label="F" bg="bg-black" />, Figma 
                  <ToolIcon label="F" bg="bg-[#F24E1E]" />, SEO platforms, and ChatGPT 
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#10A37F] mx-1 align-text-bottom translate-y-[1px] shadow-sm">
                    <span className="w-2.5 h-2.5 border-[1.5px] border-white rounded-full"></span>
                  </span>
                  to build structured content systems and lead editorial teams.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar Column - Cohorts */}
          <div className="lg:col-span-4 lg:pl-16">
            <div className="sticky top-40">
              <h2 className="text-[12px] font-bold font-mono text-gray-400 uppercase tracking-[0.3em] mb-12">Cohorts</h2>
              
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

              <div className="mt-12">
                <button className="w-full py-5 rounded-2xl bg-black text-white text-[15px] font-bold hover:bg-gray-800 transition-all uppercase tracking-[0.15em] shadow-xl shadow-black/5 hover:scale-[1.02] active:scale-[0.98]">
                  Secure Your Spot
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end text-[11px] font-bold font-mono text-gray-400 pointer-events-none bg-gradient-to-t from-[#FAF9F2] via-[#FAF9F2] via-70% to-transparent h-40 z-40">
        <div className="pointer-events-auto tracking-[0.2em] uppercase">
          © LAUNCHANYWAY 2026
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 flex items-center gap-2.5 pointer-events-auto cursor-pointer hover:text-black transition-colors tracking-[0.2em] group">
          <CircleDot className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" /> CURRICULUM
        </div>
        
        <div className="pointer-events-auto flex items-center gap-2.5 tracking-[0.2em] uppercase">
          MADE BY <span className="bg-[#e5e5e0] text-gray-600 px-2 py-1 rounded text-[10px] font-black">tmpl</span>
        </div>
      </footer>
    </div>
  );
}
