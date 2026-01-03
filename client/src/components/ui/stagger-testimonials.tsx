"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "This program exceeded my expectations. The daily missions kept me engaged, the community feedback was supportive and insightful, and the AI integration felt seamless. I strengthened my strategic and technical problem-solving skills, gained insight into backend challenges, and left motivated to build my own product.",
    by: "Prakash, Batch April'25",
    imgSrc: "/testimonials/prakash.png"
  },
  {
    tempId: 1,
    testimonial: "I'd highly recommend this program to anyone in design or development. The hands-on missions are outcome-driven—you either complete them or you don't—which makes the learning stick. I gained valuable industry knowledge, filled key gaps, and created strong additions for my website and portfolio.",
    by: "Nikole, Batch April'25",
    imgSrc: "/testimonials/nikole.png"
  },
  {
    tempId: 2,
    testimonial: "You won't just learn how to integrate AI into daily workflows—you'll develop a holistic understanding of business, strategy, and code. The program spans everything from micro-interactions and coding to writing PRDs, all while leveraging AI at a high level. Whether you're early in your design career or a senior designer new to these areas, it's well worth joining.",
    by: "Preet, Batch Aug'25",
    imgSrc: "/testimonials/preet.png"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-[#1a1a1a] text-white border-black" 
          : "z-0 bg-[#eeede8] text-gray-900 border-black/5 hover:border-black/20"
      )}
      style={{
        width: cardSize,
        minHeight: 300,
        height: 'auto',
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(0,0,0,0.1)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-black/10"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <div className="mb-4">
        <img
          src={testimonial.imgSrc}
          alt={`${testimonial.by.split(',')[0]}`}
          className="h-12 w-12 bg-gray-200 object-cover rounded-full border-2 border-white shadow-sm"
        />
      </div>
      <h3 className={cn(
        "text-sm sm:text-[15px] font-medium font-inter leading-relaxed tracking-tight pb-16",
        isCenter ? "text-white" : "text-gray-900"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-xs font-bold font-mono uppercase tracking-wider",
        isCenter ? "text-white/70" : "text-gray-500"
      )}>
        {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = 0; i < steps; i++) {
        const item = newList.shift();
        if (item) newList.push({ ...item, tempId: Math.random() });
      }
    } else if (steps < 0) {
      for (let i = 0; i < Math.abs(steps); i++) {
        const item = newList.pop();
        if (item) newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 340 : 280);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: 550 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = index - Math.floor(testimonialsList.length / 2);
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-xl transition-colors",
            "bg-white border border-black/5 hover:bg-black hover:text-white rounded-full",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-xl transition-colors",
            "bg-white border border-black/5 hover:bg-black hover:text-white rounded-full",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
