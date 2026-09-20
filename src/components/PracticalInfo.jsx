import { useState } from 'react'

function PracticalInfo({companyName, position, jobDateStart, jobDateEnd, setCompanyName, setPosition, setJobDateStart, setJobDateEnd, expTasks, setExpTasks}) {
    const [isEditing, setIsEditing] = useState(true)

    function handleSubmit(e) {
        e.preventDefault() // stop the browser from reloading the page on submit
        setIsEditing(false)
    }

    // Change ONE bullet (the one at `index`), keeping all the others.
    // .map builds a brand-new array — we never edit the old one directly.
    function updateTask(index, value) {
        setExpTasks(expTasks.map((task, i) => (i === index ? value : task)))
    }

    // Add a new empty bullet to the end of the list.
    // [...expTasks, ''] = "all the current items, plus one more empty string".
    function addTask() {
        setExpTasks([...expTasks, ''])
    }

    // Remove the bullet at `index`. .filter keeps every item EXCEPT that one.
    function removeTask(index) {
        setExpTasks(expTasks.filter((task, i) => i !== index))
    }

    if (isEditing) {
        return (
            <form className="section" onSubmit={handleSubmit}>
                <h2>Experience</h2>
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
                <div className="expTasks">
                    Description
                    {/* One input block per item in the expTasks array.
                        `index` is the item's position (0, 1, 2...). */}
                    {expTasks.map((task, index) => (
                        <div className="task-row" key={index}>
                            <input
                                type="text"
                                value={task}
                                onChange={(e) => updateTask(index, e.target.value)}
                            />
                            {/* type="button" so it does NOT submit the form */}
                            <button type="button" onClick={() => removeTask(index)}>
                                ×
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addTask}>
                        + Add bullet
                    </button>
                </div>
            </form>
        )
    }

}

export default PracticalInfo