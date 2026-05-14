import React from 'react';
import { User, Bell, Shield } from 'lucide-react';

function SettingsPanel() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Ajustes ⚙️</h2>
        <p className="text-gray-400 text-sm md:text-base">Configura tus preferencias y datos de la cuenta.</p>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-purple-400" size={24} />
            <h3 className="text-xl font-semibold text-white">Perfil</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Nombre completo</label>
              <input type="text" defaultValue="Rowling Garcia" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors" />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Correo electrónico</label>
              <input type="email" defaultValue="rowling@universidad.edu" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors" />
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-xl transition-colors border border-white/10">
              Guardar cambios
            </button>
          </div>
        </div>

        {/* Notifications & Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="text-blue-400" size={24} />
              <h3 className="text-xl font-semibold text-white">Notificaciones</h3>
            </div>
            <div className="space-y-4">
              <Toggle option="Avisos de tareas" defaultChecked={true} />
              <Toggle option="Recordatorios de clases" defaultChecked={true} />
              <Toggle option="Mensajes de profesores" defaultChecked={false} />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-green-400" size={24} />
              <h3 className="text-xl font-semibold text-white">Seguridad</h3>
            </div>
            <div className="space-y-4">
              <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10 text-gray-300">
                Cambiar contraseña
              </button>
              <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10 text-gray-300">
                Autenticación en dos pasos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({ option, defaultChecked }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-300 text-sm">{option}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
        <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
      </label>
    </div>
  );
}

export default SettingsPanel;
