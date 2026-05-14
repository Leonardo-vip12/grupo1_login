import React from 'react';
import { 
  BookOpen, 
  LayoutDashboard, 
  Settings, 
  Calendar,
  Clock,
  LogOut,
  X
} from 'lucide-react';
import NavItem from './NavItem';
import logoImg from '../../assets/imagenes/logo_DSI.suiza.jpg';

function Sidebar({ isSidebarOpen, setIsSidebarOpen, activeTab, setActiveTab, handleLogout }) {
  const navItems = [
    { name: 'Panel Principal', icon: <LayoutDashboard size={20} /> },
    { name: 'Mis Cursos', icon: <BookOpen size={20} /> },
    { name: 'Horario', icon: <Calendar size={20} /> },
    { name: 'Historial', icon: <Clock size={20} /> },
    { name: 'Ajustes', icon: <Settings size={20} /> },
  ];

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:relative inset-y-0 left-0 z-50 w-72 flex flex-col border-r border-white/10 bg-[#0f172a] lg:bg-transparent lg:bg-white/5 backdrop-blur-xl transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        {/* Logo Area */}
        <div className="p-6 md:p-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={logoImg} className="w-full h-full object-contain rounded-xl" alt="Logo" />
            </div>
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
              Portal Académico
            </h1>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
          {navItems.map((item) => (
            <NavItem 
              key={item.name}
              icon={item.icon} 
              text={item.name} 
              active={activeTab === item.name} 
              onClick={() => { setActiveTab(item.name); setIsSidebarOpen(false); }} 
            />
          ))}
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
    </>
  );
}

export default Sidebar;
