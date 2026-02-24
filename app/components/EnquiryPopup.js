"use client";

import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';

const EnquiryForm = ({ onClose }) => {
    const [formStatus, setFormStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Sending...");

        const formData = {
            name: e.target.name.value,
            company: e.target.company.value,
            address: e.target.address.value,
            email: e.target.email.value,
            contact: e.target.contact.value,
            interested_in: e.target.interested_in.value,
        };

        try {
            const response = await axios.post(
                '/api/admin/contacts-db',
                formData
            );
            if (response.data.success) {
                setFormStatus("Message sent successfully!");
                setTimeout(() => {
                    onClose();
                }, 1500);
                e.target.reset();
            } else {
                setFormStatus("Failed to send message.");
            }
        } catch (error) {
            setFormStatus(error.response?.data?.message || "An error occurred.");
        }
    };

    return (
        <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-white text-center mb-6">
                Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Name"
                        className="w-full p-3 text-sm rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
                    />
                </div>
                <div>
                    <input
                        required
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        className="w-full p-3 text-sm rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
                    />
                </div>
                <div>
                    <input
                        required
                        type="text"
                        name="address"
                        placeholder="Street Address"
                        className="w-full p-3 text-sm rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        className="w-full p-3 text-sm rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        name="contact"
                        required
                        placeholder="Contact Number"
                        className="w-full p-3 text-sm rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
                    />
                </div>
                <div>
                    <select
                        name="interested_in"
                        required
                        defaultValue=""
                        className="w-full p-3 text-sm rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
                    >
                        <option value="" disabled>Interested In</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="Business Automation">Business Automation</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button
                    type="submit"
                    disabled={formStatus === "Sending..."}
                    className="w-full inline-block px-8 py-3 text-md font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-[var(--darker-cyan)] hover:text-white disabled:bg-gray-400"
                >
                    {formStatus === "Sending..." ? "Sending..." : "Submit"}
                </button>
                {formStatus && (
                    <p className={`text-center mt-3 text-sm ${formStatus.includes("success") ? "text-[var(--neon-cyan)]" : "text-red-400"}`}>
                        {formStatus}
                    </p>
                )}
            </form>
        </div>
    );
};

// Ekhon component-ti sudhu 'onClose' prop ney
const EnquiryPopup = ({ onClose }) => {

    if (!onClose) {
        return null; // jodi kono karone onClose na thake, kichui render hobe na
    }

    return (
        <Modal onClose={onClose}>
            <button
                onClick={onClose}
                className="popup-close-btn"
                aria-label="Close modal"
            >
                <i className="fas fa-times"></i>
            </button>
            <EnquiryForm onClose={onClose} />
        </Modal>
    );
};

export default EnquiryPopup;