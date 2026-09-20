import { useState } from 'react'

function PracticalInfo({companyName, position, jobDateStart, jobDateEnd, setCompanyName, setPosition, setJobDateStart, setJobDateEnd}) {
    const [isEditing, setIsEditing] = useState(true)

    function handleSubmit(e) {
        e.preventDefault() // stop the browser from reloading the page on submit
        setIsEditing(false)
    }

    if (isEditing) {
        return (
            <form className="section" onSubmit={handleSubmit}>
                <h2>Practical Experience</h2>
                <label>
                    Company Name
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </label>
                <label>
                    Position
                    <input
                        type="text"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </label>
                <label>
                    Start Date
                    <input
                        type="date"
                        value={jobDateStart}
                        onChange={(e) => setJobDateStart(e.target.value)}
                    />
                </label>
                <label>
                    End Date
                    <input
                        type="date"
                        value={jobDateEnd}
                        onChange={(e) => setJobDateEnd(e.target.value)}
                    />
                </label>
            </form>
        )
    }

}

export default PracticalInfo