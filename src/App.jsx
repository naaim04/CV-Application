import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Resume from './components/Resume'
import './styles/layout.css'

function App() {
  // Each CV section is ONE object of state instead of many loose variables.
  // This is the "lifting state up" idea, tidied: the whole app's data is these
  // three objects, and we pass just an object + its setter to each component.
  const [general, setGeneral] = useState({
    name: 'Jake Ryan',
    email: 'jake@su.edu',
    phone: '123-456-7890',
  })

  const [education, setEducation] = useState({
    schoolName: 'Southwestern University',
    title: 'Bachelor of Arts in Computer Science, Minor in Business',
    dateStart: '2018-08-01',
    dateEnd: '2021-05-01',
    location: 'Georgetown, TX',
  })

  const [experience, setExperience] = useState({
    companyName: 'Texas A&M University',
    position: 'Undergraduate Research Assistant',
    jobLocation: 'College Station, TX',
    jobDateStart: '2020-06-01',
    jobDateEnd: '2021-05-01',
    expTasks: [
      'Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems',
      'Explored ways to visualize GitHub collaboration in a classroom setting',
    ],
  })

  // A LIST of projects now, so we can add more than one.
  const [projects, setProjects] = useState([
    {
      projectName: 'Gitlytics',
      projectDateStart: '2020-06-01',
      projectDateEnd: '2020-08-01',
      projTasks: [
        'Built a full-stack web app with React and Flask to analyze GitHub data',
        'Implemented GitHub OAuth to pull data from user repositories',
      ],
    },
  ])

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
