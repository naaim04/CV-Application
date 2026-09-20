import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Resume from './components/Resume'
import './styles/layout.css'

function App() {
  // Each CV section is ONE object of state instead of many loose variables.
  // This is the "lifting state up" idea, tidied: the whole app's data is these
  // three objects, and we pass just an object + its setter to each component.
  const [general, setGeneral] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const [education, setEducation] = useState({
    schoolName: '',
    title: '',
    dateStart: '',
    dateEnd: '',
    location: '',
  })

  const [experience, setExperience] = useState({
    companyName: '',
    position: '',
    jobLocation: '',
    jobDateStart: '',
    jobDateEnd: '',
    expTasks: [''], // a list of bullet points; starts with one empty block
  })

  const [projects, setProjects] = useState({
    projectName: '',
    projectDateStart: '',
    projectDateEnd: '',
    projTasks: [''], // a list of bullet points; starts with one empty block

  })

  return (
    <div className="app">
      {/* Pass each section's object DOWN, plus its setter. The forms read from
          the object and call the setter to update it; the resume just reads. */}
      <Sidebar
        general={general}
        setGeneral={setGeneral}
        education={education}
        setEducation={setEducation}
        experience={experience}
        setExperience={setExperience}
        projects={projects}
        setProjects={setProjects}
      />
      <Resume general={general} education={education} experience={experience} projects={projects}  />
    </div>
  )
}

export default App
