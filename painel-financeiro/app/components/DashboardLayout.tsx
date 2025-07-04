'use client';

import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  userRole: 'ADMIN' | 'ATTENDANT' | 'PROFESSIONAL' | 'PATIENT';
  clinicType?: 'MEDICAL' | 'DENTAL' | 'AESTHETIC';
}

export default function DashboardLayout({
  children,
  title,
  subtitle,
  userRole,
  clinicType = 'MEDICAL',
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userRole={userRole} clinicType={clinicType} />
      
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <Header title={title} subtitle={subtitle} />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}