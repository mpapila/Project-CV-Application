import React, { Fragment, useState } from 'react';
import "../styles/educationalexperience.css";

function EducationalExperience() {
    const [schoolForm, setSchoolForm] = useState([
        {
            schoolName: 'Sam Houston State University',
            titleOfStudy: 'Computer Science',
            location: 'Huntsville TX',
            graduationDate: '2018',
            degree: 'BA'
        },
    ])


    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        index: number
    ) => {
        const { name, value } = e.target
        setSchoolForm(prev => {
            const newSchoolForm = prev.map((school, i) => {
                if (i === index) {
                    return {
                        ...school,
                        [name]: value
                    }
                }
                return school
            })
            return newSchoolForm
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setFormSubmitted(true)
    }
    const degreeOptions: { [key: string]: string } = {
        AA: "Associate's Degree",
        BA: "Bachelor's Degree",
        MA: "Master's Degree",
        PhD: "Doctoral Degree"
    };
    function editButton() {
        setFormSubmitted(false)
    }
    function addExperience() {
        setSchoolForm(prev => {
            const newSchoolForm = [
                ...prev,
                {
                    schoolName: '',
                    titleOfStudy: '',
                    location: '',
                    graduationDate: '',
                    degree: ''
                }
            ]
            return newSchoolForm
        })
    }
    return (
        <>

            {!formSubmitted && (
                <div>
                    <h2>Educational Experience</h2>
                    <form className="education" onSubmit={handleSubmit}>
                        {schoolForm.map((school, i) => {
                            const handleSchoolChange = (
                                e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
                            ) => {
                                handleChange(e, i)
                            }
                            const handleRemove = () => {
                                setSchoolForm(prev => {
                                    const newSchoolForm = prev.filter((school, index) => index !== i)
                                    return newSchoolForm
                                })
                            }
                            return (
                                <div key={i}>
                                    School Name:
                                    <input
                                        type="text"
                                        name="schoolName"
                                        value={school.schoolName}
                                        onChange={handleSchoolChange}
                                        required
                                    />
                                    Degree:
                                    <select
                                        name="degree"
                                        value={school.degree}
                                        onChange={handleSchoolChange}
                                    >
                                        {Object.entries(degreeOptions).map(([value, label]) => (
                                            <option key={value} value={value}>{label}</option>
                                        ))}
                                    </select>
                                    Educational Program:
                                    <input
                                        type="text"
                                        name="titleOfStudy"
                                        value={school.titleOfStudy}
                                        onChange={handleSchoolChange}
                                        required
                                    />
                                    Location:
                                    <input
                                        type="text"
                                        name="location"
                                        value={school.location}
                                        onChange={handleSchoolChange}
                                        required
                                    />
                                    Graduation Year:
                                    <input
                                        type="number"
                                        name="graduationDate"
                                        value={school.graduationDate}
                                        onChange={handleSchoolChange}
                                        required
                                    />
                                    <button
                                        onClick={handleRemove}
                                        type='button'
                                    >
                                        Remove
                                    </button>
                                </div>
                            )
                        })}

                        <button type="submit">Submit</button>
                        <button type='button' onClick={addExperience}>Add Another Education</button>
                    </form>
                </div>
            )}
            {formSubmitted && (

                <div className='educationLabel'>
                    <div className="educational">
                        <div className="titleDiv">
                            <h2 id='title'>EDUCATION AND CREDENTIALS</h2>
                            <div className="btn" onClick={editButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" /></svg>
                            </div>
                        </div>
                        {schoolForm.map((school, i) => {
                            return (
                                <Fragment key={i}>
                                    <div className='top'>
                                        {school.degree + ' '} In {school.titleOfStudy + ', '}{school.graduationDate}
                                    </div>
                                    <div className='bottom'>
                                        {school.schoolName + ', '}{school.location + ' '}
                                    </div>
                                </Fragment>
                            )
                        })}
                    </div>
                </div>

            )}

        </>
    )
}


export default EducationalExperience;