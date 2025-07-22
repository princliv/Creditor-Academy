// ContactSection.jsx
import React from 'react';
import { useEffect } from 'react';

const ContactSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.wonderengine.ai/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" style={{ padding: '60px 20px', background: 'linear-gradient(to right, #e0f7ff, #f0faff)' }}>
     
      <div style={{ maxWidth: '800px', margin: 'auto', height: '550px' }}>
        <iframe
          src="https://api.wonderengine.ai/widget/form/o69tKOXv3NV8GnS4aGls"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '8px'
          }}
          id="inline-o69tKOXv3NV8GnS4aGls"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-activation-type="alwaysActivated"
          data-deactivation-type="neverDeactivate"
          data-form-name="Contact us form"
          data-height="418"
          data-layout-iframe-id="inline-o69tKOXv3NV8GnS4aGls"
          data-form-id="o69tKOXv3NV8GnS4aGls"
          title="Contact us form"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
