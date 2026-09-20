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
}) {
  return (
    <main className="resume">
      <header className="resume-header">
        <h1 >{name}</h1>
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
    </main>
  )
}

export default Resume
