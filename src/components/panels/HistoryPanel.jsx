import React from 'react';
import { mockHistory } from '../../data/mockData';
import { BookOpen, CheckCircle } from 'lucide-react';

function HistoryPanel() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Historial Académico 🎓</h2>
        <p className="text-gray-400 text-sm md:text-base">Revisa tus calificaciones y progreso histórico.</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 px-4 text-gray-400 font-medium text-sm">Periodo</th>
              <th className="py-4 px-4 text-gray-400 font-medium text-sm">Curso</th>
              <th className="py-4 px-4 text-gray-400 font-medium text-sm text-center">Nota Final</th>
              <th className="py-4 px-4 text-gray-400 font-medium text-sm text-right">Estado</th>
            </tr>
          </thead>
          <tbody>
            {mockHistory.map(item => (
              <tr key={item.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-4 text-white font-medium">{item.period}</td>
                <td className="py-4 px-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-purple-400" />
                    {item.course}
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                    {item.grade}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                    <CheckCircle size={12} />
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoryPanel;
