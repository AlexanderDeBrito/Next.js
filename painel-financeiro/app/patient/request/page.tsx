'use client';

import { useState } from 'react';
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export default function PatientRequestPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    birthDate: '',
    hasInsurance: false,
    insuranceId: '',
    specialtyId: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });
  const [showInsuranceModal, setShowInsuranceModal] = useState(false);

  const specialties = [
    { id: '1', name: 'Cardiologia' },
    { id: '2', name: 'Dermatologia' },
    { id: '3', name: 'Ortopedia' },
    { id: '4', name: 'Pediatria' },
  ];

  const insurances = [
    { id: '1', name: 'Unimed' },
    { id: '2', name: 'Bradesco Saúde' },
    { id: '3', name: 'SulAmérica' },
    { id: '4', name: 'Amil' },
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInsuranceToggle = (hasInsurance: boolean) => {
    handleInputChange('hasInsurance', hasInsurance);
    if (hasInsurance) {
      setShowInsuranceModal(true);
    } else {
      handleInputChange('insuranceId', '');
    }
  };

  const handleSubmit = () => {
    // Here you would submit the form data to your API
    console.log('Submitting form:', formData);
    setStep(4); // Show success message
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <UserIcon className="mx-auto h-12 w-12 text-blue-500" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Dados Pessoais
        </h2>
        <p className="mt-2 text-gray-600">
          Preencha seus dados para solicitar um atendimento
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="input-field"
            placeholder="Digite seu nome completo"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="input-field"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Telefone *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="input-field"
            placeholder="(11) 99999-9999"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CPF *
          </label>
          <input
            type="text"
            required
            value={formData.cpf}
            onChange={(e) => handleInputChange('cpf', e.target.value)}
            className="input-field"
            placeholder="000.000.000-00"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Data de Nascimento *
          </label>
          <input
            type="date"
            required
            value={formData.birthDate}
            onChange={(e) => handleInputChange('birthDate', e.target.value)}
            className="input-field"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <ShieldCheckIcon className="mx-auto h-12 w-12 text-blue-500" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Convênio Médico
        </h2>
        <p className="mt-2 text-gray-600">
          Você possui convênio médico?
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => handleInsuranceToggle(true)}
          className={`px-6 py-3 rounded-lg border-2 transition-colors ${
            formData.hasInsurance
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-300 text-gray-700 hover:border-blue-300'
          }`}
        >
          Sim, tenho convênio
        </button>
        <button
          onClick={() => handleInsuranceToggle(false)}
          className={`px-6 py-3 rounded-lg border-2 transition-colors ${
            !formData.hasInsurance
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-300 text-gray-700 hover:border-blue-300'
          }`}
        >
          Não, particular
        </button>
      </div>

      {formData.hasInsurance && formData.insuranceId && (
        <div className="text-center">
          <p className="text-green-600 font-medium">
            Convênio selecionado: {insurances.find(i => i.id === formData.insuranceId)?.name}
          </p>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Especialidade *
        </label>
        <select
          required
          value={formData.specialtyId}
          onChange={(e) => handleInputChange('specialtyId', e.target.value)}
          className="input-field"
        >
          <option value="">Selecione a especialidade</option>
          {specialties.map((specialty) => (
            <option key={specialty.id} value={specialty.id}>
              {specialty.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <CalendarIcon className="mx-auto h-12 w-12 text-blue-500" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Agendamento
        </h2>
        <p className="mt-2 text-gray-600">
          Escolha sua data e horário preferidos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Data Preferida *
          </label>
          <input
            type="date"
            required
            value={formData.preferredDate}
            onChange={(e) => handleInputChange('preferredDate', e.target.value)}
            className="input-field"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Horário Preferido *
          </label>
          <select
            required
            value={formData.preferredTime}
            onChange={(e) => handleInputChange('preferredTime', e.target.value)}
            className="input-field"
          >
            <option value="">Selecione o horário</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Observações
        </label>
        <textarea
          value={formData.notes}
          onChange={(e) => handleInputChange('notes', e.target.value)}
          className="input-field"
          rows={4}
          placeholder="Descreva brevemente o motivo da consulta ou observações importantes..."
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="text-center space-y-6">
      <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500" />
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Solicitação Enviada!
        </h2>
        <p className="mt-2 text-gray-600">
          Sua solicitação de atendimento foi enviada com sucesso.
        </p>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800">
          <strong>Próximos passos:</strong><br />
          Nossa equipe irá analisar sua solicitação e enviar a confirmação por email em até 24 horas.
          Você receberá todas as informações sobre data, horário e local do atendimento.
        </p>
      </div>

      <button
        onClick={() => window.location.href = '/patient/appointments'}
        className="btn-primary"
      >
        Ver Meus Atendimentos
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`flex items-center ${
                    stepNumber < 3 ? 'flex-1' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= stepNumber
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`flex-1 h-1 mx-4 ${
                        step > stepNumber ? 'bg-blue-500' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>Dados Pessoais</span>
              <span>Convênio</span>
              <span>Agendamento</span>
            </div>
          </div>

          {/* Step Content */}
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}

          {/* Navigation Buttons */}
          {step < 4 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
                className={`btn-secondary ${
                  step === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Voltar
              </button>
              
              <button
                onClick={() => {
                  if (step === 3) {
                    handleSubmit();
                  } else {
                    setStep(step + 1);
                  }
                }}
                className="btn-primary"
              >
                {step === 3 ? 'Enviar Solicitação' : 'Próximo'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Insurance Modal */}
      {showInsuranceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Selecione seu Convênio
            </h3>
            
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {insurances.map((insurance) => (
                <button
                  key={insurance.id}
                  onClick={() => {
                    handleInputChange('insuranceId', insurance.id);
                    setShowInsuranceModal(false);
                  }}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  {insurance.name}
                </button>
              ))}
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowInsuranceModal(false);
                  handleInputChange('hasInsurance', false);
                }}
                className="btn-secondary"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}