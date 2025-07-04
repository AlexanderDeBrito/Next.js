'use client';

import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

interface Professional {
  id: string;
  name: string;
  type: 'DOCTOR' | 'DENTIST' | 'AESTHETICIAN';
  license: string;
  specialty: string;
  email: string;
  phone: string;
  isActive: boolean;
}

export default function ProfessionalsPage() {
  const [professionals, setProfessionals] = useState<Professional[]>([
    {
      id: '1',
      name: 'Dr. João Santos',
      type: 'DOCTOR',
      license: 'CRM 12345',
      specialty: 'Cardiologia',
      email: 'joao.santos@email.com',
      phone: '(11) 99999-9999',
      isActive: true,
    },
    {
      id: '2',
      name: 'Dra. Ana Costa',
      type: 'DOCTOR',
      license: 'CRM 67890',
      specialty: 'Dermatologia',
      email: 'ana.costa@email.com',
      phone: '(11) 88888-8888',
      isActive: true,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingProfessional, setEditingProfessional] = useState<Professional | null>(null);

  const filteredProfessionals = professionals.filter(professional =>
    professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    professional.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getProfessionalTypeLabel = (type: string) => {
    switch (type) {
      case 'DOCTOR':
        return 'Médico';
      case 'DENTIST':
        return 'Dentista';
      case 'AESTHETICIAN':
        return 'Esteticista';
      default:
        return type;
    }
  };

  const handleEdit = (professional: Professional) => {
    setEditingProfessional(professional);
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este profissional?')) {
      setProfessionals(professionals.filter(p => p.id !== id));
    }
  };

  const handleAddNew = () => {
    setEditingProfessional(null);
    setShowModal(true);
  };

  return (
    <DashboardLayout
      title="Profissionais"
      subtitle="Gerencie médicos, dentistas e esteticistas"
      userRole="ADMIN"
      clinicType="MEDICAL"
    >
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar profissionais..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={handleAddNew}
            className="btn-primary flex items-center space-x-2"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Novo Profissional</span>
          </button>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfessionals.map((professional) => (
            <div key={professional.id} className="card">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {professional.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {getProfessionalTypeLabel(professional.type)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(professional)}
                    className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(professional.id)}
                    className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Registro:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {professional.license}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Especialidade:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {professional.specialty}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Email:</span>
                  <span className="text-sm text-gray-900 truncate">
                    {professional.email}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Telefone:</span>
                  <span className="text-sm text-gray-900">
                    {professional.phone}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Status:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      professional.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {professional.isActive ? 'Ativo' : 'Inativo'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProfessionals.length === 0 && (
          <div className="text-center py-12">
            <UserIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Nenhum profissional encontrado
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm
                ? 'Tente ajustar os filtros de busca.'
                : 'Comece adicionando um novo profissional.'}
            </p>
            {!searchTerm && (
              <div className="mt-6">
                <button
                  onClick={handleAddNew}
                  className="btn-primary"
                >
                  Adicionar Profissional
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal for Add/Edit Professional */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {editingProfessional ? 'Editar Profissional' : 'Novo Profissional'}
            </h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="input-field"
                  defaultValue={editingProfessional?.name || ''}
                  placeholder="Digite o nome completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo
                </label>
                <select
                  className="input-field"
                  defaultValue={editingProfessional?.type || ''}
                >
                  <option value="">Selecione o tipo</option>
                  <option value="DOCTOR">Médico</option>
                  <option value="DENTIST">Dentista</option>
                  <option value="AESTHETICIAN">Esteticista</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Registro Profissional
                </label>
                <input
                  type="text"
                  className="input-field"
                  defaultValue={editingProfessional?.license || ''}
                  placeholder="CRM, CRO, etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Especialidade
                </label>
                <input
                  type="text"
                  className="input-field"
                  defaultValue={editingProfessional?.specialty || ''}
                  placeholder="Digite a especialidade"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="input-field"
                  defaultValue={editingProfessional?.email || ''}
                  placeholder="email@exemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="input-field"
                  defaultValue={editingProfessional?.phone || ''}
                  placeholder="(11) 99999-9999"
                />
              </div>
            </form>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="btn-secondary"
              >
                Cancelar
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="btn-primary"
              >
                {editingProfessional ? 'Salvar' : 'Criar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}