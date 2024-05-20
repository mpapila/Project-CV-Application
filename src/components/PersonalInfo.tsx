import { useState } from 'react';
import "../styles/personalinfo.css";




function PersonalInfoForm() {
    const [formData, setFormData] = useState({
        fullName: 'Mehmet Papila',
        email: 'mehmetpapila95@gmail.com',
        phone: '123-456-7890',
        address: 'Houston Texas'
    });
    const [labelValue, setLabelValue] = useState({
        labelName: '',
        labelEmail: '',
        labelPhone: '',
        labelAddress: ''
    })
    const [formSubmitted, setFormSubmitted] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLabelValue(prev => ({
            ...prev,
            labelName: formData.fullName,
            labelEmail: formData.email,
            labelPhone: formData.phone,
            labelAddress: formData.address
        }))
        setFormSubmitted(true)
    }
    function editButton() {
        setFormSubmitted(false)
    }

    return (
        <div>
            {!formSubmitted && (
                <form className='general-form' onSubmit={handleSubmit}>
                    Full Name :
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    email :
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    Address:
                    <input type="text" name='address' value={formData.address} onChange={handleChange} required />
                    Phone Number :
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                    <button type="submit">Submit</button>
                </form>

            )}
            {formSubmitted && (
                <div className='general-info'>
                    <div className='left'>
                        <div className="name">{labelValue.labelName}</div>
                    </div>
                    <div className='right'>
                        <div className='phone'>
                            <div className="phoneLeft">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                {labelValue.labelPhone}
                            </div>
                            <div className="btn" onClick={editButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" /></svg>
                            </div>
                        </div>
                        <div className='email'>{labelValue.labelEmail}</div>
                        <div className="location">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                            {labelValue.labelAddress}
                        </div>

                        Authorized to work in the US
                        for any employer

                    </div>
                </div>
            )}
        </div>
    );
}
export default PersonalInfoForm;
