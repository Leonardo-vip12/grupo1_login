import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';
import avatarImg from '../../assets/imagenes/ROWLING.png';

function Header({ setIsSidebarOpen, user }) {
  return (
    <header className="h-20 md:h-24 flex items-center justify-between px-6 md:px-10 border-b border-white/10 bg-white/5 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden text-gray-400 hover:text-white p-2 -ml-2"
        >
          <Menu size={24} />
        </button>
        <div className="relative hidden md:block w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Buscar cursos, profesores..." 
            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
          <Bell size={20} className="text-gray-300" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
        </button>
        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
          <div className="text-right hidden md:block">
            <p className="text-sm font-semibold text-white">{user.name}</p>
            <p className="text-xs text-purple-300">{user.role}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-[2px]">
            <div className="w-full h-full rounded-full bg-[#1e1b4b] border-2 border-transparent flex items-center justify-center overflow-hidden">
              <img src={avatarImg} alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
