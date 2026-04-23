import React, { useEffect, useRef } from 'react';

interface TVProps {
  serverConnected: boolean;
  logs: string[];
}

export const TV: React.FC<TVProps> = ({ serverConnected, logs }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="relative w-[840px] h-[440px] bg-[#111] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col p-[10px] pb-6 border-b-4 border-[#080808] border-r-2 border-l-2">
      
      {/* Screen Area */}
      <div className="w-full flex-1 bg-[#0f0f0f] rounded-[4px] relative border-[8px] border-[#0a0a0a] overflow-hidden shadow-[inset_0_5px_15px_rgba(0,0,0,1)]">
        {/* Reflection/Glare Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none z-10"></div>
        
        {/* Content */}
        <div 
          ref={scrollRef}
          className="w-full h-full p-8 font-mono text-[13px] text-[#22AAFF] terminal-scroll overflow-y-auto relative z-0 tracking-wide font-medium"
        >
          <div className="opacity-90">
            SYSTEM TERMINAL - MEDIA SERVER ACTIVE
          </div>
          <div className="w-full h-[1px] bg-[#22AAFF]/30 mt-2 mb-4"></div>
          {logs.length === 0 ? (
            <div className="opacity-50 text-[#115588] italic">Waiting for input...</div>
          ) : (
            logs.map((log, i) => (
              <div key={i} className="mb-1 break-words opacity-80 mix-blend-screen">
                {log}
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* Branding */}
      <div className="absolute bottom-2 left-0 right-0 text-center text-[#555] text-[10px] tracking-[0.3em] font-sans opacity-70 pointer-events-none">
        SONY
      </div>

      {/* Power LED */}
      <div className="absolute bottom-2.5 right-6 w-[8px] h-[8px] rounded-[1px]">
         <div className={`w-full h-full ${serverConnected ? 'bg-[#ff2222] shadow-[0_0_8px_rgba(255,34,34,0.6)]' : 'bg-[#222]'}`}></div>
      </div>
    </div>
  );
};
