import GeneralInfo from './GeneralInfo'
import EducationalInfo from './EducationalInfo'
import PracticalInfo from './PracticalInfo'

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
  companyName,
  position,
  tasks,
  jobDateStart,
  jobDateEnd,
  setCompanyName,
  setPosition,
  setTasks,
  setJobDateStart,
  setJobDateEnd,
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

      <PracticalInfo
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

    </aside>
  )
}

export default Sidebar
