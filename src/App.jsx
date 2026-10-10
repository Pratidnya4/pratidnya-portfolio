import { useState } from "react";
import "./App.css";

const skills = [
  { title: "Programming", items: ["Java", "JavaScript", "SQL"] },
  { title: "Java & Backend", items: ["Core Java", "JDBC", "Spring Boot", "Spring MVC", "Spring Data JPA", "REST APIs"] },
  { title: "Frontend", items: ["HTML", "CSS", "React"] },
  { title: "Database & Tools", items: ["MySQL", "SQLite", "Git", "GitHub", "Postman","Docker"] },
];

const projects = [
  {
    name: "Job Portal Application",
    type: "Full-stack development project",
    description:
      "A web-based job portal project focused on connecting job seekers and recruiters. Planned functionality includes user registration and authentication, job management, job search, and job applications.",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "REST APIs", "MySQL", "Postman"],
    github: "", // Add the repository URL when it is available.
    status: "In development",
  },
  {
    name: "Student Course Management System",
    type: "Backend REST API project",
    description:
      "A Spring Boot application for managing students, courses, and student-course relationships through REST APIs, using a layered Controller, Service, and Repository architecture.",
    stack: ["Java", "Spring Boot", "REST APIs", "JPA", "MySQL", "Postman"],
    github: "", // Add the repository URL when it is available.
    status: "Project",
  },
  {
    name: "Airline Management System",
    type: "Java desktop application",
    description:
      "A Java desktop application with a Swing/AWT interface and MySQL database for airline-related workflows, including flight details, passenger information, and booking/cancellation functionality.",
    stack: ["Java", "Swing", "AWT", "JDBC", "MySQL"],
    github: "https://github.com/Pratidnya4/Airline-Management-System",
    status: "Project",
  },
];

const experience = [
  {
    role: "Java Full Stack Intern",
    company: "VibrantMinds Technology Pvt. Ltd. Jan 2026 - Aug 2026",
    details:
      "Java full-stack internship experience. Built enterprise web applications using Java, Spring Boot, Spring MVC, JSP and Servlets, following MVC architecture.Developed RESTful APIs and backend business logic with Spring Framework, including validation and exception handling.Implemented database-driven features with JDBC and MySQL, writing optimized SQL queries.Delivered CRUD operations across multiple application modules (add the number of modules).Implemented authentication and form validation to secure application access.Integrated HTML5, CSS3, Bootstrap and JavaScript frontends with backend REST services.",
  },
  {
    role: "Web Development Intern",
    company: "TechnoHacks Edutech",
    details:
      "Completed a four-week web development internship. Developed responsive web pages using HTML, CSS, and JavaScript.Implemented UI layouts and styling using CSS to improve page responsiveness across devices.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">P</span>
            <span>Pratidnya<span className="brand-dot">.</span></span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="nav-resume" href="/public/Pratidnya_Humane_7447626735 (2).pdf" target="_blank" rel="noreferrer">
              Resume <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              Java Full Stack Developer
            </div>
            <p className="hero-greeting">Hello, I'm</p>
            <h1>Pratidnya <span>Humane</span></h1>
            <h2>Building reliable applications with Java &amp; Spring Boot.</h2>
            <p className="hero-description">
              I'm a Computer Science and Engineering graduate-in-progress focused on
              Java development, backend APIs, databases, and creating useful web applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my projects <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="/public/Pratidnya_Humane_7447626735 (2).pdf" target="_blank" rel="noreferrer">
                View resume <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/Pratidnya4" target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <span className="social-divider">/</span>
              <a
                href="https://www.linkedin.com/in/pratidnya-humane-59854823a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-glow" />
            <div className="photo-frame">
              {!photoFailed ? (
                <img
                  src="/Passport_Pratidnya.png"
                  alt="Pratidnya Humane"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div className="photo-placeholder">
                  <span className="placeholder-initials">PH</span>
                  <span>Add your photo</span>
                  <small>Save it as public/profile.jpg</small>
                </div>
              )}
            </div>
            <div className="floating-card floating-card-top">
              <span className="floating-icon">&lt;/&gt;</span>
              <span><strong>Java</strong><small>Backend development</small></span>
            </div>
            <div className="floating-card floating-card-bottom">
              <span className="floating-icon floating-icon-purple">✦</span>
              <span><strong>Always learning</strong><small>Build · Improve · Repeat</small></span>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="section container" id="about">
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title="Turning ideas into applications."
            description="A little about my background and the kind of work I enjoy."
          />
          <div className="about-grid">
            <div className="about-copy panel">
              <p>
                I'm Pratidnya Humane, a Computer Science and Engineering student building
                my skills toward a career in Java full-stack development. I enjoy learning
                how application components work together—from REST APIs and business logic
                to databases and user interfaces.
              </p>
              <p>
                My current focus is Java, Spring Boot, Spring Data JPA, SQL, and building
                practical projects that help me strengthen my development fundamentals.
              </p>
              <a className="text-link" href="#contact">Let's connect <span aria-hidden="true">→</span></a>
            </div>
            <div className="about-facts">
              <div className="fact-card">
                <span className="fact-icon">⌘</span>
                <div><h3>Backend development</h3><p>Java · Spring Boot · Spring MVC · REST APIs · Microservices</p></div>
              </div>
              <div className="fact-card">
                <span className="fact-icon">▤</span>
                <div><h3>Data &amp; persistence</h3><p>SQL · MySQL · Spring Data JPA · Hibernate</p></div>
              </div>
              <div className="fact-card">
                <span className="fact-icon">✧</span>
                <div><h3>Continuous learning</h3><p>Practice, build, test, and improve</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title="Skills & technologies"
              description="Technologies I've studied or used in my learning and projects."
            />
            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-card" key={group.title} style={{ "--card-index": index }}>
                  <div className="skill-card-top">
                    <span className="skill-number">0{index + 1}</span>
                    <span className="skill-spark">✳</span>
                  </div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects I've worked on"
            description="A selection of learning and development projects. Open repositories to explore available source code."
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name} style={{ "--card-index": index }}>
                <div className="project-card-head">
                  <span className="project-index">0{index + 1} / PROJECT</span>
                  <span className="project-symbol">{["⌘", "▤", "✈"][index]}</span>
                </div>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className="project-footer">
                  <span className="project-status"><span />{project.status}</span>
                  {project.github ? (
                    <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="project-link project-link-muted">Repository to be added</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-tinted" id="experience">
          <div className="container">
            <SectionHeading
              eyebrow="MY JOURNEY"
              title="Experience & education"
              description="The learning experiences that are helping me grow as a developer."
            />
            <div className="journey-grid">
              <div>
                <h3 className="column-title"><span>✳</span> Internship experience</h3>
                <div className="timeline">
                  {experience.map((item) => (
                    <article className="timeline-item" key={item.company}>
                      <span className="timeline-dot" />
                      <p className="timeline-label">INTERNSHIP</p>
                      <h4>{item.role}</h4>
                      <p className="timeline-company">{item.company}</p>
                      <p className="timeline-description">{item.details}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="column-title"><span>⌂</span> Education</h3>
                <article className="education-card">
                  <p className="timeline-label">ENGINEERING</p>
                  <h4>B.E. in Computer Science &amp; Engineering</h4>
                  <p className="timeline-company">Sant Gadge Baba Amravati University</p>
                  <p className="timeline-description">
                    Amravati, Maharashtra. 2021-2025.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div className="contact-panel">
            <div className="contact-decoration contact-decoration-one" />
            <div className="contact-decoration contact-decoration-two" />
            <p className="eyebrow">HAVE AN OPPORTUNITY?</p>
            <h2>Let's build something <span>meaningful.</span></h2>
            <p className="contact-description">
              I'm interested in growing as a Java developer and connecting with people
              working on useful software. Reach out through the links below.
            </p>
            <div className="contact-actions">
              {/* Replace the email placeholder with your preferred public contact email. */}
              <a className="button button-primary" href="mailto:humanepratidnya@gmail.com">
                Email me <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/pratidnya-humane-59854823a/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">P</span><span>Pratidnya<span className="brand-dot">.</span></span></a>
          <p>Designed &amp; built with React. © {new Date().getFullYear()} Pratidnya Humane.</p>
          <a className="back-top" href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
