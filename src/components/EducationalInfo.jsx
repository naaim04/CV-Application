import { useState } from 'react'

// Receives the `education` object and its setter from App (through Sidebar).
function EducationalInfo({ education, setEducation }) {
  const [isEditing, setIsEditing] = useState(true)

  function handleSubmit(e) {
    e.preventDefault()
    setIsEditing(false)
  }

  // Same one-handler pattern as GeneralInfo: input `name` picks the field.
  function handleChange(e) {
    const { name, value } = e.target
    setEducation({ ...education, [name]: value })
  }

  if (isEditing) {
    return (
      <form className="section" onSubmit={handleSubmit}>
        <h2>Education</h2>
        <label>
          School Name
          <input
            type="text"
            name="schoolName"
            value={education.schoolName}
            onChange={handleChange}
          />
        </label>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={education.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date
          <input
            type="date"
            name="dateStart"
            value={education.dateStart}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date
          <input
            type="date"
            name="dateEnd"
            value={education.dateEnd}
            onChange={handleChange}
          />
        </label>
        <label>
          Location
          <input
            type="text"
            name="location"
            value={education.location}
            onChange={handleChange}
          />
        </label>
      </form>
    )
  }
}

export default EducationalInfo
