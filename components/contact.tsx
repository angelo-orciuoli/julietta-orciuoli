import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

interface ContactSectionProps {
    id: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thanks for your message! This is a demo form.");
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }

    return (
        <section id={id} className="py-24 bg-white">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-lavender-50 rounded-3xl p-8 md:p-12 shadow-sm border border-lavender-100">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Let's Connect!</h2>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="Name *"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="Email *"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Phone Number (optional)"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                placeholder="Message *"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200 outline-none transition-all resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-slate-900 hover:bg-lavender-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={16} />
                        </button>
                    </form>

                    {/* Email */}
                    <div className="mt-8 pt-6 border-t border-lavender-200 text-center">
                        <div className="flex items-center justify-center gap-2 text-slate-600">
                            <Mail size={18} className="text-lavender-600" />
                            <a href="mailto:jo7942a@american.edu" className="hover:text-lavender-700 font-medium">jo7942a@american.edu</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;