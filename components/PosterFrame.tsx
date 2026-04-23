import React from 'react';
import { ContainerStatus } from '../types';
import { Play, Square, RefreshCw, Upload, FolderOpen } from 'lucide-react';

interface PosterFrameProps {
  title: string;
  status: ContainerStatus;
  isActive: boolean;
  type: 'forge' | 'browser';
  onToggle: () => void;
}

export const PosterFrame: React.FC<PosterFrameProps> = ({ title, status, isActive, type, onToggle }) => {
  const isRunning = status === 'RUNNING';
  
  return (
    <div className={`
      relative w-[280px] h-[400px] bg-frame-outer rounded-[4px] p-4 
      shadow-[15px_20px_35px_rgba(0,0,0,0.25)] border border-[#fff]
      transition-all duration-300
      ${isActive ? '' : 'opacity-90'}
    `}>
      {/* Screen content inside frame */}
      <div className="w-full h-full bg-[#1e1e1e] border-2 border-black rounded-[2px] flex flex-col p-4 shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)]">
         
         <div className="flex-1 flex flex-col items-center">
             <h2 className="text-[#E0E0E0] font-sans font-bold text-xl tracking-tight mt-2">{title}</h2>
             
             <div className={`mt-3 w-[140px] flex items-center justify-center py-[2px] rounded ${
               isRunning ? 'bg-[#222] border border-[#333]' : 'bg-[#222] border border-[#333]'
             }`}>
               <span className={`text-[10px] font-bold tracking-widest ${isRunning ? 'text-green-500' : 'text-red-500'}`}>
                 {isRunning ? 'RUNNING' : 'STOPPED'}
               </span>
             </div>

             {/* Icon Graphic Box */}
             <div className="mt-8 border border-[#333] rounded-[4px] w-16 h-12 flex items-center justify-center relative">
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-gray-600"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-gray-600"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-gray-600"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-gray-600"></div>
                {type === 'forge' ? (
                  <Play size={20} className="text-gray-400 ml-1" fill="currentColor" />
                ) : (
                  <FolderOpen size={22} className="text-gray-400" />
                )}
             </div>
         </div>

         {/* Buttons */}
         <div className="space-y-[10px] w-full">
            <button 
              onClick={onToggle}
              className={`w-full py-2 rounded-[2px] font-bold text-xs tracking-wider transition-colors
              ${type === 'forge' 
                ? 'bg-[#3b82f6] text-white hover:bg-blue-500 shadow-[0_2px_10px_rgba(59,130,246,0.3)]' 
                : 'bg-[#5c85d6] text-white hover:bg-blue-400 shadow-[0_2px_10px_rgba(92,133,214,0.3)]'
              }`}
            >
              {type === 'forge' ? 'LAUNCH' : 'BROWSE'}
            </button>
            
            <button className="w-full py-2 bg-[#555] text-[#ccc] rounded-[2px] font-bold text-xs tracking-wider transition-colors hover:bg-[#666]">
              {type === 'forge' ? 'SETTINGS' : 'UPLOAD'}
            </button>
         </div>
      </div>
    </div>
  );
};
