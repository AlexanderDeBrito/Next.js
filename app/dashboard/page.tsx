'use client';

import DashboardLayout from '../components/DashboardLayout';
import KPICard from '../components/KPICard';
import {
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  // Mock data - replace with real data from your API
  const kpiData = [
    {
      title: 'Atendimentos Hoje',
      value: 12,
      icon: CalendarIcon,
      trend: { value: 8, isPositive: true },
      color: 'blue' as const,
    },
    {
      title: 'Pendentes',
      value: 5,
      icon: ClockIcon,
      trend: { value: -12, isPositive: false },
      color: 'yellow' as const,
    },
    {
      title: 'Concluídos',
      value: 28,
      icon: CheckCircleIcon,
      trend: { value: 15, isPositive: true },
      color: 'green' as const,
    },
    {
      title: 'Pacientes Ativos',
      value: 156,
      icon: UserGroupIcon,
      trend: { value: 5, isPositive: true },
      color: 'blue' as const,
    },
  ];

  const recentAppointments = [
    {
      id: 1,
      patient: 'Maria Silva',
      professional: 'Dr. João Santos',
      time: '09:00',
      status: 'confirmed',
      type: 'Consulta',
    },
    {
      id: 2,
      patient: 'Carlos Oliveira',
      professional: 'Dra. Ana Costa',
      time: '10:30',
      status: 'pending',
      type: 'Retorno',
    },
    {
      id: 3,
      patient: 'Fernanda Lima',
      professional: 'Dr. Pedro Alves',
      time: '14:00',
      status: 'confirmed',
      type: 'Primeira Consulta',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmado';
      case 'pending':
        return 'Pendente';
      case 'cancelled':
        return 'Cancelado';
      default:
        return status;
    }
  };

  return (
    <DashboardLayout
      title="Dashboard"
      subtitle="Visão geral dos atendimentos e métricas"
      userRole="ADMIN"
      clinicType="MEDICAL"
    >
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => (
            <KPICard
              key={index}
              title={kpi.title}
              value={kpi.value}
              icon={kpi.icon}
              trend={kpi.trend}
              color={kpi.color}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Appointments */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Atendimentos de Hoje
              </h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Ver todos
              </button>
            </div>
            
            <div className="space-y-4">
              {recentAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium text-sm">
                          {appointment.patient.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {appointment.patient}
                        </p>
                        <p className="text-sm text-gray-500">
                          {appointment.professional} • {appointment.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">
                      {appointment.time}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        appointment.status
                      )}`}
                    >
                      {getStatusText(appointment.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Estatísticas Rápidas
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Taxa de Ocupação</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">85%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Satisfação do Cliente</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">92%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Tempo Médio de Espera</span>
                <span className="text-sm font-medium text-gray-900">12 min</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Receita do Mês</span>
                <span className="text-sm font-medium text-gray-900">R$ 45.280</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}