import { motion } from 'framer-motion'
import './CTASection.css'

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  href?: string
}

export default function CTASection({ title, description, buttonText, href = 'mailto:thinktankcreations@proton.me' }: CTASectionProps) {
  return (
    <section className="cta section">
      <div className="container">
        <motion.div
          className="cta__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="cta__title">{title}</h2>
          <p className="cta__description">{description}</p>
          <a href={href} className="cta__button">
            {buttonText}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
