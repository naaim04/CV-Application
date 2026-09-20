import { useState } from 'react'

// Receives the `projects` object and its setter from App (through Sidebar).
function ProjectsInfo({ projects, setProjects }) {
  const [isEditing, setIsEditing] = useState(true)

  function handleSubmit(e) {
    e.preventDefault()
    setIsEditing(false)
  }

  // One handler for the simple text/date fields.
  function handleChange(e) {
    const { name, value } = e.target
    setProjects({ ...projects, [name]: value })
  }

  // projTasks is an ARRAY inside the projects object — same helper pattern as
  // PracticalInfo's expTasks: rebuild the array, then wrap it back in a fresh
  // projects object.
  function updateTask(index, value) {
    setProjects({
      ...projects,
      projTasks: projects.projTasks.map((task, i) => (i === index ? value : task)),
    })
  }

  function addTask() {
    setProjects({ ...projects, projTasks: [...projects.projTasks, ''] })
  }

  function removeTask(index) {
    setProjects({
      ...projects,
      projTasks: projects.projTasks.filter((_, i) => i !== index),
    })
  }

  if (isEditing) {
    return (
      <form className="section" onSubmit={handleSubmit}>
        <h2>Projects</h2>
        <label>
          Project Name
          <input
            type="text"
            name="projectName"
            value={projects.projectName}
            onChange={handleChange}
          />
        </label>
        <div className="expTasks">
          Project Description
          {projects.projTasks.map((task, index) => (
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
        <label>
          Start Date
          <input
            type="date"
            name="projectDateStart"
            value={projects.projectDateStart}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date
          <input
            type="date"
            name="projectDateEnd"
            value={projects.projectDateEnd}
            onChange={handleChange}
          />
        </label>
      </form>
    )
  }
}

export default ProjectsInfo
