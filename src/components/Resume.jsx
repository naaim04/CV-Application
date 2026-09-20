// Resume owns NO state. It reads the section objects and displays them,
// styled after the "Jake's Resume" template.

// Small helper: join a start/end date into "start – end" (or whichever exists).
function range(a, b) {
  if (a && b) return `${a} – ${b}`
  return a || b || ''
}

function Resume({ general, education, experience, projects }) {
  return (
    <main className="resume">
      <header className="resume-header">
        <h1 className="resume-name">{general.name}</h1>
        <p className="contact">
          {[general.phone, general.email].filter(Boolean).join('  |  ')}
        </p>
      </header>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="entry">
          <div className="entry-row">
            <span className="entry-title">{education.schoolName}</span>
            <span className="entry-meta">{education.location}</span>
          </div>
          <div className="entry-row">
            <span className="entry-sub">{education.title}</span>
            <span className="entry-sub-meta">
              {range(education.dateStart, education.dateEnd)}
            </span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="entry">
          <div className="entry-row">
            <span className="entry-title">{experience.position}</span>
            <span className="entry-sub-meta">{experience.jobLocation}</span>
          
          </div>
          <div className="entry-row">
            <span className="entry-sub">{experience.companyName}</span>
            <span className="entry-meta">
              {range(experience.jobDateStart, experience.jobDateEnd)}
            </span>
          </div>
          <ul className="bullets">
            {experience.expTasks
              .filter((task) => task)
              .map((task, index) => (
                <li key={index}>{task}</li>
              ))}
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        {/* One entry block per project in the array */}
        {projects.map((project, index) => (
          <div className="entry" key={index}>
            <div className="entry-row">
              <span className="entry-title">{project.projectName}</span>
              <span className="entry-meta">
                {range(project.projectDateStart, project.projectDateEnd)}
              </span>
            </div>
            <ul className="bullets">
              {project.projTasks
                .filter((task) => task)
                .map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Resume
