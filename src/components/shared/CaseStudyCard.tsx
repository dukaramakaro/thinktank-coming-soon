import { motion } from 'framer-motion'
import type { CaseStudy } from '../../types/service'
import './CaseStudyCard.css'

interface CaseStudyCardProps {
  study: CaseStudy
  index: number
}

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <motion.div
      className="case-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="case-card__metric">
        <span className="case-card__metric-value">{study.metric}</span>
        <span className="case-card__metric-label">{study.metricLabel}</span>
      </div>

      <div className="case-card__content">
        <div className="case-card__row">
          <span className="case-card__label">Problem</span>
          <p>{study.problem}</p>
        </div>
        <div className="case-card__row">
          <span className="case-card__label">Solution</span>
          <p>{study.solution}</p>
        </div>
        <div className="case-card__row">
          <span className="case-card__label">Result</span>
          <p className="case-card__result">{study.result}</p>
        </div>
      </div>
    </motion.div>
  )
}
