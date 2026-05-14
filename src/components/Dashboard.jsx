import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import MainPanel from './panels/MainPanel';
import CoursesPanel from './panels/CoursesPanel';
import SchedulePanel from './panels/SchedulePanel';
import HistoryPanel from './panels/HistoryPanel';
import SettingsPanel from './panels/SettingsPanel';
import Sidebar from './ui/Sidebar';
import Header from './ui/Header';

function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('Panel Principal');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Renderiza el panel correcto según la pestaña seleccionada
  const renderPanel = () => {
    switch (activeTab) {
      case 'Panel Principal':
        return <MainPanel setActiveTab={setActiveTab} />;
      case 'Mis Cursos':
        return <CoursesPanel />;
      case 'Horario':
        return <SchedulePanel />;
      case 'Historial':
        return <HistoryPanel />;
      case 'Ajustes':
        return <SettingsPanel />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400 animate-fade-in">
            <h3 className="text-xl mb-2">Próximamente...</h3>
            <p>La sección "{activeTab}" está en desarrollo.</p>
          </div>
        );
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex bg-[#0f172a] text-white font-sans overflow-hidden">
      
      {/* Background decorations - Manteniendo la estética del login */}
      <div className="fixed top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 pointer-events-none"></div>
      <div className="fixed top-[20%] right-[-5%] w-[30rem] h-[30rem] bg-indigo-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 pointer-events-none"></div>
      <div className="fixed bottom-[-20%] left-[20%] w-[35rem] h-[35rem] bg-blue-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 pointer-events-none"></div>

      {/* Sidebar Extracted Component */}
      <Sidebar 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="flex-1 relative z-10 flex flex-col h-screen overflow-hidden">
        
        {/* Header Extracted Component */}
        <Header 
          setIsSidebarOpen={setIsSidebarOpen}
          user={user}
        />

        {/* Dashboard Content Dynamic Panel */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {renderPanel()}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
