import React from 'react';
import { Clock } from 'lucide-react';

function EventItem({ title, course, time, type }) {
  const getColors = () => {
    switch(type) {
      case 'deadline': return 'bg-red-500/20 text-red-400 border-red-500/20';
      case 'exam': return 'bg-purple-500/20 text-purple-400 border-purple-500/20';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/20';
    }
  };

  return (
    <div className="flex gap-4 group cursor-pointer">
      <div className="flex flex-col items-center mt-1">
        <div className={`w-3 h-3 rounded-full border ${getColors()} bg-current`}></div>
        <div className="w-0.5 h-full bg-white/5 my-1 group-last:hidden"></div>
      </div>
      <div className="pb-4 group-last:pb-0">
        <h4 className="font-medium text-gray-200 group-hover:text-white transition-colors">{title}</h4>
        <p className="text-sm text-gray-400 mt-0.5">{course}</p>
        <p className="text-xs font-medium text-gray-500 mt-2 flex items-center gap-1.5">
          <Clock size={12} /> {time}
        </p>
      </div>
    </div>
  );
}

export default EventItem;
