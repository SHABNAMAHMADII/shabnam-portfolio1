import { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';

const ContactPage = () => {
  const { user } = useUser();
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('contactForm');
    return saved ? JSON.parse(saved) : { name: '', email: '', message: '' };
  });
  
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [emailTyping, setEmailTyping] = useState(false);
  
  const hasUnsaved = formData.name || formData.email || formData.message;

  // Debounced email validation
  useEffect(() => {
    if (!formData.email) {
      setFormErrors(prev => ({ ...prev, email: '' }));
      return;
    }
    
    const timer = setTimeout(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setFormErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      } else {
        setFormErrors(prev => ({ ...prev, email: '' }));
      }
      setEmailTyping(false);
    }, 400);
    
    return () => clearTimeout(timer);
  }, [formData.email]);

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem('contactForm', JSON.stringify(formData));
  }, [formData]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'name') {
      if (!value.trim()) {
        setFormErrors(prev => ({ ...prev, name: 'Name is required' }));
      } else {
        setFormErrors(prev => ({ ...prev, name: '' }));
      }
    }
    if (name === 'message') {
      if (!value.trim()) {
        setFormErrors(prev => ({ ...prev, message: 'Message is required' }));
      } else {
        setFormErrors(prev => ({ ...prev, message: '' }));
      }
    }
    if (name === 'email') {
      setEmailTyping(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
        isValid = false;
      }
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }
    
    setFormErrors(newErrors);
    
    if (isValid) {
      setShowSuccessModal(true);
      // Optional: clear form
      // setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="page-container">
      <section className="contact-page-section">
        <h2>📬 Contact Me</h2>
        <p className="section-subtitle">I'd love to hear from you!</p>
        
        {hasUnsaved && (
          <div className="unsaved-hint">💾 You have unsent message data saved! Your form has been auto-saved.</div>
        )}
        
        {/* Live Preview */}
        <div className="live-preview">
          <h3>👀 Live Preview</h3>
          <div className="preview-card">
            <p><strong>📝 Name:</strong> {formData.name || <em>Waiting...</em>}</p>
            <p><strong>✉️ Email:</strong> {formData.email || <em>Waiting...</em>}</p>
            <p><strong>💬 Message:</strong> {formData.message || <em>Waiting...</em>}</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Enter your full name"
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>
          
          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="you@example.com"
            />
            {emailTyping && <span className="hint">✏️ Checking email validity...</span>}
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          
          <div className="form-group">
            <label>Your Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              placeholder="What would you like to say?"
              rows="5"
            />
            {formErrors.message && <span className="error">{formErrors.message}</span>}
          </div>
          
          <button type="submit" className="submit-btn">💖 Send Message</button>
        </form>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="modal">
            <span className="modal-close" onClick={() => setShowSuccessModal(false)}>✖</span>
            <h3>✨ Message Sent Successfully! ✨</h3>
            <p>Thank you <strong>{formData.name}</strong> for reaching out!</p>
            <p>I'll get back to you at <strong>{formData.email}</strong> as soon as possible.</p>
            <button onClick={() => setShowSuccessModal(false)} className="modal-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;