import React from 'react';
import CourseRow from '../ui/CourseRow';
import { mockCourses } from '../../data/mockData';

function CoursesPanel() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Mis Cursos 📚</h2>
        <p className="text-gray-400 text-sm md:text-base">Listado completo de tus cursos actuales.</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
        <div className="space-y-4">
          {mockCourses.map(course => (
            <CourseRow key={course.id} name={course.name} progress={course.progress} grade={course.grade} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesPanel;
