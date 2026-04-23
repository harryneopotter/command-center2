import React from 'react';

interface SpeakerProps {
  onClick: () => void;
  loading?: boolean;
  label: string;
}

export const Speaker: React.FC<SpeakerProps> = ({ onClick, loading, label }) => {
  return (
    <div 
      onClick={loading ? undefined : onClick}
      className={`
        relative w-[110px] h-[160px] bg-[#ECE7E1] rounded-[8px] 
        shadow-[0_15px_30px_rgba(0,0,0,0.2)] border border-[#fff]
        flex flex-col items-center justify-start pt-6 cursor-pointer
        transition-all active:scale-95 hover:brightness-105
        ${loading ? 'animate-pulse' : ''}
      `}
    >
      {/* Speaker Cone Unit */}
      <div className="w-[50px] h-[50px] rounded-full bg-[#1e1e1e] shadow-[inset_0_4px_10px_black] border-[3px] border-[#D4CDC5] flex items-center justify-center relative">
         <div className="w-[20px] h-[20px] rounded-full bg-[#333] shadow-md border border-[#222]"></div>
         <div className="absolute top-1 right-1 w-1 h-1 bg-white/20 rounded-full blur-[1px]"></div>
      </div>

      {/* Branding */}
      <div className="absolute bottom-4 text-[#555] font-sans font-extrabold text-[10px] tracking-widest opacity-80">
        {label}
      </div>
    </div>
  );
};
