import type { ReactNode } from 'react'
import './ServiceLayout.css'

interface ServiceLayoutProps {
  children: ReactNode
}

export default function ServiceLayout({ children }: ServiceLayoutProps) {
  return (
    <main className="service-page">
      {children}
    </main>
  )
}
