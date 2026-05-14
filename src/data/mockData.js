export const mockUser = {
  name: "Rowling Garcia",
  role: "Estudiante de Desarrollo de Sistemas de Informacion",
  stats: {
    promedio: "20",
    promedioSubtitle: "↑ 18 desde el mes pasado",
    cursosActivos: "6",
    cursosSubtitle: "2 tareas pendientes",
    creditos: "124",
    creditosSubtitle: "De 160 requeridos"
  }
};

export const mockCourses = [
  { id: 1, name: "Diseño Web Avanzado", progress: 85, grade: "4.9" },
  { id: 2, name: "Ingeniería de Software", progress: 60, grade: "4.5" },
  { id: 3, name: "Bases de Datos", progress: 40, grade: "4.2" },
  { id: 4, name: "Arquitectura de Computadores", progress: 95, grade: "5.0" },
  { id: 5, name: "Inteligencia Artificial", progress: 20, grade: "4.0" },
  { id: 6, name: "Redes y Comunicaciones", progress: 75, grade: "4.6" },
  { id: 7, name: "Desarrollo Móvil", progress: 50, grade: "4.4" },
  { id: 8, name: "Seguridad Informática", progress: 10, grade: "3.8" }
];

export const mockEvents = [
  { id: 1, title: "Entrega Proyecto Final", course: "Diseño Web", time: "Hoy, 23:59", type: "deadline" },
  { id: 2, title: "Examen Parcial", course: "Ingeniería de Software", time: "Mañana, 08:00 AM", type: "exam" },
  { id: 3, title: "Tutoría", course: "Bases de Datos", time: "Jueves, 14:00 PM", type: "meeting" }
];

export const mockSchedule = [
  { id: 1, day: "Lunes", time: "08:00 - 10:00", course: "Diseño Web Avanzado", room: "Laboratorio 3" },
  { id: 2, day: "Lunes", time: "10:30 - 12:30", course: "Ingeniería de Software", room: "Aula 402" },
  { id: 3, day: "Miércoles", time: "09:00 - 11:00", course: "Bases de Datos", room: "Laboratorio 1" },
  { id: 4, day: "Jueves", time: "14:00 - 16:00", course: "Arquitectura de Computadores", room: "Aula 305" }
];

export const mockHistory = [
  { id: 1, period: "2025-II", course: "Programación Orientada a Objetos", grade: "19", status: "Aprobado" },
  { id: 2, period: "2025-II", course: "Matemática Discreta", grade: "18", status: "Aprobado" },
  { id: 3, period: "2025-I", course: "Algoritmos y Estructuras de Datos", grade: "20", status: "Aprobado" },
  { id: 4, period: "2025-I", course: "Sistemas Operativos", grade: "17", status: "Aprobado" }
];
