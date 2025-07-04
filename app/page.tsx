'use client';

import Link from 'next/link';
import {
  HeartIcon,
  UserIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export default function HomePage() {
  const clinicTypes = [
    {
      id: 'medical',
      title: 'Clínica Médica',
      description: 'Consultas médicas especializadas',
      icon: HeartIcon,
      color: 'bg-red-500',
      href: '/patient/request?type=medical',
    },
    {
      id: 'dental',
      title: 'Odontologia',
      description: 'Cuidados dentários completos',
      icon: BuildingOfficeIcon,
      color: 'bg-blue-500',
      href: '/patient/request?type=dental',
    },
    {
      id: 'aesthetic',
      title: 'Estética',
      description: 'Tratamentos estéticos avançados',
      icon: UserIcon,
      color: 'bg-purple-500',
      href: '/patient/request?type=aesthetic',
    },
  ];

  const features = [
    {
      icon: ClockIcon,
      title: 'Agendamento Rápido',
      description: 'Solicite seu atendimento em poucos cliques',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Aceita Convênios',
      description: 'Trabalhamos com os principais convênios médicos',
    },
    {
      icon: CheckCircleIcon,
      title: 'Confirmação por Email',
      description: 'Receba a confirmação diretamente no seu email',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <HeartIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  CRM Clínicas
                </h1>
                <p className="text-sm text-gray-500">
                  Sistema de Gestão para Clínicas
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Entrar
              </Link>
              <Link
                href="/patient/request"
                className="btn-primary"
              >
                Solicitar Atendimento
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cuidando da sua
              <span className="text-blue-500"> saúde</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Solicite seu atendimento de forma simples e rápida. 
              Nossa equipe especializada está pronta para cuidar de você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/patient/request"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <span>Solicitar Atendimento</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#especialidades"
                className="btn-secondary text-lg px-8 py-4"
              >
                Ver Especialidades
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher nossos serviços?
            </h2>
            <p className="text-lg text-gray-600">
              Oferecemos uma experiência completa e personalizada
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Types Section */}
      <section id="especialidades" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossas Especialidades
            </h2>
            <p className="text-lg text-gray-600">
              Escolha a área que melhor atende suas necessidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinicTypes.map((clinic) => (
              <Link
                key={clinic.id}
                href={clinic.href}
                className="group bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 ${clinic.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <clinic.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {clinic.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {clinic.description}
                  </p>
                  <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700">
                    <span className="font-medium">Solicitar Atendimento</span>
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Solicite seu atendimento agora e receba a confirmação por email
          </p>
          <Link
            href="/patient/request"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <span>Começar Agora</span>
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <HeartIcon className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">CRM Clínicas</span>
              </div>
              <p className="text-gray-400 mb-4">
                Sistema completo de gestão para clínicas médicas, odontológicas e estéticas.
                Cuidando da sua saúde com tecnologia e humanização.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Especialidades</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Clínica Médica</li>
                <li>Odontologia</li>
                <li>Estética</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@crmclinicas.com</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CRM Clínicas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}