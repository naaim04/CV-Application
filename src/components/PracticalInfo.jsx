import { useState } from 'react'

// Receives the `experience` object and its setter from App (through Sidebar).
function PracticalInfo({ experience, setExperience }) {
  const [isEditing, setIsEditing] = useState(true)

  function handleSubmit(e) {
    e.preventDefault()
    setIsEditing(false)
  }

  // One handler for the simple text/date fields.
  function handleChange(e) {
    const { name, value } = e.target
    setExperience({ ...experience, [name]: value })
  }

  // expTasks is an ARRAY living inside the experience object, so each helper
  // rebuilds the array AND wraps it back into a fresh experience object.
  function updateTask(index, value) {
    setExperience({
      ...experience,
      expTasks: experience.expTasks.map((task, i) => (i === index ? value : task)),
    })
  }

  function addTask() {
    setExperience({ ...experience, expTasks: [...experience.expTasks, ''] })
  }

  function removeTask(index) {
    setExperience({
      ...experience,
      expTasks: experience.expTasks.filter((_, i) => i !== index),
    })
  }

  if (isEditing) {
    return (
      <form className="section" onSubmit={handleSubmit}>
        <h2>Experience</h2>
        <label>
          Company Name
          <input
            type="text"
            name="companyName"
            value={experience.companyName}
            onChange={handleChange}
          />
        </label>
        <label>
          Position
          <input
            type="text"
            name="position"
            value={experience.position}
            onChange={handleChange}
          />
        </label>
        <label>
          Location
          <input
            type="text"
            name="jobLocation"
            value={experience.jobLocation}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date
          <input
            type="date"
            name="jobDateStart"
            value={experience.jobDateStart}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date
          <input
            type="date"
            name="jobDateEnd"
            value={experience.jobDateEnd}
            onChange={handleChange}
          />
        </label>
        <div className="expTasks">
          Description
          {experience.expTasks.map((task, index) => (
            <div className="task-row" key={index}>
              <input
                type="text"
                value={task}
                onChange={(e) => updateTask(index, e.target.value)}
              />
              <button type="button" onClick={() => removeTask(index)}>
                ×
              </button>
            </div>
          ))}
          <button type="button" onClick={addTask}>
            + Add bullet
          </button>
        </div>
      </form>
    )
  }
}

export default PracticalInfo
