import { motion } from 'framer-motion'
import ServiceLayout from '../components/shared/ServiceLayout'
import HeroSection from '../components/shared/HeroSection'
import CTASection from '../components/shared/CTASection'
import './AudiovisualProduction.css'

const services = [
  { title: 'Video Marketing', description: 'Strategic video content designed to convert viewers into customers.' },
  { title: 'Social Media Content', description: 'Short-form video optimized for engagement across platforms.' },
  { title: 'Technical Tutorials', description: 'Clear, professional video documentation for products and processes.' },
  { title: 'Tourism & Hospitality', description: 'Cinematic content that showcases destinations and experiences.' },
]

const processSteps = [
  { phase: '01', title: 'Pre-production', description: 'Strategy, scripting, storyboarding, and planning.' },
  { phase: '02', title: 'Production', description: 'Professional filming with modern equipment and techniques.' },
  { phase: '03', title: 'Post-production', description: 'Editing, color grading, sound design, and final delivery.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function AudiovisualProduction() {
  return (
    <ServiceLayout>
      <HeroSection
        statement="Content that connects"
        highlight="and converts"
        subtext="We combine technical knowledge with visual narrative. Not just beautiful videos — content that serves your business objectives."
      />

      {/* Services Grid */}
      <section className="service-section">
        <div className="container">
          <div className="service-section__header">
            <span className="service-section__label">What We Produce</span>
            <h2 className="service-section__title">Visual solutions for real goals</h2>
          </div>

          <motion.div
            className="av-services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {services.map((service) => (
              <motion.div key={service.title} className="av-service-card" variants={itemVariants}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="service-section">
        <div className="container">
          <div className="service-section__header">
            <span className="service-section__label">Our Process</span>
            <h2 className="service-section__title">From concept to delivery</h2>
          </div>

          <div className="av-timeline">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.phase}
                className="av-timeline__step"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <span className="av-timeline__phase">{step.phase}</span>
                <div>
                  <h3 className="av-timeline__title">{step.title}</h3>
                  <p className="av-timeline__desc">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="service-section">
        <div className="container">
          <motion.div
            className="av-differentiator"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-section__label">Our Edge</span>
            <h2>Technology + Visual Narrative</h2>
            <p>
              We understand both the technical side and the storytelling craft.
              Based in Riviera Maya with experience in tourism, tech, and business content,
              we create videos that aren't just beautiful — they drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="What story does your brand need to tell?"
        description="From concept to final cut, let's create content that moves your audience."
        buttonText="Start your project"
      />
    </ServiceLayout>
  )
}
