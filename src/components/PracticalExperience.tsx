import React, { useState } from 'react';
import "../styles/practicalexperience.css";

function PracticalExperience() {
    const [workForm, setWorkForm] = useState([
        {
            workName: 'Aviva Wholesale Inc.',
            title: 'Database/System Administrator',
            dateFrom: '2019-05',
            dateTo: '2023-01',
            responsibilty: 'Responsibilty',
            location: 'HOUSTON, TX'
        },
    ])


    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const { name, value } = e.target;
        setWorkForm(prev => {
            const newWorkForm = prev.map((work, i) => {
                if (i === index) {
                    return {
                        ...work,
                        [name]: value
                    };
                }
                return work;
            });
            return newWorkForm;
        });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true)
    }
    const formatDate = (date: string): string => {
        const [year, month] = date.split("-");
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
    }
    function editButton() {
        setFormSubmitted(false)
    }
    function addExperience() {
        setWorkForm(prev => {
            const newWorkForm = [
                ...prev,
                {
                    workName: '',
                    title: '',
                    dateFrom: '',
                    dateTo: '',
                    responsibilty: '',
                    location: ''
                }
            ]
            return newWorkForm
        })
    }
    return (
        <>
            {!formSubmitted && (
                <div>
                    <h2>Practical Experience</h2>
                    <form className='experience' onSubmit={handleSubmit}>
                        {workForm.map((work, index) => (
                            <div key={index}>
                                <label>
                                    Company Name:
                                    <input type="text" name="workName" value={work.workName} onChange={(e) => handleChange(e, index)} required />
                                </label>
                                <label>
                                    Title:
                                    <input type="text" name="title" value={work.title} onChange={(e) => handleChange(e, index)} required />
                                </label>
                                <label>
                                    Date From:
                                    <input type="month" name="dateFrom" value={work.dateFrom} onChange={(e) => handleChange(e, index)} required />
                                </label>
                                <label>
                                    Date To:
                                    <input type="month" name="dateTo" value={work.dateTo} onChange={(e) => handleChange(e, index)} required />
                                </label>
                                <label>
                                    Location:
                                    <input type="text" name="location" value={work.location} onChange={(e) => handleChange(e, index)} required />
                                </label>
                                <label>
                                    Responsibility:
                                    <input type="text" name="responsibilty" value={work.responsibilty} onChange={(e) => handleChange(e, index)} />
                                </label>
                                {workForm.length > 1 && (
                                    <button type="button" onClick={() => setWorkForm(prev => prev.filter((_, i) => i !== index))}>Remove</button>
                                )}
                            </div>
                        ))}
                        <button type='submit'>Submit</button>
                        <button type='button' onClick={addExperience}>Add Another Experience</button>
                    </form>
                </div>
            )}
            {formSubmitted && (
                <div className='workLabel'>
                    <div className="proffesional">
                        <div className="titleDiv">
                            <h2 id='title'>PROFESSIONAL EXPERIENCE</h2>
                            <div className="btn" onClick={editButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" /></svg>
                            </div>
                        </div>
                        {workForm.map((work, index) => (
                            <div key={index}>
                                <div className="professionalTop">{work.workName + ', '}{work.location + ' '}</div>
                                <div className="professionalBottom"><span id='worklabel'>{work.location + ', '}</span>{formatDate(work.dateFrom) + ' '} TO {formatDate(work.dateTo) + ' '}</div>
                                Responsibility: {work.responsibilty + ' '}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}


export default PracticalExperience;