import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Resume from './components/Resume'
import './styles/layout.css'

function App() {
  // SHARED state: both the form (Sidebar > GeneralInfo) and the display (Resume)
  // need these, so they live here in the closest common parent — "lifting state up".
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // Education fields — same idea, shared between the form and the resume.
  const [schoolName, setSchoolName] = useState('')
  const [title, setTitle] = useState('')
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')
  const [location, setLocation] = useState('')
  // Practical fields — same idea, shared between the form and the resume.
  const [companyName, setCompanyName] = useState('')
  const [position, setPosition] = useState('')
  const [tasks, setTasks] = useState('')
  const [jobDateStart, setJobDateStart] = useState('')
  const [jobDateEnd, setJobDateEnd] = useState('')


  return (
    <div className="app">
      {/* Pass the values DOWN, plus the setter functions DOWN.
          The inputs will call the setters, which updates state HERE,
          which re-renders BOTH the sidebar and the resume. */}
      <Sidebar
        name={name}
        email={email}
        phone={phone}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        schoolName={schoolName}
        title={title}
        dateStart={dateStart}
        dateEnd={dateEnd}
        setSchoolName={setSchoolName}
        setTitle={setTitle}
        setDateStart={setDateStart}
        setDateEnd={setDateEnd}
        location={location}
        setLocation={setLocation}
        companyName={companyName}
        position={position}
        tasks={tasks}
        jobDateStart={jobDateStart}
        jobDateEnd={jobDateEnd}
        setCompanyName={setCompanyName}
        setPosition={setPosition}
        setTasks={setTasks}
        setJobDateStart={setJobDateStart}
        setJobDateEnd={setJobDateEnd}
      />
      <Resume
        name={name}
        email={email}
        phone={phone}
        schoolName={schoolName}
        title={title}
        dateStart={dateStart}
        dateEnd={dateEnd}
        location={location}
        companyName={companyName}
        position={position}
        tasks={tasks}
        jobDateStart={jobDateStart}
        jobDateEnd={jobDateEnd}
      />
      {/* Resume only DISPLAYS, so it gets values — no setters. */}
    </div>
  )
}

export default App
