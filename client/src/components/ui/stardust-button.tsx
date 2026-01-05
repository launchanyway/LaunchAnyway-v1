import React from 'react';
import { cn } from '@/lib/utils';

interface StardustButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const StardustButton: React.FC<StardustButtonProps> = ({
  children = "Apply Now",
  onClick,
  className = "",
  disabled,
  ...props
}) => {
  const buttonStyle = {
    '--accent': '#60A5FA',
    '--bg': disabled ? '#2a2a2a' : '#1e3a8a',
    '--radius': '16px',
    outline: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: disabled ? '1px solid rgba(0,0,0,0.1)' : 0,
    position: 'relative',
    borderRadius: 'var(--radius)',
    background: disabled ? 'var(--bg)' : 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
    transition: 'all 0.2s ease',
    width: '100%',
    opacity: disabled ? 0.5 : 1,
    boxShadow: 'none',
  };

  const wrapStyle = {
    fontSize: '13px',
    fontWeight: 700,
    color: disabled ? '#888888' : '#ffffff',
    padding: '12px 20px',
    borderRadius: 'inherit',
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
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
      background-color: rgba(96, 165, 250, 0.15);
    }

    .stardust-btn .wrap::after {
      left: 6%;
      right: 6%;
      top: 12%;
      bottom: 40%;
      border-radius: 12px 12px 0 0;
      box-shadow: inset 0 10px 8px -10px rgba(147, 197, 253, 0.5);
      background: linear-gradient(
        180deg,
        rgba(147, 197, 253, 0.2) 0%,
        rgba(30, 58, 138, 0) 50%,
        rgba(30, 58, 138, 0) 100%
      );
    }

    .stardust-btn:not(:disabled):hover {
      box-shadow:
        inset 0 0.3rem 0.5rem rgba(96, 165, 250, 0.4),
        inset 0 -0.1rem 0.3rem rgba(30, 58, 138, 0.7),
        inset 0 -0.4rem 0.9rem rgba(96, 165, 250, 0.5),
        0 3rem 3rem rgba(30, 64, 175, 0.2),
        0 1rem 1rem -0.6rem rgba(30, 64, 175, 0.5);
      transform: scale(1.02);
    }

    .stardust-btn:not(:disabled):active {
      transform: translateY(2px) scale(0.98);
    }

    .stardust-btn:not(:disabled):hover .wrap::before {
      transform: translateY(-5%);
    }

    .stardust-btn:not(:disabled):hover .wrap::after {
      opacity: 0.4;
      transform: translateY(5%);
    }

    .stardust-btn:disabled .wrap::before,
    .stardust-btn:disabled .wrap::after {
      display: none;
    }
  `;

  return (
    <>
      <style>{beforeAfterStyles}</style>
      <button
        className={cn("stardust-btn", className)}
        style={buttonStyle}
        onClick={onClick}
        disabled={disabled}
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
