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
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" id="contact">
            <div className="ml-[10%]">
                <h2 className="text-2xl font-bold text-orange-500 mb-4"> Contact Me</h2>
                <h2 className="text-6xl font-bold text-gray-900 mb-4">Do you <br/> want to contact <br/> me?</h2>
            </div>
            <br/> <br/>

            <div className=" rounded-lg shadow-md w-full max-w-6xl flex bg-gray-100 mr-8" >
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
                                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-orange-400">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right side: Contact Information */}
                <div className="w-full md:w-1/2 bg-transparent-900 text-red-950 p-8">
                    <h3 className="text-lg font-semibold"><u> Contact Information </u></h3>
                    <p className="mt-2">
                        If you could touch my creative mind , <br/>
                        I’m always open to discussing new projects, creative ideas and designs to be part of your vision
                        ...
                    </p>
                    <div className="mt-4">
                        <p>Matara, Sri Lanka</p>
                        <p className="mt-2"> +94 77 618 3770</p>
                        <p className="mt-2">savindilayanga@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
