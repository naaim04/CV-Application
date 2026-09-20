// Handles ONE project. It never touches the big list — it just edits its own
// copy and hands the updated project back up through onChange().
function Project({ project, onChange, onRemove }) {
  // Change one field: send up a copy of this project with that field overwritten.
  function setField(field, value) {
    onChange({ ...project, [field]: value })
  }

  // Bullet helpers — same spread/map/filter pattern, on this project's projTasks.
  function updateTask(index, value) {
    onChange({
      ...project,
      projTasks: project.projTasks.map((task, i) => (i === index ? value : task)),
    })
  }

  function addTask() {
    onChange({ ...project, projTasks: [...project.projTasks, ''] })
  }

  function removeTask(index) {
    onChange({ ...project, projTasks: project.projTasks.filter((_, i) => i !== index) })
  }

  return (
    <div className="project-block">
      <div className="block-head">
        <strong>Project</strong>
        <button type="button" onClick={onRemove}>
          Remove
        </button>
      </div>

      <label>
        Project Name
        <input
          type="text"
          value={project.projectName}
          onChange={(e) => setField('projectName', e.target.value)}
        />
      </label>

      <div className="expTasks">
        Project Description
        {project.projTasks.map((task, index) => (
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
          value={project.projectDateStart}
          onChange={(e) => setField('projectDateStart', e.target.value)}
        />
      </label>

      <label>
        End Date
        <input
          type="date"
          value={project.projectDateEnd}
          onChange={(e) => setField('projectDateEnd', e.target.value)}
        />
      </label>
    </div>
  )
}

export default Project
