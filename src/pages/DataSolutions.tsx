import { motion } from 'framer-motion'
import ServiceLayout from '../components/shared/ServiceLayout'
import HeroSection from '../components/shared/HeroSection'
import CaseStudyCard from '../components/shared/CaseStudyCard'
import CTASection from '../components/shared/CTASection'
import type { CaseStudy } from '../types/service'
import './DataSolutions.css'

const coreServices = [
  { title: 'Analysis & Reporting', description: 'Transform raw data into clear, actionable reports your team can actually use.', icon: '#' },
  { title: 'KPI Visualization', description: 'Real-time dashboards that show exactly what matters to your business.', icon: '%' },
  { title: 'Forecasting', description: 'Predictive models based on your historical data to plan with confidence.', icon: '^' },
  { title: 'Data Cleaning', description: 'Untangle messy datasets and build reliable foundations for analysis.', icon: '~' },
]

const useCases = [
  'Customer satisfaction analysis',
  'Financial forecasting & collection prediction',
  'Operational KPI dashboards',
  'Survey processing & insights extraction',
  'Revenue trend analysis',
  'Automated monthly reporting',
]

const caseStudies: CaseStudy[] = [
  {
    metric: '85%',
    metricLabel: 'faster reporting',
    problem: 'Company processing 500+ monthly surveys manually in Excel, taking a full week to generate quarterly insights.',
    solution: 'Automated pipeline: data ingestion, cleaning, analysis, and dashboard generation with scheduled reports.',
    result: 'Quarterly reports generated in hours, not weeks. New insights discovered that manual analysis missed entirely.',
  },
  {
    metric: '95%',
    metricLabel: 'forecast accuracy',
    problem: 'Finance team creating forecasts by gut feeling and basic spreadsheet projections, leading to budget overruns.',
    solution: 'Data-driven forecasting model incorporating historical trends, seasonality, and external factors.',
    result: 'Budget predictions within 5% accuracy. Management now trusts the numbers for strategic planning.',
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

export default function DataSolutions() {
  return (
    <ServiceLayout>
      <HeroSection
        statement="Turn noise into insights,"
        highlight="data into decisions"
        subtext="110+ projects in financial analysis and operations. I help businesses stop guessing and start deciding with clarity."
      />

      {/* Core Services */}
      <section className="service-section">
        <div className="container">
          <div className="service-section__header">
            <span className="service-section__label">Core Services</span>
            <h2 className="service-section__title">Data that drives decisions</h2>
          </div>

          <motion.div
            className="data-services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {coreServices.map((service) => (
              <motion.div key={service.title} className="data-service-card" variants={itemVariants}>
                <span className="data-service-card__icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases + Credibility */}
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
              <span className="service-section__label">Use Cases</span>
              <h2>Questions your data can answer</h2>
              <p>
                From customer satisfaction to collection prediction, I've helped
                corporate teams extract insights from their data that they didn't
                know existed.
              </p>
              <ul className="solution-features">
                {useCases.map((u) => (
                  <li key={u}>{u}</li>
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
              <div className="data-credibility">
                <div className="data-credibility__stat">
                  <span className="data-credibility__value">110+</span>
                  <span className="data-credibility__label">Projects in financial & operational analysis</span>
                </div>
                <div className="data-credibility__divider" />
                <p className="data-credibility__text">
                  Real experience processing hundreds of surveys, building financial
                  forecasting models, and creating executive dashboards for corporate
                  decision-making.
                </p>
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
            <h2 className="service-section__title">From data chaos to clarity</h2>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={i} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="What question are your data not answering?"
        description="Let's talk about what insights are hiding in your data — and how to unlock them."
        buttonText="Let's find out"
      />
    </ServiceLayout>
  )
}
