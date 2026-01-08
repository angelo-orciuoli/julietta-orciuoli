import React, { useState } from 'react';
import { Mail, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
    id: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

        try {
            await emailjs.send(
                'service_fqmzadc',
                'template_3hurp1p',
                { name, email, phone, message },
                'DDZ_lCj6S7l5XwVNt'
            );
            setStatus('success');
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
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
                            disabled={isLoading}
                            className="w-full py-3 px-6 bg-slate-900 hover:bg-lavender-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>Sending... <Loader2 size={16} className="animate-spin" /></>
                            ) : (
                                <>Send Message <Send size={16} /></>
                            )}
                        </button>

                        {status === 'success' && (
                            <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center">
                                Thank you for your message! I'll get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center">
                                Something went wrong. Please email me directly.
                            </div>
                        )}
                    </form>

                    {/* Email */}
                    <div className="mt-8 pt-6 border-t border-lavender-200 text-center">
                        <div className="flex items-center justify-center gap-2 text-slate-600">
                            <Mail size={18} className="text-lavender-600" />
                            <a href="mailto:jrorciuoli@gmail.com" className="hover:text-lavender-700 font-medium">jrorciuoli@gmail.com</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;