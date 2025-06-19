import { useState } from 'react';

const contactInfo = [
  {
    icon: 'mail-outline',
    title: 'Email',
    content: 'richard@example.com',
    link: 'mailto:richard@example.com',
  },
  {
    icon: 'call-outline',
    title: 'Phone',
    content: '+123 456 7890',
    link: 'tel:+1234567890',
  },
  {
    icon: 'location-outline',
    title: 'Location',
    content: 'Sacramento, California',
    link: 'https://goo.gl/maps/QSGwwZEi7BJ7Q1US6',
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
    <article className="card bg-eerie-black-2 border border-jet/40 rounded-[20px] p-[20px] shadow-shadow-1 animate-[fadeIn_0.5s_ease_backwards] md:w-[520px] md:mx-auto md:p-[30px] xl:w-auto xl:min-h-full">
      <header className="mb-8">
        <h2 className="section-title bg-text-gradient-yellow text-transparent bg-clip-text inline-block">
          Contact
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <section className="contact-info">
          {/* Map */}
          <div className="mapbox card overflow-hidden mb-8" style={{animationDelay: '0.1s'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
              width="100%"
              height="250"
              loading="lazy"
              title="map"
              className="grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen=""
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white-2 text-fs-4 font-fw-500 mb-4 flex items-center">
              <ion-icon name="chatbubble-ellipses-outline" class="text-orange-yellow-crayola mr-2"></ion-icon>
              Get in Touch
            </h3>
            
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li 
                  key={index}
                  className="card p-4 hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
                  style={{animationDelay: `${0.2 + index * 0.1}s`}}
                >
                  <a 
                    href={item.link} 
                    className="flex items-center gap-4"
                    target={item.title === 'Location' ? '_blank' : undefined}
                    rel={item.title === 'Location' ? 'noreferrer' : undefined}
                  >
                    <div className="icon-box group-hover:shadow-glow">
                      <ion-icon name={item.icon}></ion-icon>
                    </div>
                    <div>
                      <p className="text-light-gray-70 text-fs-8 uppercase mb-[2px]">
                        {item.title}
                      </p>
                      <p className="text-white-2 text-fs-6 font-fw-500 transition-colors hover:text-orange-yellow-crayola">
                        {item.content}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="card p-4 mt-6">
              <h4 className="text-white-2 text-fs-7 mb-3">Follow me on:</h4>
              <div className="flex gap-3">
                {['logo-github', 'logo-linkedin', 'logo-twitter', 'logo-instagram'].map((icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-eerie-black-1 text-light-gray-70 hover:text-orange-yellow-crayola hover:scale-110 transition-all duration-300"
                  >
                    <ion-icon name={icon}></ion-icon>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form">
          <h3 className="text-white-2 text-fs-4 font-fw-500 mb-6 flex items-center">
            <ion-icon name="mail-open-outline" class="text-orange-yellow-crayola mr-2"></ion-icon>
            Send me a message
          </h3>

          <form 
            className="space-y-4" 
            onSubmit={handleSubmit}
            style={{animationDelay: '0.4s'}}
          >
            <div className="space-y-4">
              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="fullname"
                    className={`w-full bg-eerie-black-1 border ${
                      touched.fullname && !form.fullname ? 'border-bittersweet-shimmer' : 'border-jet'
                    } rounded-lg p-3 text-light-gray focus:border-orange-yellow-crayola outline-none transition-colors`}
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
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className={`w-full bg-eerie-black-1 border ${
                      touched.email && !form.email ? 'border-bittersweet-shimmer' : 'border-jet'
                    } rounded-lg p-3 text-light-gray focus:border-orange-yellow-crayola outline-none transition-colors`}
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
                <div className="relative">
                  <textarea
                    name="message"
                    className={`w-full bg-eerie-black-1 border ${
                      touched.message && !form.message ? 'border-bittersweet-shimmer' : 'border-jet'
                    } rounded-lg p-3 text-light-gray focus:border-orange-yellow-crayola outline-none transition-colors min-h-[150px]`}
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
                    ? 'bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold text-eerie-black-1 shadow-glow cursor-pointer'
                    : 'bg-eerie-black-1 text-light-gray-70 cursor-not-allowed'
                } p-0.5 transition-all duration-300`}
                type="submit"
                disabled={!isFormValid || formStatus === 'loading' || formStatus === 'success'}
              >
                <span className={`relative flex items-center gap-2 rounded-md px-5 py-3 transition-all duration-300 ease-in ${
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
