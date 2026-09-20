import { useState } from 'react'

// Receives the `general` object and its setter from App (through Sidebar).
function GeneralInfo({ general, setGeneral }) {
  const [isEditing, setIsEditing] = useState(true)

  function handleSubmit(e) {
    e.preventDefault() // stop the browser from reloading the page on submit
    setIsEditing(false)
  }

  // ONE handler for every field. The input's `name` attribute says which key
  // to change; { ...general, [name]: value } copies the object and overwrites
  // just that one field.
  function handleChange(e) {
    const { name, value } = e.target
    setGeneral({ ...general, [name]: value })
  }

  if (isEditing) {
    return (
      <form className="section" onSubmit={handleSubmit}>
        <h2>General Information</h2>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={general.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={general.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={general.phone}
            onChange={handleChange}
          />
        </label>
      </form>
    )
  }
}

export default GeneralInfo
