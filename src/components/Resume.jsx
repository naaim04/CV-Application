// Resume owns NO state. It just displays the shared values it receives as props.
// Whenever App's state changes, this re-renders with the new values.
function Resume({
  name,
  email,
  phone,
  schoolName,
  title,
  dateStart,
  dateEnd,
  location,
  companyName,
  position,
  expTasks,
  jobDateStart,
  jobDateEnd,
}) {
  return (
    <main className="resume">
      <header className="resume-header">
        <h1>{name}</h1>
        <p>
          {email}
          {email && phone ? ' · ' : ''}
          {phone}
        </p>
      </header>
      <div className="resume-body">
        <section className="resume-section">
          <h2>Education</h2>
          <div className="edu-row">
            <span>{schoolName}</span>
            <span>{location}</span>
          </div>
          <div className="edu-row">
            <span>{title}</span>
            <span>
              {dateStart}
              {dateStart && dateEnd ? ' to ' : ''}
              {dateEnd}
            </span>
          </div>
        </section>
      </div>
      <div className="resume-body">
        <section className="resume-section">
          <h2>Experience</h2>
          <div className="edu-row">
            <span>{position}</span>
            <span>
              {jobDateStart}
              {jobDateStart && jobDateEnd ? ' to ' : ''}
              {jobDateEnd}
            </span>
          </div>
          <div className="edu-row">
            <span>{companyName}</span>
          </div>
          {/* One <li> per non-empty bullet in the expTasks array */}
          <ul className="bullets">
            {expTasks
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
