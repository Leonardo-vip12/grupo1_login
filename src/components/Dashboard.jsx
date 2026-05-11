import { 
  BookOpen, 
  GraduationCap, 
  LayoutDashboard, 
  Settings, 
  Bell, 
  Search, 
  LogOut,
  Calendar,
  Clock,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import avatarImg from '../assets/imagenes/ROWLING.png';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-[#0f172a] text-white font-sans overflow-hidden">
      
      {/* Background decorations - Manteniendo la estética del login */}
      <div className="fixed top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 pointer-events-none"></div>
      <div className="fixed top-[20%] right-[-5%] w-[30rem] h-[30rem] bg-indigo-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 pointer-events-none"></div>
      <div className="fixed bottom-[-20%] left-[20%] w-[35rem] h-[35rem] bg-blue-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 pointer-events-none"></div>

      {/* Sidebar */}
      <aside className="w-72 relative z-10 flex flex-col border-r border-white/10 bg-white/5 backdrop-blur-xl">
        {/* Logo Area */}
        <div className="p-8 flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
            Portal Académico
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <NavItem icon={<LayoutDashboard size={20} />} text="Panel Principal" active />
          <NavItem icon={<BookOpen size={20} />} text="Mis Cursos" />
          <NavItem icon={<Calendar size={20} />} text="Horario" />
          <NavItem icon={<Clock size={20} />} text="Historial" />
          <NavItem icon={<Settings size={20} />} text="Ajustes" />
        </nav>

        {/* User / Logout */}
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
          >
            <LogOut size={20} className="group-hover:text-red-400 transition-colors" />
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative z-10 flex flex-col h-screen overflow-hidden">
        
        {/* Header */}
        <header className="h-24 flex items-center justify-between px-10 border-b border-white/10 bg-white/5 backdrop-blur-md">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Buscar cursos, profesores..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
              <Bell size={20} className="text-gray-300" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold text-white">Rowling Garcia</p>
                <p className="text-xs text-purple-300">Estudiante de Desarrollo de Sistemas de Informacion</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-[#1e1b4b] border-2 border-transparent flex items-center justify-center overflow-hidden">
                  <img src={avatarImg} alt="Avatar" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-10">
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">¡Hola, Rowling! 👋</h2>
            <p className="text-gray-400">Aquí tienes un resumen de tu actividad académica.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <StatCard 
              title="Promedio Actual" 
              value="20" 
              subtitle="↑ 18 desde el mes pasa"
              color="from-green-400 to-emerald-600"
            />
            <StatCard 
              title="Cursos Activos" 
              value="6" 
              subtitle="2 tareas pendientes"
              color="from-blue-400 to-indigo-600"
            />
            <StatCard 
              title="Créditos" 
              value="124" 
              subtitle="De 160 requeridos"
              color="from-purple-400 to-pink-600"
            />
          </div>

          {/* Recent Activity & Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Courses List */}
            <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Tus Cursos</h3>
                <button className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                  Ver todos <ChevronRight size={16} />
                </button>
              </div>
              <div className="space-y-4">
                <CourseRow name="Diseño Web Avanzado" progress={85} grade="4.9" />
                <CourseRow name="Ingeniería de Software" progress={60} grade="4.5" />
                <CourseRow name="Bases de Datos" progress={40} grade="4.2" />
                <CourseRow name="Arquitectura de Computadores" progress={95} grade="5.0" />
              </div>
            </div>

            {/* Upcoming */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-6">Próximos Eventos</h3>
              <div className="space-y-5">
                <EventItem 
                  title="Entrega Proyecto Final" 
                  course="Diseño Web" 
                  time="Hoy, 23:59" 
                  type="deadline" 
                />
                <EventItem 
                  title="Examen Parcial" 
                  course="Ingeniería de Software" 
                  time="Mañana, 08:00 AM" 
                  type="exam" 
                />
                <EventItem 
                  title="Tutoría" 
                  course="Bases de Datos" 
                  time="Jueves, 14:00 PM" 
                  type="meeting" 
                />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

// Sub-components for cleaner code

function NavItem({ icon, text, active = false }) {
  return (
    <a 
      href="#" 
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

function StatCard({ title, value, subtitle, color }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
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

export default Dashboard;
