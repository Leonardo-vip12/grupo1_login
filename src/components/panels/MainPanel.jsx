import React from 'react';
import { ChevronRight } from 'lucide-react';
import StatCard from '../ui/StatCard';
import CourseRow from '../ui/CourseRow';
import EventItem from '../ui/EventItem';
import { mockCourses, mockEvents } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';

function MainPanel({ setActiveTab }) {
  const { user } = useAuth();
  
  if (!user) return null;

  return (
    <div className="animate-fade-in">
      <div className="mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">¡Hola, {user.name.split(' ')[0]}! 👋</h2>
        <p className="text-gray-400 text-sm md:text-base">Aquí tienes un resumen de tu actividad académica.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard 
          title="Promedio Actual" 
          value={user.stats.promedio} 
          subtitle={user.stats.promedioSubtitle}
          color="from-green-400 to-emerald-600"
        />
        <StatCard 
          title="Cursos Activos" 
          value={user.stats.cursosActivos} 
          subtitle={user.stats.cursosSubtitle}
          color="from-blue-400 to-indigo-600"
          onClick={() => setActiveTab('Mis Cursos')}
        />
        <StatCard 
          title="Créditos" 
          value={user.stats.creditos} 
          subtitle={user.stats.creditosSubtitle}
          color="from-purple-400 to-pink-600"
        />
      </div>

      {/* Recent Activity & Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Courses List */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Tus Cursos</h3>
            <button 
              onClick={() => setActiveTab('Mis Cursos')}
              className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
            >
              Ver todos <ChevronRight size={16} />
            </button>
          </div>
          <div className="space-y-4">
            {mockCourses.map(course => (
              <CourseRow key={course.id} name={course.name} progress={course.progress} grade={course.grade} />
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
          <h3 className="text-xl font-semibold mb-6">Próximos Eventos</h3>
          <div className="space-y-5">
            {mockEvents.map(event => (
              <EventItem key={event.id} title={event.title} course={event.course} time={event.time} type={event.type} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default MainPanel;
