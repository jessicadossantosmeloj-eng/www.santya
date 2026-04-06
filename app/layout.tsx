import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Santya | Plataforma comercial premium para empresas',
  description:
    'CRM, agenda, tarefas, fechamentos, indicadores, notificações e visão executiva em uma plataforma comercial profissional.',
  icons: {
    icon: '/santya-symbol.png',
  },
  openGraph: {
    title: 'Santya | Plataforma comercial premium para empresas',
    description:
      'Sistema comercial com CRM, agenda, tarefas, fechamentos, diretoria e automações para operações empresariais.',
    images: ['/santya-logo-full.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
