import { motion } from 'framer-motion'
import ServiceLayout from '../components/shared/ServiceLayout'
import HeroSection from '../components/shared/HeroSection'
import CaseStudyCard from '../components/shared/CaseStudyCard'
import CTASection from '../components/shared/CTASection'
import type { CaseStudy } from '../types/service'
import './ProcessAutomation.css'

const painPoints = [
  {
    icon: '#',
    title: 'Drowning in spreadsheets',
    description: 'Your team spends hours copying data between Excel files, fixing formulas, and manually creating reports that should be automatic.',
  },
  {
    icon: '!',
    title: 'Human errors everywhere',
    description: 'Manual data entry means mistakes. One wrong cell in a financial report can cascade into costly decisions.',
  },
  {
    icon: '~',
    title: 'Legacy systems holding you back',
    description: 'VBA macros from 2010, Access databases nobody understands, or processes that depend on one person who might leave.',
  },
]

const specialties = [
  'VBA to web migration',
  'Automated email reports & alerts',
  'Financial dashboards & forecasting',
  'Data pipeline automation',
  'Legacy system modernization',
  'Custom workflow engines',
]

const caseStudies: CaseStudy[] = [
  {
    metric: '70%',
    metricLabel: 'time reduction',
    problem: 'Finance team spent 3 days per month manually consolidating reports from 12 Excel files across departments.',
    solution: 'Automated data pipeline that consolidates sources, validates data, and generates formatted reports on schedule.',
    result: 'Monthly reporting reduced from 3 days to 4 hours. Zero manual errors since deployment.',
  },
  {
    metric: '110+',
    metricLabel: 'projects completed',
    problem: 'Corporate operations team managing surveys, forecasts, and KPI tracking across disconnected tools.',
    solution: 'Integrated system replacing scattered Excel files with centralized dashboards and automated alerting.',
    result: 'Real-time visibility into operations. Management now makes decisions based on current data, not last month\'s report.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function ProcessAutomation() {
  return (
    <ServiceLayout>
      <HeroSection
        statement="From spreadsheets to"
        highlight="intelligent systems"
        subtext="Your data has stories to tell. I help businesses stop wrestling with manual processes and start making decisions with clarity and confidence."
      />

      {/* Pain Points */}
      <section className="service-section">
        <div className="container">
          <div className="service-section__header">
            <span className="service-section__label">The Problem</span>
            <h2 className="service-section__title">The hidden cost of manual work</h2>
          </div>

          <motion.div
            className="pain-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {painPoints.map((point) => (
              <motion.div key={point.title} className="pain-card" variants={itemVariants}>
                <span className="pain-card__icon">{point.icon}</span>
                <h3 className="pain-card__title">{point.title}</h3>
                <p className="pain-card__description">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Before / After */}
      <section className="service-section">
        <div className="container">
          <div className="automation-comparison">
            <motion.div
              className="automation-comparison__before"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="automation-comparison__label automation-comparison__label--before">Before</span>
              <ul className="automation-comparison__list">
                <li>12 disconnected Excel files</li>
                <li>3 days of manual consolidation</li>
                <li>Copy-paste between systems</li>
                <li>"Which version is the latest?"</li>
                <li>Reports outdated on arrival</li>
              </ul>
            </motion.div>

            <div className="automation-comparison__arrow">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            <motion.div
              className="automation-comparison__after"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="automation-comparison__label automation-comparison__label--after">After</span>
              <ul className="automation-comparison__list">
                <li>Single source of truth</li>
                <li>Real-time automated reports</li>
                <li>Data flows between systems</li>
                <li>Version control built-in</li>
                <li>Live dashboards, always current</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="service-section">
        <div className="container">
          <div className="solution-block">
            <motion.div
              className="solution-block__text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="service-section__label">My Specialties</span>
              <h2>Tested in production. Proven at scale.</h2>
              <p>
                With 110+ projects in corporate environments — financial analysis,
                operational forecasting, survey processing — I've seen every flavor of
                spreadsheet chaos. The solutions I build aren't theoretical; they come
                from real-world experience.
              </p>
              <ul className="solution-features">
                {specialties.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="solution-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="automation-metrics">
                <div className="automation-metrics__item">
                  <span className="automation-metrics__value">110+</span>
                  <span className="automation-metrics__label">projects completed</span>
                </div>
                <div className="automation-metrics__item">
                  <span className="automation-metrics__value">70%</span>
                  <span className="automation-metrics__label">avg time reduction</span>
                </div>
                <div className="automation-metrics__item">
                  <span className="automation-metrics__value">0</span>
                  <span className="automation-metrics__label">manual errors post-deploy</span>
                </div>
                <div className="automation-metrics__item">
                  <span className="automation-metrics__value">4+</span>
                  <span className="automation-metrics__label">years corporate experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="service-section">
        <div className="container">
          <div className="service-section__header">
            <span className="service-section__label">Results</span>
            <h2 className="service-section__title">From chaos to clarity</h2>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={i} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="What process is eating your team's time?"
        description="Tell me about the spreadsheet, the legacy system, or the manual process. I'll tell you what's possible."
        buttonText="Let's automate it"
      />
    </ServiceLayout>
  )
}
