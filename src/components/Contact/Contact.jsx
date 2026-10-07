import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [botField, setBotField] = useState("");

  const formRef = useRef(null);
  const [sectionRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Honeypot: if filled by a bot, silently exit
      if (botField && botField.trim().length > 0) {
        setSubmitStatus('success');
        setFormData({ email: '', name: '', subject: '', message: '' });
        setErrorMessage(null);
        setBotField('');
        return;
      }
      
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_edgi1pw';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_vr85hwn';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'lkbudMZAJM8aHvnY2';

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      trackEvent('contact_form_submit', { status: 'success' });
      setSubmitStatus('success');
      setFormData({ email: '', name: '', subject: '', message: '' });
      setErrorMessage(null);
      setBotField('');
    } catch (error) {
      console.error('Error sending email:', error);
      
      let errorMsg = 'Failed to send message. Please contact me directly at anduamlakalehegne@gmail.com';
      if (error?.status === 412) {
        errorMsg = 'Email service needs reconnection. Please contact me directly at anduamlakalehegne@gmail.com';
      } else if (error?.status === 400) {
        errorMsg = 'Invalid form data. Please check your inputs.';
      } else if (error?.status === 0 || !navigator.onLine) {
        errorMsg = 'No internet connection. Please check your network.';
      }
      
      setSubmitStatus('error');
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const formControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      formControls.start("visible");
    }
  }, [isInView, formControls]);

  return (
    <section 
      id="contact" 
      className={styles.contact}
      ref={sectionRef}
    >
      <div className={styles.contentWrapper}>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
        >
          Available for senior engineering roles, high-scale consulting, and contract projects. Let's build something exceptional!
        </motion.p>

        <div className={styles.contactContainer}>
          <motion.div 
            className={styles.formContainer}
            initial="hidden"
            animate={formControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
          >
            <form ref={formRef} onSubmit={handleSubmit}>
              {/* Single Honeypot field */}
              <input
                type="text"
                name="company_trap"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                autoComplete="off"
                tabIndex="-1"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}
              />
              <motion.div 
                className={styles.formGroup}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div 
                className={styles.formGroup}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div 
                className={styles.formGroup}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div 
                className={styles.formGroup}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </motion.div>
              <motion.button 
                type="submit" 
                className={styles.submitButton}
                variants={{
                  hidden: { scale: 0.9, opacity: 0 },
                  visible: { scale: 1, opacity: 1 }
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            <div className={styles.infoItem}>
              <Mail size={22} color="#646cff" />
              <a 
                href="mailto:anduamlakalehegne@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'inherit', textDecoration: 'none' }}
                onClick={() => trackEvent('contact_click', { platform: 'Email', location: 'Contact' })}
              >
                anduamlakalehegne@gmail.com
              </a>
            </div>
            <div className={styles.infoItem}>
              <Phone size={22} color="#646cff" />
              <a 
                href="tel:+251985253384" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'inherit', textDecoration: 'none' }}
                onClick={() => trackEvent('contact_click', { platform: 'Phone', location: 'Contact' })}
              >
                +251 985 253 384
              </a>
            </div>
            <div className={styles.infoItem}>
              <MapPin size={22} color="#646cff" />
              <span>Addis Ababa, Bole · Ethiopia</span>
            </div>
            <div className={styles.infoItem}>
              <Linkedin size={22} color="#646cff" />
              <a 
                href="https://www.linkedin.com/in/anduamlak-alehegne" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'inherit', textDecoration: 'none' }}
                onClick={() => trackEvent('contact_click', { platform: 'LinkedIn', location: 'Contact' })}
              >
                linkedin.com/in/anduamlak-alehegne
              </a>
            </div>
            <div className={styles.infoItem}>
              <Github size={22} color="#646cff" />
              <a 
                href="https://github.com/Anduamlakalehegne" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'inherit', textDecoration: 'none' }}
                onClick={() => trackEvent('contact_click', { platform: 'GitHub', location: 'Contact' })}
              >
                github.com/Anduamlakalehegne
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <AnimatePresence>
        {submitStatus && (
          <motion.div 
            className={`${styles.popup} ${styles[submitStatus]}`}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.popupContent}>
              {submitStatus === 'success' ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span style={{ color: '#10b981', fontWeight: 600 }}>Message sent successfully!</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  <span>{errorMessage || 'Failed to send message. Please email me directly.'}</span>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
