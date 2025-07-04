'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  HeartIcon,
  UserIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  Bars3Icon,
  XMarkIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface SidebarProps {
  userRole: 'ADMIN' | 'ATTENDANT' | 'PROFESSIONAL' | 'PATIENT';
  clinicType?: 'MEDICAL' | 'DENTAL' | 'AESTHETIC';
}

export default function Sidebar({ userRole, clinicType }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getMenuItems = () => {
    const baseItems = [
      { 
        id: 'dashboard', 
        label: 'Dashboard', 
        icon: HomeIcon, 
        href: '/dashboard',
        roles: ['ADMIN', 'ATTENDANT', 'PROFESSIONAL'] 
      },
    ];

    const adminItems = [
      { 
        id: 'professionals', 
        label: 'Profissionais', 
        icon: UserGroupIcon, 
        href: '/dashboard/professionals',
        roles: ['ADMIN'] 
      },
      { 
        id: 'insurances', 
        label: 'Convênios', 
        icon: ShieldCheckIcon, 
        href: '/dashboard/insurances',
        roles: ['ADMIN', 'ATTENDANT'] 
      },
      { 
        id: 'specialties', 
        label: 'Especialidades', 
        icon: DocumentTextIcon, 
        href: '/dashboard/specialties',
        roles: ['ADMIN'] 
      },
      { 
        id: 'settings', 
        label: 'Configurações', 
        icon: CogIcon, 
        href: '/dashboard/settings',
        roles: ['ADMIN'] 
      },
    ];

    const attendantItems = [
      { 
        id: 'appointments', 
        label: 'Solicitações', 
        icon: CalendarIcon, 
        href: '/dashboard/appointments',
        roles: ['ADMIN', 'ATTENDANT'] 
      },
    ];

    const patientItems = [
      { 
        id: 'patient-portal', 
        label: 'Solicitar Atendimento', 
        icon: UserIcon, 
        href: '/patient/request',
        roles: ['PATIENT'] 
      },
      { 
        id: 'my-appointments', 
        label: 'Meus Atendimentos', 
        icon: CalendarIcon, 
        href: '/patient/appointments',
        roles: ['PATIENT'] 
      },
    ];

    return [...baseItems, ...adminItems, ...attendantItems, ...patientItems]
      .filter(item => item.roles.includes(userRole));
  };

  const getClinicTypeIcon = () => {
    switch (clinicType) {
      case 'MEDICAL':
        return HeartIcon;
      case 'DENTAL':
        return BuildingOfficeIcon;
      case 'AESTHETIC':
        return UserIcon;
      default:
        return BuildingOfficeIcon;
    }
  };

  const getClinicTypeName = () => {
    switch (clinicType) {
      case 'MEDICAL':
        return 'Clínica Médica';
      case 'DENTAL':
        return 'Odontologia';
      case 'AESTHETIC':
        return 'Estética';
      default:
        return 'Clínica';
    }
  };

  const menuItems = getMenuItems();
  const ClinicIcon = getClinicTypeIcon();

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-white shadow-md border border-gray-200"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-600" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={clsx(
          'fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
          {
            'translate-x-0': isOpen,
            '-translate-x-full': !isOpen,
          }
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <ClinicIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  CRM Clínicas
                </h1>
                <p className="text-sm text-gray-500">{getClinicTypeName()}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200',
                    {
                      'text-blue-600 bg-blue-50': isActive,
                      'text-gray-600 hover:text-gray-900 hover:bg-gray-50': !isActive,
                    }
                  )}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* User info */}
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <UserIcon className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Usuário
                </p>
                <p className="text-xs text-gray-500 capitalize">
                  {userRole.toLowerCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}