import { useState } from 'react'

// This component receives the shared values + setters from App (via Sidebar).
function GeneralInfo({ name, email, phone, setName, setEmail, setPhone }) {
  // LOCAL state: only THIS box cares whether it's showing inputs or read-only
  // text. Nothing else needs it, so it stays here instead of being lifted.
  const [isEditing, setIsEditing] = useState(true)

  function handleSubmit(e) {
    e.preventDefault() // stop the browser from reloading the page on submit
    setIsEditing(false) // collapse this section to read-only text
  }

  // EDIT MODE: show the input fields.
  // Each input is "controlled": its value comes from state (value={name}),
  // and every keystroke calls the setter (onChange). Because that state lives
  // in App, typing here also updates the Resume live.
  if (isEditing) {
    return (
      <form className="section" onSubmit={handleSubmit}>
        <h2>General Information</h2>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
      </form>
    )
  }

}

export default GeneralInfo
