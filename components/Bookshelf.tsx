import React from 'react';

interface BookshelfProps {
  onClear: () => void;
  side: 'left' | 'right';
}

export const Bookshelf: React.FC<BookshelfProps> = ({ onClear, side }) => {
  // Pseudo-random book colors
  const bookColors = [
    'bg-red-700', 'bg-blue-800', 'bg-green-800', 'bg-yellow-700', 
    'bg-orange-800', 'bg-purple-800', 'bg-gray-700', 'bg-indigo-900'
  ];

  return (
    <div 
      onClick={onClear}
      className="w-[170px] h-[210px] bg-[#ECE7E1] rounded-[4px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] border border-white flex flex-col relative overflow-hidden active:scale-[0.98] transition-transform cursor-pointer"
    >
      {/* Horizontal divider/panel groove */}
      <div className="absolute bottom-[40px] w-full h-[2px] bg-[#D4CDC5] opacity-50"></div>
      
      {/* Colorful Stripes at bottom left */}
      <div className="absolute bottom-3 left-4 flex items-end h-[30px] gap-[3px]">
        {/* Colors resembling the reference image (apple-ish stripes) */}
        <div className="bg-[#E74C3C] w-[14px] h-[30px] rounded-[1px]"></div>
        <div className="bg-[#E67E22] w-[14px] h-[26px] rounded-[1px]"></div>
        <div className="bg-[#F1C40F] w-[14px] h-[24px] rounded-[1px]"></div>
        <div className="bg-[#3498DB] w-[14px] h-[28px] rounded-[1px]"></div>
        <div className="bg-[#2ECC71] w-[14px] h-[30px] rounded-[1px]"></div>
      </div>
    </div>
  );
};
