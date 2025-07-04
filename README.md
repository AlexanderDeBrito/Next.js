# CRM Clínicas

Sistema completo de gestão para clínicas médicas, odontológicas e estéticas.

## Funcionalidades

- **Multi-perfil**: Suporte para administradores, atendentes, profissionais e pacientes
- **Módulos especializados**: Clínicas médicas, odontológicas e estéticas
- **Gestão de profissionais**: Cadastro de médicos, dentistas e esteticistas
- **Sistema de convênios**: Gerenciamento de planos de saúde
- **Agendamento online**: Solicitação de atendimentos pelos pacientes
- **Dashboard completo**: Métricas e KPIs em tempo real

## Tecnologias

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Prisma ORM, PostgreSQL
- **UI**: Heroicons, componentes customizados
- **Estilização**: Tailwind CSS com design system personalizado

## Como executar

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure o banco de dados no arquivo `.env`
4. Execute as migrações: `npm run db:push`
5. Inicie o servidor: `npm run dev`

## Estrutura do projeto

```
app/
├── components/          # Componentes reutilizáveis
├── dashboard/          # Páginas do dashboard
├── patient/           # Portal do paciente
├── ui/               # Estilos globais
└── page.tsx          # Página inicial

lib/
└── prisma.ts         # Configuração do Prisma

prisma/
└── schema.prisma     # Schema do banco de dados
```