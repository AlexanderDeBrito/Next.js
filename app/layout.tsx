import './globals.css'

export const metadata = {
  title: 'CRM Clínicas - Sistema de Gestão',
  description: 'Sistema completo para gestão de clínicas médicas, odontológicas e estéticas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}