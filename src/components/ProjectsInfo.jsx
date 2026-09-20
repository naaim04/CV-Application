import Project from './Project'

// `projects` is an ARRAY. This component only manages the LIST: add a project,
// remove one, or replace one with its updated version. Each individual project's
// editing lives in the <Project> child.
function ProjectsInfo({ projects, setProjects }) {
  function addProject() {
    setProjects([
      ...projects,
      { projectName: '', projectDateStart: '', projectDateEnd: '', projTasks: [''] },
    ])
  }

  function removeProject(index) {
    setProjects(projects.filter((_, i) => i !== index))
  }

  // Replace project #index with the updated version the child sent up.
  function updateProject(index, updated) {
    const copy = [...projects] // copy the array
    copy[index] = updated // swap in the new version of this one project
    setProjects(copy)
  }

  return (
    <div className="section">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          project={project}
          onChange={(updated) => updateProject(index, updated)}
          onRemove={() => removeProject(index)}
        />
      ))}
      <button type="button" onClick={addProject}>
        + Add project
      </button>
    </div>
  )
}

export default ProjectsInfo
