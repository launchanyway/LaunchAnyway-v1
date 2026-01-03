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
  <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${color} mx-1 align-text-bottom ${className} translate-y-[1px]`}>
    <Icon className={`w-3 h-3 ${iconColor}`} />
  </span>
);

// Circled Text Component
const CircledText = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block border-[1.5px] border-blue-600/60 rounded-full px-2 py-0 mx-0.5 text-inherit leading-normal">
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
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color} text-white transition-transform group-hover:scale-105 shadow-sm`}>
      <Icon className="w-5 h-5" />
    </div>
    <div className="flex flex-col pt-0.5">
      <h3 className="text-sm font-medium leading-snug text-gray-900 mb-1.5 group-hover:text-gray-600 transition-colors">
        {title}
      </h3>
      <div className="flex items-center text-[10px] text-gray-400 font-mono gap-2 tracking-wide">
        <span>{date}</span>
        <span className="w-0.5 h-0.5 rounded-full bg-gray-300"></span>
        <div className="flex items-center gap-1">
          {isLocked && <Lock className="w-2.5 h-2.5" />}
          <span className="uppercase">{tag}</span>
        </div>
      </div>
    </div>
  </div>
);

// Tool Icon Component
const ToolIcon = ({ label, bg, text = "text-white" }: { label: string, bg: string, text?: string }) => (
  <span className={`inline-flex items-center justify-center w-5 h-5 rounded mx-1 align-text-bottom ${bg} ${text} text-[10px] font-bold font-mono translate-y-[1px]`}>
    {label}
  </span>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1a1a1a] font-sans selection:bg-[#D4E845] selection:text-black">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-start z-50 pointer-events-none mix-blend-multiply">
        <div className="flex gap-5 pointer-events-auto">
          <button className="text-gray-400 hover:text-black transition-colors"><Box className="w-5 h-5" strokeWidth={1.5} /></button>
          <button className="text-gray-400 hover:text-black transition-colors"><Twitter className="w-5 h-5" strokeWidth={1.5} /></button>
          <button className="text-gray-400 hover:text-black transition-colors"><Instagram className="w-5 h-5" strokeWidth={1.5} /></button>
        </div>
        
        <div className="flex gap-8 text-[11px] font-mono text-gray-400 pointer-events-auto tracking-wide">
          <a href="#" className="flex items-center gap-2 hover:text-black transition-colors">
            <Download className="w-3.5 h-3.5" /> CV
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-black transition-colors">
            <Mail className="w-3.5 h-3.5" /> HELLO@TMPL.DIGITAL
          </a>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Content Column */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Profile Header */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gray-200 shadow-inner">
                <img src={profileImage} alt="Sasha Mozdir" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h1 className="text-base font-medium text-gray-900">Sasha Mozdir</h1>
                <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">ENTREPRENEUR</span>
              </div>
            </div>

            {/* Intro */}
            <div className="text-xl md:text-[22px] leading-[1.6] text-[#4a4a4a] font-light max-w-3xl">
              <p>
                I'm Sasha Mozdir. I build editorial systems and content-first websites. I run Chemimedia 
                <IconPill icon={Zap} color="bg-[#D4E845]" iconColor="text-black" /> 
                — a digital agency helping growing brands and established companies clarify their message and launch it without 
                <CircledText>noise</CircledText>. 
                I live in Tbilisi, Georgia <Flag country="georgia" />, but I work with clients across Europe, Canada <Flag country="canada" />, US <Flag country="us" />.
              </p>
            </div>

            {/* Study Section */}
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Study</h2>
              <p className="text-[17px] leading-relaxed text-[#5a5a5a]">
                I studied Philosophy and Design at Marsons 
                <IconPill icon={Flower2} color="bg-[#D93F3F]" iconColor="text-white" /> 
                School of Design in New York and finished a dual degree at Voldmiths 
                <IconPill icon={Star} color="bg-[#3FD9D9]" iconColor="text-black" />
                , University of London. Later, I trained in content architecture and interface writing at Cyper Island 
                <IconPill icon={Flower2} color="bg-[#E895C9]" iconColor="text-black" />.
              </p>
            </div>

            {/* Experience Section */}
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Experience</h2>
              <p className="text-[17px] leading-relaxed text-[#5a5a5a]">
                At Coole 
                <IconPill icon={Asterisk} color="bg-[#8B5CF6]" iconColor="text-white" /> 
                I led content structure workshops for the product team and helped rebuild their interface copy for a mobile release. At Plitch 
                <IconPill icon={Star} color="bg-[#1a1a1a]" iconColor="text-white" />
                I worked on their editorial tone migration across six markets and built an internal micro-Wiki to support product 
                <CircledText>storytelling</CircledText>. At Sportics 
                <IconPill icon={Star} color="bg-[#D4E845]" iconColor="text-black" />
                , I contributed to their public template kits and launched the Content Guidelines site used by 3M+ users.
              </p>
            </div>

            {/* Info Section */}
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Info</h2>
              <p className="text-[17px] leading-relaxed text-[#5a5a5a]">
                Fluent in English, I work as an individual entrepreneur with a Georgian residence permit. I use tools like Notion 
                <ToolIcon label="N" bg="bg-black" />, Framer 
                <ToolIcon label="F" bg="bg-black" />, Figma 
                <ToolIcon label="F" bg="bg-[#F24E1E]" />, SEO platforms, and ChatGPT 
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#10A37F] mx-1 align-text-bottom translate-y-[1px]">
                  <span className="w-2.5 h-2.5 border-[1.5px] border-white rounded-full"></span>
                </span>
                to build structured content systems and lead editorial teams.
              </p>
            </div>

          </div>

          {/* Right Sidebar Column - Cases */}
          <div className="lg:col-span-4 lg:pl-12">
            <div className="sticky top-32">
              <h2 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-10">Cases</h2>
              
              <div className="space-y-2">
                <CaseItem 
                  icon={Asterisk}
                  color="bg-[#1a1a1a]"
                  title="Full Editorial System for a European Appliance Brand"
                  date="4/23/25"
                  tag="NDA"
                  isLocked={true}
                />
                
                <CaseItem 
                  icon={Flower2}
                  color="bg-[#F472B6]"
                  title="1M Reads/Year From Fewer Than 100 Articles"
                  date="4/22/25"
                  tag="NDA"
                  isLocked={true}
                />
                
                <CaseItem 
                  icon={Asterisk}
                  color="bg-[#8B5CF6]"
                  title="From Zero to Content-Ready in 4 Weeks"
                  date="4/10/25"
                  tag="ST"
                  isLocked={false}
                />
                
                <CaseItem 
                  icon={Asterisk}
                  color="bg-[#22D3EE]"
                  title="Launching a Fintech Blog"
                  date="3/18/25"
                  tag="COOLE"
                  isLocked={false}
                />
              </div>

              <div className="mt-10">
                <button className="px-6 py-2.5 rounded-full border border-gray-300 text-[10px] font-mono text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors uppercase tracking-widest bg-transparent">
                  All
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end text-[10px] font-mono text-gray-400 pointer-events-none bg-gradient-to-t from-[#FAFAF9] via-[#FAFAF9] via-60% to-transparent h-32 z-40">
        <div className="pointer-events-auto tracking-widest">
          © SASHA MOZDIR XXXX
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex items-center gap-2 pointer-events-auto cursor-pointer hover:text-black transition-colors tracking-widest group">
          <CircleDot className="w-3.5 h-3.5 text-gray-400 group-hover:text-black transition-colors" /> ALL CASES
        </div>
        
        <div className="pointer-events-auto flex items-center gap-2 tracking-widest">
          MADE BY <span className="bg-[#e5e5e0] text-gray-500 px-1.5 py-0.5 rounded text-[9px] font-bold">tmpl</span>
        </div>
      </footer>
    </div>
  );
}
