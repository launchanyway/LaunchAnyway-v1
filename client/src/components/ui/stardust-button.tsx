import React from 'react';
import { cn } from '@/lib/utils';

export const StardustButton = ({ 
  children = "Secure Your Spot", 
  onClick, 
  className = "",
  ...props 
}) => {
  const buttonStyle = {
    '--lime': '#D4E845',
    '--bg': '#000000',
    '--radius': '16px',
    outline: 'none',
    cursor: 'pointer',
    border: 0,
    position: 'relative',
    borderRadius: 'var(--radius)',
    backgroundColor: 'var(--bg)',
    transition: 'all 0.2s ease',
    width: '100%',
    boxShadow: `
      inset 0 0.3rem 0.9rem rgba(212, 232, 69, 0.2),
      inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7),
      inset 0 -0.4rem 0.9rem rgba(212, 232, 69, 0.3),
      0 3rem 3rem rgba(0, 0, 0, 0.1),
      0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.4)
    `,
  };

  const wrapStyle = {
    fontSize: '14px',
    fontWeight: 700,
    color: '#D4E845',
    padding: '16px 24px',
    borderRadius: 'inherit',
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.15em',
  };

  const pStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    margin: 0,
    transition: 'all 0.2s ease',
    transform: 'translateY(2%)',
  };

  const beforeAfterStyles = `
    .stardust-btn .wrap::before,
    .stardust-btn .wrap::after {
      content: "";
      position: absolute;
      transition: all 0.3s ease;
    }
    
    .stardust-btn .wrap::before {
      left: -15%;
      right: -15%;
      bottom: 25%;
      top: -100%;
      border-radius: 50%;
      background-color: rgba(212, 232, 69, 0.1);
    }
    
    .stardust-btn .wrap::after {
      left: 6%;
      right: 6%;
      top: 12%;
      bottom: 40%;
      border-radius: 12px 12px 0 0;
      box-shadow: inset 0 10px 8px -10px rgba(212, 232, 69, 0.4);
      background: linear-gradient(
        180deg,
        rgba(212, 232, 69, 0.15) 0%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    
    .stardust-btn:hover {
      box-shadow:
        inset 0 0.3rem 0.5rem rgba(212, 232, 69, 0.3),
        inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7),
        inset 0 -0.4rem 0.9rem rgba(212, 232, 69, 0.4),
        0 3rem 3rem rgba(0, 0, 0, 0.1),
        0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.4);
      transform: scale(1.02);
    }
    
    .stardust-btn:active {
      transform: translateY(2px) scale(0.98);
    }

    .stardust-btn:hover .wrap::before {
      transform: translateY(-5%);
    }
    
    .stardust-btn:hover .wrap::after {
      opacity: 0.4;
      transform: translateY(5%);
    }
  `;

  return (
    <>
      <style>{beforeAfterStyles}</style>
      <button
        className={cn("stardust-btn", className)}
        style={buttonStyle}
        onClick={onClick}
        {...props}
      >
        <div className="wrap" style={wrapStyle}>
          <p style={pStyle}>
            <span className="text-[10px]">✧</span>
            {children}
            <span className="text-[10px]">✧</span>
          </p>
        </div>
      </button>
    </>
  );
};
