import React from 'react';

function NavItem({ icon, text, active = false, onClick }) {
  return (
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 ${
        active 
          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-purple-500/30 shadow-[inset_0_0_20px_rgba(168,85,247,0.15)]' 
          : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
      }`}
    >
      <div className={`${active ? 'text-purple-400' : ''}`}>
        {icon}
      </div>
      <span className={`font-medium ${active ? 'font-semibold' : ''}`}>{text}</span>
      {active && (
        <div className="ml-auto w-1.5 h-6 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
      )}
    </a>
  );
}

export default NavItem;
