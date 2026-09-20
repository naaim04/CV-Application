import GeneralInfo from './GeneralInfo'
import EducationalInfo from './EducationalInfo'

// Sidebar owns NO state. It's just a container that arranges the form
// components and passes props straight through to them ("prop drilling").
function Sidebar({
  name,
  email,
  phone,
  setName,
  setEmail,
  setPhone,
  schoolName,
  title,
  dateStart,
  dateEnd,
  setSchoolName,
  setTitle,
  setDateStart,
  setDateEnd,
  location,
  setLocation,
}) {
  return (
    <aside className="sidebar">
      <GeneralInfo
        name={name}
        email={email}
        phone={phone}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
      />

      <EducationalInfo
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
      />

    </aside>
  )
}

export default Sidebar
