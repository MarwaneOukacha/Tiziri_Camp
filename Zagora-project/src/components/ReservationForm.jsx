import React, { useEffect, useState } from 'react';
import "../Reservation.css";
import { FaCheckCircle } from "react-icons/fa"; // Import the check icon
import { sendWhatsAppMessage } from '../data/sendWhatssapMessage';
import { useParams } from 'react-router-dom';
import { LoadingSpinner } from './LoadingSpinner';
import { toast, ToastContainer } from 'react-toastify';

const ReservationForm = ({ data }) => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkin: '',
        personneDh: '',
        message: '',
    });
    const notify = (message) => {
        toast.error(message, {
            theme: "colored"
        });
    };


    const reservation = data[id - 1];
    useEffect(() => {
    }, []);

    const [isSubmitted, setIsSubmitted] = useState(false); // Keep track of form submission
    const [loading, setLoading] = useState(false); // Loading spinner state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading spinner

        try {
            // Constructing the message
            const message = `with email: ${formData.email} and the phone is ${formData.phone} for ${formData.checkin} Reservation for ${reservation.title} and the number of people is ${formData.personneDh}`;

            // Sending the message
            const result = await sendWhatsAppMessage(formData.name, message);

            if (result.success) {

                setIsSubmitted(true); // Show success message
            } else {
                console.log("Failed to send message: "+result.err)
                notify('Failed to send message:', result.err || 'Unknown error');
            }
        } catch (error) {
            setLoading(false);
            console.log("Failed to send message: "+error.message)
            notify('Failed to send message:', error.message || 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <ToastContainer />
            <h2>Reservation Form</h2>
            {isSubmitted ? (
                <div className="success-message">
                    <FaCheckCircle size={50} color="green" />
                    <p>Your reservation has been successfully processed. Our manager will be in touch with you shortly. Thank you for placing your trust in us.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="checkin">Check-in Date</label>
                    <input
                        type="date"
                        id="checkin"
                        name="checkin"
                        value={formData.checkin}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="personneDh">Personne/DH</label>
                    <select
                        id="personneDh"
                        name="personneDh"
                        value={formData.personneDh}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>
                            Select an option
                        </option>
                        {reservation.price.map((prices, index) => (
                            <option key={index} value={prices}>
                                {prices}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="message">Special Requests</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Any special requests?"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <button className="reserve" type="submit">
                        Reserve Now
                    </button>
                    {loading && <LoadingSpinner />} {/* Show spinner while loading */}
                </form>
            )}
        </div>
    );
};

export default ReservationForm;
