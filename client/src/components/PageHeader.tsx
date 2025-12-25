import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, bgImage, className = "" }: PageHeaderProps) {
  return (
    <div className={`relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden ${className}`}>
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40 mix-blend-overlay"
        style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center container px-4 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-accent drop-shadow-md">{title}</h1>
        {subtitle && <p className="text-lg md:text-2xl opacity-90 font-light max-w-2xl mx-auto">{subtitle}</p>}
        <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Decorative Arch Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 100" className="fill-background w-full h-auto block">
           <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}
