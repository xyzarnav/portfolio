import { useState } from 'react';

const contactInfo = [
  {
    icon: "mail-outline",
    title: "Email",
    content: "arnav20604@example.com",
    link: "arnav20604@example.com",
  },
  {
    icon: "call-outline",
    title: "Phone",
    content: "+91 7774063885",
    link: "+91 7774063885",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ fullname: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error
  const [touched, setTouched] = useState({ fullname: false, email: false, message: false });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setForm({ fullname: '', email: '', message: '' });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const isFormValid = form.fullname && form.email && form.message;

  return (
    <article className="card bg-smoky-black border border-white/10 rounded-[20px] p-[20px] w-full md:w-[520px] md:mx-auto md:p-[30px] xl:w-auto xl:min-h-full">
      <header className="mb-8">
        <h2 className="text-white text-[24px] sm:text-[28px] font-fw-600 inline-block">
          Contact Me
        </h2>
        <p className="text-white/60 text-sm mt-2">
          Let's connect and discuss your project
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <section className="contact-info">
          {/* Contact Info */}
          <div className="space-y-5 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-white text-[18px] font-fw-500 mb-4 flex items-center">
                <ion-icon name="chatbubble-ellipses-outline" class="text-neon-blue mr-2 text-[20px]"></ion-icon>
                Get in Touch
              </h3>
              
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li 
                    key={index}
                    className="bg-eerie-black-1/50 backdrop-blur-sm rounded-xl p-4 hover:-translate-y-1 hover:shadow-glow transition-all duration-300 border border-white/5"
                    style={{animationDelay: `${0.2 + index * 0.1}s`}}
                  >
                    <a 
                      href={item.link} 
                      className="flex items-center gap-4"
                      target={item.title === 'Location' ? '_blank' : undefined}
                      rel={item.title === 'Location' ? 'noreferrer' : undefined}
                    >
                      <div className="w-10 h-10 rounded-full bg-eerie-black-2 flex items-center justify-center text-neon-blue text-xl shadow-glow">
                        <ion-icon name={item.icon}></ion-icon>
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase mb-1 tracking-wider">
                          {item.title}
                        </p>
                        <p className="text-white text-[15px] font-fw-500 transition-colors hover:text-neon-blue">
                          {item.content}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media - Positioned at bottom */}
            <div className="bg-eerie-black-1/50 backdrop-blur-sm rounded-xl p-5 mt-auto border border-white/5">
              <h4 className="text-white text-[16px] mb-4">Connect with me:</h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: 'logo-github',
                    color: 'hover:bg-gray-700'
                  },
                  {
                    icon: 'logo-linkedin',
                    color: 'hover:bg-blue-600'
                  },
                  {
                    icon: 'logo-twitter',
                    color: 'hover:bg-blue-400'
                  },
                  {
                    icon: 'logo-instagram',
                    color: 'hover:bg-pink-600'
                  }
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-eerie-black-2 text-white/70 ${item.color} hover:text-white hover:scale-110 transition-all duration-300`}
                  >
                    <ion-icon name={item.icon}></ion-icon>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form">
          <h3 className="text-white text-[18px] font-fw-500 mb-5 flex items-center">
            <ion-icon name="mail-open-outline" class="text-neon-blue mr-2 text-[20px]"></ion-icon>
            Send me a message
          </h3>

          <form 
            className="space-y-4" 
            onSubmit={handleSubmit}
            style={{animationDelay: '0.4s'}}
          >
            <div className="space-y-4">
              <div>
                <div className="relative group">
                  <input
                    type="text"
                    name="fullname"
                    className={`w-full bg-eerie-black-1 border ${
                      touched.fullname && !form.fullname ? 'border-bittersweet-shimmer' : 'border-white/10'
                    } rounded-lg p-3 text-white focus:border-neon-blue outline-none transition-colors group-hover:border-neon-blue/50`}
                    placeholder="Full name"
                    required
                    value={form.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.fullname && !form.fullname && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-bittersweet-shimmer">
                      <ion-icon name="alert-circle-outline"></ion-icon>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    className={`w-full bg-eerie-black-1 border ${
                      touched.email && !form.email ? 'border-bittersweet-shimmer' : 'border-white/10'
                    } rounded-lg p-3 text-white focus:border-neon-blue outline-none transition-colors group-hover:border-neon-blue/50`}
                    placeholder="Email address"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && !form.email && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-bittersweet-shimmer">
                      <ion-icon name="alert-circle-outline"></ion-icon>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="relative group">
                  <textarea
                    name="message"
                    className={`w-full bg-eerie-black-1 border ${
                      touched.message && !form.message ? 'border-bittersweet-shimmer' : 'border-white/10'
                    } rounded-lg p-3 text-white focus:border-neon-blue outline-none transition-colors group-hover:border-neon-blue/50 min-h-[150px]`}
                    placeholder="Your message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                  {touched.message && !form.message && (
                    <div className="absolute right-3 top-6 text-bittersweet-shimmer">
                      <ion-icon name="alert-circle-outline"></ion-icon>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <button
                className={`group relative w-full inline-flex items-center justify-center overflow-hidden rounded-lg ${
                  isFormValid 
                    ? 'bg-gradient-to-r from-neon-blue to-accent-blue text-white shadow-glow cursor-pointer'
                    : 'bg-eerie-black-1 text-white/50 cursor-not-allowed border border-white/10'
                } p-0.5 transition-all duration-300 mt-2`}
                type="submit"
                disabled={!isFormValid || formStatus === 'loading' || formStatus === 'success'}
              >
                <span className={`relative flex items-center gap-2 justify-center w-full rounded-md px-5 py-3 transition-all duration-300 ease-in ${
                  isFormValid ? 'group-hover:bg-opacity-0' : 'bg-eerie-black-2'
                }`}>
                  {formStatus === 'loading' && <span className="animate-spin">
                    <ion-icon name="reload-outline"></ion-icon>
                  </span>}
                  {formStatus === 'success' && <ion-icon name="checkmark-circle-outline"></ion-icon>}
                  {formStatus === 'idle' && <ion-icon name="paper-plane-outline"></ion-icon>}
                  
                  <span className="font-fw-500">
                    {formStatus === 'loading' && 'Sending...'}
                    {formStatus === 'success' && 'Message Sent!'}
                    {formStatus === 'idle' && 'Send Message'}
                  </span>
                </span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </article>
  );
};

export default Contact;
