import React from 'react';

function StatCard({ title, value, subtitle, color, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-white/20 transition-all duration-300 ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Accent Line */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color}`}></div>
      
      {/* Background Glow on Hover */}
      <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${color} rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

      <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-4xl font-bold text-white mb-2">{value}</h3>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );
}

export default StatCard;
