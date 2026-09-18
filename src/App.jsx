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
      />
      <Resume name={name} email={email} phone={phone} />
    </div>
  )
}

export default App
