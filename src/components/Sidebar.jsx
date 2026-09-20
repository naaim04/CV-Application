import GeneralInfo from './GeneralInfo'
import EducationalInfo from './EducationalInfo'
import PracticalInfo from './PracticalInfo'
import ProjectsInfo from './ProjectsInfo'

// Sidebar owns NO state. It just hands each section's object + setter to the
// right form component. Notice how short the prop list is now (6 vs ~25).
function Sidebar({
  general,
  setGeneral,
  education,
  setEducation,
  experience,
  setExperience,
  projects,
  setProjects,
}) {
  return (
    <aside className="sidebar">
      <GeneralInfo general={general} setGeneral={setGeneral} />
      <EducationalInfo education={education} setEducation={setEducation} />
      <PracticalInfo experience={experience} setExperience={setExperience} />
      <ProjectsInfo projects={projects} setProjects={setProjects} />
    </aside>
  )
}

export default Sidebar
