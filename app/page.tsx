'use client'

import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ProfessionalsManagement from './components/ProfessionalsManagement'
import InsuranceManagement from './components/InsuranceManagement'
import AppointmentRequests from './components/AppointmentRequests'
import PatientPortal from './components/PatientPortal'
import ClinicSettings from './components/ClinicSettings'

export default function Home() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userProfile, setUserProfile] = useState('admin') // admin, attendant, professional, patient

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />
      case 'professionals':
        return <ProfessionalsManagement />
      case 'insurance':
        return <InsuranceManagement />
      case 'appointments':
        return <AppointmentRequests />
      case 'patient-portal':
        return <PatientPortal />
      case 'settings':
        return <ClinicSettings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        currentView={currentView}
        setCurrentView={setCurrentView}
        userProfile={userProfile}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <div className="lg:ml-64">
        <Header 
          setSidebarOpen={setSidebarOpen}
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
        
        <main className="p-4 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}