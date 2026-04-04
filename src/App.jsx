import { useEffect, useState } from 'react'
import './App.css'

function WhatsAppIcon() {
  return (
    <svg className="button-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.2a8.6 8.6 0 0 0-7.4 13l-1.2 4.1 4.2-1.1a8.6 8.6 0 1 0 4.4-16Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.8c.2-.5.5-.5.7-.5h.6c.2 0 .4 0 .6.5l.5 1.3c.1.3.1.5-.1.8l-.4.5c-.1.1-.2.2-.1.4.2.4.7 1.2 1.5 1.9.9.8 1.7 1.1 2.1 1.3.2.1.3 0 .4-.1l.5-.6c.2-.2.4-.2.7-.1l1.3.6c.4.2.4.4.4.6v.6c0 .2 0 .5-.4.7-.4.2-1 .4-1.7.2-.7-.2-1.5-.5-2.7-1.3a10.1 10.1 0 0 1-2.4-2.2c-.7-.9-1.1-1.7-1.3-2.4-.2-.7 0-1.3.2-1.6Z"
        fill="currentColor"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="button-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="button-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m4 8 8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const services = [
  {
    title: 'Diagnostico técnico',
    description:
      'Identificamos la causa real de la falla para que no gastes dinero a ciegas y sepas cuál es la mejor solucion para tu equipo.',
  },
  {
    title: 'Mantenimiento preventivo y correctivo',
    description:
      'Reducimos riesgos, corregimos problemas existentes y ayudamos a prolongar la vida útil de tus equipos con intervenciones oportunas.',
  },
  {
    title: 'Optimización de rendimiento',
    description:
      'Mejoramos configuración, limpieza y estabilidad para que el computador responda mejor en el trabajo, estudio o uso diario.',
  },
  {
    title: 'Soporte para PyMe',
    description:
      'Brindamos acompañamiento técnico a pequeñas y medianas empresas que necesitan continuidad, orden y una atención más profesional.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Diagnóstico inicial',
    description:
      'Evaluamos el equipo o requerimiento para identificar fallas, riesgos y necesidades reales.',
  },
  {
    step: '02',
    title: 'Informe técnico',
    description:
      'Entregamos un diagnóstico claro con hallazgos, estado general y recomendaciones priorizadas.',
  },
  {
    step: '03',
    title: 'Propuesta de solución',
    description:
      'Presentamos una solución con mano de obra, posibles repuestos y mejoras sugeridas.',
  },
  {
    step: '04',
    title: 'Implementación',
    description:
      'Ejecutamos el servicio aprobado y dejamos el equipo listo para su uso.',
  },
]

const audiences = [
  'Equipos estables que evitan interrupciones en la operación diaria.',
  'Soluciones para quienes dependen de su computador para trabajar.',
  'Mejoramos el rendimiento y solucionamos fallas en tus equipos.',
]

const serviceBenefits = [
  {
    title: 'Diagnóstico claro desde el inicio',
    description:
      'Sabes exactamente qué tiene tu equipo antes de invertir en reparaciones.',
  },
  {
    title: 'Recomendaciones técnicas reales',
    description: 'Soluciones adaptadas a tu caso, sin cosas innecesarias.',
  },
  {
    title: 'Proceso ordenado y profesional',
    description: 'Nada improvisado: cada paso tiene sentido.',
  },
  {
    title: 'Mejor rendimiento, estabilidad y vida útil del computador',
    description: 'Equipos mas rápidos, seguros y confiables en el día a día.',
  },
]

const trustReasons = [
  'Transparencia total en cada diagnóstico',
  'Recomendaciones basadas en tu necesidad real, no en incrementar ventas.',
  'Procesos organizados y profesionales',
  'Prevención como parte del servicio, no como extra',
  'Atención tanto a empresas como a usuarios particulares',
]

const faqs = [
  {
    question: '¿Que tipo de equipos revisan?',
    answer:
      'Realizamos revisión de equipos de computo tanto de escritorio como portátiles, evaluando componentes de hardware y software para identificar fallas, problemas de rendimiento o posibles mejoras.',
  },
  {
    question: '¿Atienden únicamente a  empresas o también personas particulares?',
    answer:
      'Brindamos servicio tanto a empresas como a usuarios particulares. Nos adaptamos a cada necesidad, desde equipos de uso personal hasta entornos empresariales.',
  },
  {
    question: '¿Cómo funciona el diagnóstico técnico?',
    answer:
      'Uno de nuestros técnicos se pondra en contacto para evaluar tu caso, ya sea de forma remota o presencial, dependiendo del tipo de requerimiento. Durante el diagnóstico analizamos el estado del equipo, identificamos posibles fallas o mejoras y entregamos un informe claro con las recomendaciones necesarias.',
  },
  {
    question: '¿El diagnóstico tiene costo?',
    answer:
      'Sí, el diagnóstico técnico tiene un costo que varia segun la cantidad de equipos a revisar. Posteriormente, si se requiere, se entrega una propuesta comercial con las soluciones recomendadas, incluyendo mano de obra y posibles repuestos, la cual se cotiza de manera independiente al diagnóstico.',
  },
  {
    question: '¿Cuánto tiempo tarda el servicio?',
    answer:
      'El tiempo de diagnóstico puede variar dependiendo del estado y la cantidad de equipos. Sin embargo, de forma general, se realiza en el menor tiempo posible para no afectar la operación del usuario o la empresa.',
  },
  {
    question: '¿Cómo puedo solicitar una revision?',
    answer:
      'Puedes contactarnos a través de nuestras redes sociales o medios de contacto disponibles, y uno de nuestros técnicos te atenderá para coordinar la revisión según tu necesidad.',
  },
  {
    question: '¿Por qué elegir Frangit Systems?',
    answer:
      'Porque ofrecemos un diagnóstico claro, soluciones reales y un enfoque profesional orientado a mejorar el rendimiento y la vida útil de tus equipos.',
  },
]

const whatsappLeadUrl =
  'https://wa.me/573244109681?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20diagnostico%20de%20equipos%20de%20Frangit%20Systems.%20%C2%BFPodrian%20brindarme%20mas%20informacion%3F'

const pages = [
  { key: 'inicio', label: 'Inicio' },
  { key: 'sobre-nosotros', label: 'Sobre nosotros' },
  { key: 'servicios', label: 'Servicios' },
  { key: 'preguntas', label: 'Preguntas frecuentes' },
  { key: 'contacto', label: 'Contacto' },
]

function getPageFromHash() {
  const value = window.location.hash.replace('#/', '').trim()
  return pages.some((page) => page.key === value) ? value : 'inicio'
}

function PageFrame({ eyebrow, title, description, children, accent = false }) {
  return (
    <section className={`content-section${accent ? ' content-section--accent' : ''}`}>
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState(() => getPageFromHash())
  const [showWhatsAppHint, setShowWhatsAppHint] = useState(true)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowWhatsAppHint(false)
    }, 7000)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const nextHash = `#/${currentPage}`

    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash
    }
  }, [currentPage])

  const handleNavigate = (pageKey) => {
    setCurrentPage(pageKey)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleFloatingWhatsApp = () => {
    window.open(whatsappLeadUrl, '_blank', 'noopener,noreferrer')
  }

  const renderPage = () => {
    if (currentPage === 'inicio') {
      return (
        <>
          <section className="hero-section">
            <div className="hero-copy">
              <p className="eyebrow">Frangit Systems - IT & Digital Services</p>
              <h1>
                Diagnosticamos y solucionamos problemas de rendimiento antes de que
                afecten tu trabajo o tu empresa.
              </h1>
              <p className="hero-copy__lead">
                Ofrecemos soluciones claras, seguras y adaptadas a cada necesidad. 
                Contamos con experiencia en entornos empresariales y atencion a usuarios particulares.
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  className="button button--primary"
                  onClick={() => handleNavigate('contacto')}
                >
                  Solicitar diagnóstico
                </button>
                <button
                  type="button"
                  className="button button--ghost"
                  onClick={() => handleNavigate('servicios')}
                >
                  Ver servicios
                </button>
              </div>

              <ul className="hero-metrics" aria-label="Fortalezas principales">
                <li>
                  <strong>Diagnóstico claro</strong>
                  <span>Identificamos exactamente qué tiene tu equipo y qué necesita.</span>
                </li>
                <li>
                  <strong>Sin sobrecostos</strong>
                  <span>Te proponemos solo lo necesario, sin sobrecostos</span>
                </li>
                <li>
                  <strong>Prevencion real</strong>
                  <span>Evitamos fallas antes de que afecten tu trabajo</span>
                </li>
              </ul>
            </div>

            <div className="hero-visual">
              <div className="hero-visual__card">
                <img
                  className="hero-visual__image"
                  src="/brand/hero-vertical.png"
                  alt="Identidad visual de Frangit Systems"
                />
              </div>
            </div>
          </section>

          <section className="trust-band" aria-label="Herramientas y experiencia">
            <p>
              Experiencia en entornos corporativos: Microsoft 365, Microsoft Entra ID y
              soporte tecnico profesional.
            </p>
          </section>

          <PageFrame
            eyebrow="A quién ayudamos"
            title="Soluciones pensadas para quienes dependen de su equipo."
            description="En Frangit Systems trabajamos tanto con empresas como con usuarios particulares que necesitan equipos confiables, estables y listos para trabajar sin interrupciones."
          >
            <ul className="audience-list">
              {audiences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </PageFrame>

          <PageFrame
            eyebrow="Modelo de trabajo"
            title="Un proceso claro que genera confianza"
            description="Trabajamos con un enfoque estructurado que permite identificar problemas, proponer soluciones claras y ejecutar cada servicio de forma organizada y transparente."
          >
            <div className="process-list">
              {processSteps.map((item) => (
                <article className="process-card" key={item.step}>
                  <span className="process-card__step">{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </PageFrame>
        </>
      )
    }

    if (currentPage === 'sobre-nosotros') {
      return (
        <PageFrame
          eyebrow="Sobre nosotros"
          title="Soporte técnico con enfoque profesional"
          accent
        >
          <div className="about-grid">
            <div className="about-copy">
              <p>
                En Frangit Systems brindamos soluciones tecnológicas con un enfoque profesional y preventivo, ayudando
                 a empresas y usuarios a mantener sus equipos funcionando de forma estable y segura.
              </p>
              <p>
                Nuestra experiencia en soporte técnico y entornos
                corporativos nos permite entender rápidamente cada necesidad y ofrecer soluciones claras, sin complicaciones innecesarias.
              </p>
              <p>
                Nos enfocamos en una comunicacion directa y transparente, para que cada diagnóstico
                 y recomendación sea fácil de entender, para así tomar decisiones con confianza.
              </p>
            </div>

            <div>
              <p className="eyebrow eyebrow--small">¿Qué puedes esperar de Frangit Systems?</p>
              <ul className="audience-list audience-list--compact">
                {serviceBenefits.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="trust-mini">
            <p className="eyebrow eyebrow--small">Por que confiar en nosotros?</p>
            <ul className="trust-mini__list">
              {trustReasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </PageFrame>
      )
    }

    if (currentPage === 'servicios') {
      return (
        <PageFrame
          eyebrow="Servicios principales"
          title="Una oferta técnica pensada para resolver hoy y prevenir problemas después."
          description="La meta no es solo reparar un equipo, sino mejorar su estado general y ayudarte a tomar mejores decisiones tecnológicas"
        >
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </PageFrame>
      )
    }

    if (currentPage === 'preguntas') {
      return (
        <PageFrame
          eyebrow="Preguntas frecuentes"
          title="Lo que necesitas saber"
          description="Queremos que tomes una decisión con confianza. Estas son las respuestas a las dudas más frecuentes de nuestros clientes."
        >
          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </PageFrame>
      )
    }

    return (
      <PageFrame
        eyebrow="Contacto"
        title="Cuéntanos qué problema tiene tu equipo"
        description="Cuéntanos qué está pasando y te damos una orientacion clara sobre lo que necesita tu equipo. Puedes escribirnos por WhatsApp para una respuesta más rapida, o contactarnos por nuestros otros canales."
      >
        <div className="contact-card">
          <div className="hero-actions">
            <a
              className="button button--primary"
              href={whatsappLeadUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              Escribenos al WhatsApp
            </a>
            <a
              className="button button--ghost"
              href="https://www.instagram.com/frangitsystems/?hl=es"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
              Ver Instagram
            </a>
            <a
              className="button button--ghost"
              href="mailto:frangitsystems@gmail.com"
            >
              <MailIcon />
              Enviar correo
            </a>
          </div>
        </div>
      </PageFrame>
    )
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <button
          type="button"
          className="topbar__logo-button"
          onClick={() => handleNavigate('inicio')}
          aria-label="Ir a la pagina de inicio"
        >
          <img
            className="topbar__logo"
            src="/brand/logo-main.png"
            alt="Frangit Systems"
          />
        </button>
        <nav className="topbar__nav" aria-label="Secciones principales">
          {pages.map((page) => (
            <button
              key={page.key}
              type="button"
              className={`nav-pill${currentPage === page.key ? ' nav-pill--active' : ''}`}
              onClick={() => handleNavigate(page.key)}
            >
              {page.label}
            </button>
          ))}
        </nav>
      </header>

      {renderPage()}

      <div
        className="floating-whatsapp-wrap"
        onMouseEnter={() => setShowWhatsAppHint(true)}
        onMouseLeave={() => setShowWhatsAppHint(false)}
      >
        <div className={`floating-whatsapp__hint${showWhatsAppHint ? ' is-visible' : ''}`}>
          <span className="floating-whatsapp__hint-dot" aria-hidden="true"></span>
          Necesitas ayuda?
        </div>

        <button
          type="button"
          className="floating-whatsapp"
          onClick={handleFloatingWhatsApp}
          aria-label="Abrir contacto por WhatsApp"
        >
          <img
            className="floating-whatsapp__image"
            src="/brand/WhatsappPng.png"
            alt=""
          />
        </button>
      </div>
    </main>
  )
}

export default App
