import { motion } from 'framer-motion'
import ServiceLayout from '../components/shared/ServiceLayout'
import HeroSection from '../components/shared/HeroSection'
import CaseStudyCard from '../components/shared/CaseStudyCard'
import CTASection from '../components/shared/CTASection'
import type { CaseStudy } from '../types/service'
import './WebDevelopment.css'

const painPoints = [
  {
    icon: '!',
    title: "Your site doesn't reflect your quality",
    description: "You invest in your service but your digital presence tells a different story. Potential clients leave before they understand what you do.",
  },
  {
    icon: '~',
    title: "Your site is slow and outdated",
    description: "Built on a generic template years ago, it doesn't work well on mobile, loads slowly, and isn't converting visitors into clients.",
  },
  {
    icon: '?',
    title: "You need more than a pretty page",
    description: "You need integrations, dashboards, client portals, or automation — not just a brochure. But you're told it's too expensive or complex.",
  },
]

const techStack = [
  'React', 'TypeScript', 'Node.js', 'Next.js',
  'Vite', 'REST APIs', 'PostgreSQL', 'MongoDB',
]

const caseStudies: CaseStudy[] = [
  {
    metric: '3x',
    metricLabel: 'lead conversion',
    problem: 'Tourism business with a WordPress site that loaded in 8+ seconds. Mobile experience was broken, losing 70% of traffic.',
    solution: 'Custom React app with optimized images, mobile-first design, and direct booking integration.',
    result: 'Load time reduced to 1.2s. Mobile engagement up 180%. Leads tripled in 2 months.',
  },
  {
    metric: '40%',
    metricLabel: 'time saved weekly',
    problem: 'Small consulting firm managing client projects across email, spreadsheets, and a legacy PHP system.',
    solution: 'Custom web portal with project tracking, automated reports, and client-facing dashboard.',
    result: 'Team saved 40% of admin time. Client satisfaction scores improved significantly.',
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

export default function WebDevelopment() {
  return (
    <ServiceLayout>
      <HeroSection
        statement="We transform ideas into"
        highlight="digital experiences"
        subtext="We don't build pretty websites. We build solutions that solve business problems, convert visitors into clients, and grow with your operation."
      />

      {/* Pain Points */}
      <section className="service-section">
        <div className="container">
          <div className="service-section__header">
            <span className="service-section__label">The Problem</span>
            <h2 className="service-section__title">Sound familiar?</h2>
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
              <span className="service-section__label">The ThinkTank Approach</span>
              <h2>Modern tools. Real solutions.</h2>
              <p>
                Every project starts with understanding your business problem, not picking a template.
                We use modern technologies that deliver speed, scalability, and the flexibility
                to integrate with your existing systems.
              </p>
              <ul className="solution-features">
                <li>Custom React applications, not generic templates</li>
                <li>Mobile-first, performance-optimized builds</li>
                <li>API integrations with your existing tools</li>
                <li>Client portals and admin dashboards</li>
                <li>SEO foundations built in from day one</li>
              </ul>
            </motion.div>

            <motion.div
              className="solution-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="webdev-stack">
                <span className="webdev-stack__label">Tech Stack</span>
                <div className="tech-badges">
                  {techStack.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="webdev-stack__stats">
                  <div className="webdev-stack__stat">
                    <span className="webdev-stack__stat-value">{'<'}1.5s</span>
                    <span className="webdev-stack__stat-label">avg load time</span>
                  </div>
                  <div className="webdev-stack__stat">
                    <span className="webdev-stack__stat-value">100%</span>
                    <span className="webdev-stack__stat-label">responsive</span>
                  </div>
                  <div className="webdev-stack__stat">
                    <span className="webdev-stack__stat-value">90+</span>
                    <span className="webdev-stack__stat-label">lighthouse score</span>
                  </div>
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
            <h2 className="service-section__title">Real projects, real impact</h2>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={i} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's build something that works"
        description="Tell me about your project. No generic pitches — just a conversation about what you need."
        buttonText="Start a conversation"
      />
    </ServiceLayout>
  )
}
