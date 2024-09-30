import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Here you can handle the form submission
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
            id="contact"
            style={{backgroundImage: 'url("https://yourimageurl.com")'}}>

            <div className="bg-white rounded-lg shadow-md w-full max-w-6xl flex">
                {/* Left side: Contact Form */}
                <div className="w-full md:w-1/2 p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-800">SEND ME A MESSAGE</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full border border-gray-300 rounded-md p-2 mt-2"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full border border-gray-300 rounded-md p-2 mt-2"
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="w-full border border-gray-300 rounded-md p-2 mt-2"
                                    placeholder="Phone #"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    className="w-full border border-gray-300 rounded-md p-2 mt-2"
                                    placeholder="Company name"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700">Message *</label>
                            <textarea
                                name="message"
                                className="w-full border border-gray-300 rounded-md p-2 mt-2"
                                placeholder="Write your message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right side: Contact Information */}
                <div className="w-full md:w-1/2 bg-blue-900 text-white p-8">
                    <h3 className="text-lg font-semibold">Contact Information</h3>
                    <p className="mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestias, magnam!
                    </p>
                    <div className="mt-4">
                        <p>9757 Aspen Lane South Richmond Hill, NY 11419</p>
                        <p className="mt-2">+1 (291) 939 9321</p>
                        <p className="mt-2">info@mywebsite.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
