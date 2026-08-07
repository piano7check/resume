import './App.css'
import profileImage from './assets/profile.jpg'
import Section from './components/Section'
import {
  academicExperience,
  education,
  hobbies,
  languages,
  professionalExperience,
  profile,
  skills,
} from './data/resumeData'

function App() {
  return (
    <main className="resume-shell">
      <header className="hero-card">
        <div className="hero-content">
          <img className="avatar" src={profileImage} alt={profile.name} />
          <div>
            <p className="eyebrow">CURRÍCULUM VITAE</p>
            <h1>{profile.name}</h1>
            <h2>{profile.role}</h2>
            <p className="summary">{profile.summary}</p>
          </div>ingles
        </div>
        <div className="contact-card">
          {profile.contact.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </header>

      <Section title="Perfil Profesional">
        <p className="paragraph">
          Ingeniero de Sistemas y Full Stack Developer con experiencia en desarrollo de aplicaciones empresariales,
          arquitecturas de microservicios, APIs REST, Docker y Kubernetes. Especializado en Java, Spring Boot,
          React y Angular, aplicando principios SOLID, DDD, Arquitectura Hexagonal y metodologías ágiles.
        </p>
      </Section>

      <section className="section-card grid-section">
        <div>
          <h3>Competencias Técnicas</h3>
          <ul className="pill-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <Section title="Formación Profesional">
        <ul className="stack-list">
          {education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Experiencia Profesional">
        {professionalExperience.map((item) => (
          <article key={`${item.role}-${item.company}`} className="item-card">
            <div className="item-header">
              <strong>{item.role}</strong>
              <span>{item.period}</span>
            </div>
            <p className="company">{item.company}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </Section>

      <Section title="Experiencia Académica">
        <ul className="stack-list">
          {academicExperience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <section className="section-card grid-section">
        <div>
          <h3>Idiomas</h3>
          <ul className="pill-list">
            {languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <h3>Hobbies</h3>
          <ul className="pill-list">
            {hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App
