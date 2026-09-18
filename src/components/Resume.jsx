// Resume owns NO state. It just displays the shared values it receives as props.
// Whenever App's state changes, this re-renders with the new values.
function Resume({ name, email, phone }) {
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
      {/* Later: education and experience sections display here too */}
    </main>
  )
}

export default Resume
