import React from 'react';
import { ContainerStats } from '../types';

interface ConsoleUnitProps {
  stats: ContainerStats;
  onRefreshStats?: () => void;
}

export const ConsoleUnit: React.FC<ConsoleUnitProps> = ({ stats, onRefreshStats }) => {
  return (
    <div className="w-[840px] h-[220px] bg-[#ECE7E1] rounded-[6px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-[#fff] p-3 flex gap-3">
      
      {/* Left Column Drawers */}
      <div className="w-[200px] h-full flex flex-col gap-3">
        <div className="flex-1 bg-[#D4CDC5] rounded-[4px] shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)] border border-white/50 flex items-center justify-center">
           <div className="w-[50px] h-[10px] bg-[#222] rounded-full shadow-[inset_0_3px_5px_rgba(0,0,0,1)]"></div>
        </div>
        <div className="flex-1 bg-[#D4CDC5] rounded-[4px] shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)] border border-white/50 flex items-center justify-center">
           <div className="w-[50px] h-[10px] bg-[#222] rounded-full shadow-[inset_0_3px_5px_rgba(0,0,0,1)]"></div>
        </div>
      </div>

      {/* Center Column Monitors */}
      <div className="flex-1 h-full flex flex-col gap-3 max-w-[400px] mx-auto">
        {/* Top Screen (CPU/GPU) */}
        <div className="h-[90px] bg-[#0f0f0f] rounded-[4px] border border-[#222] flex items-center justify-between px-10 shadow-[inset_0_5px_15px_rgba(0,0,0,0.8)] relative overflow-hidden">
            <div className="text-center pt-2 cursor-pointer transition-all hover:brightness-125 active:scale-95" onClick={onRefreshStats}>
              <div className="text-[#666] text-[10px] tracking-widest font-mono mb-2">CPU</div>
              <div className="text-[#32CD32] font-mono text-xl">{stats.cpu}%</div>
            </div>
            <div className="w-[1px] h-12 bg-[#222]"></div>
            <div className="text-center pt-2 cursor-pointer transition-all hover:brightness-125 active:scale-95" onClick={onRefreshStats}>
              <div className="text-[#666] text-[10px] tracking-widest font-mono mb-2">GPU</div>
              <div className="text-[#FF6347] font-mono text-xl">{stats.gpu}%</div>
            </div>
        </div>

        {/* Bottom Screen (RAM) */}
        <div className="flex-1 bg-[#0f0f0f] rounded-[4px] border border-[#222] shadow-[inset_0_5px_15px_rgba(0,0,0,0.8)] relative flex items-center justify-center gap-6">
           <button 
             onClick={onRefreshStats}
             className="w-6 h-6 rounded-full bg-[#888] shadow-md border-2 border-[#555] bg-gradient-to-br from-gray-400 to-gray-600 transition-transform active:scale-90 cursor-pointer hover:brightness-110"
           ></button>
           
           <div className="text-center pt-2 min-w-[80px] cursor-pointer transition-all hover:brightness-125 active:scale-95" onClick={onRefreshStats}>
              <div className="text-[#666] text-[10px] tracking-widest font-mono mb-2">RAM</div>
              <div className="text-[#B0C4DE] font-mono text-xl">{stats.ram}%</div>
           </div>
           
           <button 
             onClick={onRefreshStats}
             className="w-6 h-6 rounded-full bg-[#888] shadow-md border-2 border-[#555] bg-gradient-to-br from-gray-400 to-gray-600 transition-transform active:scale-90 cursor-pointer hover:brightness-110"
           ></button>
        </div>
      </div>

      {/* Right Column Drawers */}
      <div className="w-[200px] h-full flex flex-col gap-3">
        <div className="flex-1 bg-[#D4CDC5] rounded-[4px] shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)] border border-white/50 flex items-center justify-center">
           <div className="w-[50px] h-[10px] bg-[#222] rounded-full shadow-[inset_0_3px_5px_rgba(0,0,0,1)]"></div>
        </div>
        <div className="flex-1 bg-[#D4CDC5] rounded-[4px] shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)] border border-white/50 flex items-center justify-center">
           <div className="w-[50px] h-[10px] bg-[#222] rounded-full shadow-[inset_0_3px_5px_rgba(0,0,0,1)]"></div>
        </div>
      </div>

    </div>
  );
};
