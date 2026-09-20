import { useState } from 'react'

// Mirrors GeneralInfo: receives the shared education values + setters from App
// (through Sidebar). Fields are controlled inputs, so typing updates App's
// state and the Resume live.
function EducationalInfo({
  schoolName,
  title,
  dateStart,
  dateEnd,
  setSchoolName,
  setTitle,
  setDateStart,
  setDateEnd,
  location,
  setLocation,
}) {
  const [isEditing, setIsEditing] = useState(true)

  function handleSubmit(e) {
    e.preventDefault() // stop the browser from reloading the page on submit
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <form className="section" onSubmit={handleSubmit}>
        <h2>Educational Experience</h2>
        <label>
          School Name
          <input
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </label>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Start Date
          <input
            type="date"
            value={dateStart}
            onChange={(e) => setDateStart(e.target.value)}
          />
        </label>
        <label>
          End Date
          <input
            type="date"
            value={dateEnd}
            onChange={(e) => setDateEnd(e.target.value)}
          />
        </label>
        <label>
          Location
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

      </form>
    )
  }
}

export default EducationalInfo
