import React from 'react';
import { BookOpen } from 'lucide-react';

function CourseRow({ name, progress, grade }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-purple-400 transition-colors">
          <BookOpen size={18} />
        </div>
        <div>
          <h4 className="font-semibold text-gray-200 group-hover:text-white transition-colors">{name}</h4>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs text-gray-500">{progress}%</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
          {grade}
        </span>
      </div>
    </div>
  );
}

export default CourseRow;
