import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react'; // Importing icons

const LandingPage = () => {
  const services = [
    {
      title: "Methodological Support",
      description: "Expert guidance in research methods, study design, and overcoming methodological challenges.",
      icon: <ArrowRight />,
    },
    {
      title: "Personal Consultation",
      description: "One-on-one consulting sessions to address barriers and accelerate your research progress.",
      icon: <BookOpen />,
    },
    {
      title: "Ongoing Guidance",
      description: "Continuous support throughout your research and writing process until final submission.",
      icon: <Clock />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <h1>Stuck in Your Doctoral Journey?</h1>
      <p>Professional guidance to help doctoral candidates overcome obstacles and advance their research.</p>
      <button>Schedule a Consultation</button>

      {/* Services Section */}
      <div>
        {services.map((service, index) => (
          <div key={index} className="service-card">
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div>
        <h2>Why Choose Us?</h2>
        <h3>Extensive Academic Experience</h3>
        <p>Expert team with proven track record in research supervision.</p>
        <h3>Rapid Response</h3>
        <p>Quick support with 24-hour response time to queries.</p>
      </div>

      {/* Contact Section */}
      <div>
        <h2>Get in Touch</h2>
        <a href="mailto:nshavit@icloud.com">nshavit@icloud.com</a>
      </div>
    </div>
  );
};

export default LandingPage;
