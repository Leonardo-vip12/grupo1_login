import React from 'react';
import { mockSchedule } from '../../data/mockData';
import { Calendar, Clock, MapPin } from 'lucide-react';

function SchedulePanel() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Horario de Clases 📅</h2>
        <p className="text-gray-400 text-sm md:text-base">Organiza tu semana y no te pierdas ninguna clase.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSchedule.map(item => (
          <div key={item.id} className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:bg-white/10 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Calendar size={24} />
              </div>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-purple-200">
                {item.day}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
              {item.course}
            </h3>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock size={16} />
                <span>{item.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={16} />
                <span>{item.room}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SchedulePanel;
