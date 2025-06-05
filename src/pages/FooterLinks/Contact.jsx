

import React, { useRef } from "react";
//import emailjs from "emailjs-com";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then(() => {
                alert('Message sent successfully!');
                e.target.reset();
            }, (error) => {
                alert('Failed to send message. Please try again.');
                console.error(error.text);
            });
    };
    return (
        <div className="min-h-screen mt-16">
            <div className="bg-[#c04c45] text-white py-16 px-4 text-center">
                <h2 className="text-4xl font-bold">Contact Us </h2>
                <p className="mt-2 text-lg">Please fill in the form below, or contact us via phone or email</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-8 max-w-7xl mx-auto items-start">
                {/* Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-[#c04c45]">Yoga New Zealand</h3>
                    <p>P.O. Box 22114, Bay of plenty</p>
                    <p>Email: <a href="mailto:info@yoganewzealand.org.nz" className="text-blue-600">info@yoganewzealand.org.nz</a></p>
                    <p>Phone: 0800 NZ YOGA / 0800 69 9642</p>
                    <div className="flex space-x-4 pt-4 text-[#c04c45] text-2xl">
                        <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
                    </div>
                </div>

                {/* Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div>
                        <label className="block font-medium">Name</label>
                        <input type="text" name="name" required className="w-full border border-gray-400 px-4 py-2 rounded" />
                    </div>
                    <div>
                        <label className="block font-medium">Email</label>
                        <input type="email" name="email" required className="w-full border border-gray-400 px-4 py-2 rounded" />
                    </div>
                    <div>
                        <label className="block font-medium">Message</label>
                        <textarea name="message" rows="4" required className="w-full border border-gray-400 px-4 py-2 rounded" />
                    </div>
                    <button type="submit" className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact