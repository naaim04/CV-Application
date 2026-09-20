// Resume owns NO state. It reads the three section objects and displays them.
function Resume({ general, education, experience, projects }) {
  return (
    <main className="resume">
      <header className="resume-header">
        <h1 className="resume-name">{general.name}</h1>
        <p>
          {general.email}
          {general.email && general.phone ? ' · ' : ''}
          {general.phone}
        </p>
      </header>

      <div className="resume-body">
        <section className="resume-section">
          <h2>Education</h2>
          <div className="edu-row">
            <span>{education.schoolName}</span>
            <span>{education.location}</span>
          </div>
          <div className="edu-row">
            <span>{education.title}</span>
            <span>
              {education.dateStart}
              {education.dateStart && education.dateEnd ? ' to ' : ''}
              {education.dateEnd}
            </span>
          </div>
        </section>
      </div>

      <div className="resume-body">
        <section className="resume-section">
          <h2>Experience</h2>
          <div className="edu-row">
            <span>{experience.position}</span>
            <span>
              {experience.jobDateStart}
              {experience.jobDateStart && experience.jobDateEnd ? ' to ' : ''}
              {experience.jobDateEnd}
            </span>
          </div>
          <div className="edu-row">
            <span>{experience.companyName}</span>
            <span>{experience.jobLocation}</span>
          </div>
          {/* One <li> per non-empty bullet in experience.expTasks */}
          <ul className="bullets">
            {experience.expTasks
              .filter((task) => task)
              .map((task, index) => (
                <li key={index}>{task}</li>
              ))}
          </ul>
        </section>
      </div>

      <div className="resume-body">
        <section className="resume-section">
          <h2>Projects</h2>
          <div className="edu-row">
            <span>{projects.projectName}</span>
            <span>
              {projects.projectDateStart}
              {projects.projectDateStart && projects.projectDateEnd ? ' to ' : ''}
              {projects.projectDateEnd}
            </span>
          </div>
          {/* One <li> per non-empty bullet in projects.projTasks */}
          <ul className="bullets">
            {projects.projTasks
              .filter((task) => task)
              .map((task, index) => (
                <li key={index}>{task}</li>
              ))}
          </ul>
        </section>
      </div>
    </main>
  )
}

export default Resume
