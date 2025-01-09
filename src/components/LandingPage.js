import React from 'react';
import { ArrowRight, BookOpen, Clock, FileText } from 'lucide-react'; // Importing icons

// Service Card Component
const ServiceCard = ({ icon, title, description, onClick }) => (
  <div
    className="service-card"
    onClick={onClick}
    role="button"
    tabIndex={0}
  >
    <div className="service-icon" aria-label={`${title} icon`}>
      {icon}
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Landing Page Component
const LandingPage = () => {
  const services = [
    {
      title: "Methodological Support",
      description:
        "Expert guidance in research methods, study design, and overcoming methodological challenges.",
      icon: <ArrowRight />,
      link: "#methodological-support",
    },
    {
      title: "Personal Consultation",
      description:
        "One-on-one consulting sessions to address barriers and accelerate your research progress.",
      icon: <BookOpen />,
      link: "#personal-consultation",
    },
    {
      title: "Time Management",
      description:
        "Strategies and tools for effectively managing your academic workload.",
      icon: <Clock />,
      link: "#time-management",
    },
    {
      title: "Academic Services Rubric",
      description:
        "Comprehensive rubric outlining qualifications, offerings, and client outcomes.",
      icon: <FileText />,
      link: "#academic-services-rubric",
    },
  ];

  const handleServiceClick = (link) => {
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <h1>Nimrod Shavit - Academic Services</h1>
        <p>
          Your trusted partner in academic excellence and research
          development.
        </p>
      </header>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onClick={() => handleServiceClick(service.link)}
            />
          ))}
        </div>
      </section>

      {/* Academic Rubric Section */}
      <section
        id="academic-services-rubric"
        className="academic-rubric"
      >
        <h2>Academic Services Rubric</h2>
        <div className="rubric-content">
          <h3>Expertise and Qualifications</h3>
          <ul>
            <li>
              <strong>Educational Background:</strong> Doctorate-level
              education in a relevant field with extensive research
              experience.
            </li>
            <li>
              <strong>Research Contributions:</strong> Published in
              leading academic journals with advanced knowledge in
              theoretical paradigms.
            </li>
            <li>
              <strong>Collaborations:</strong> Partnered with prominent
              scholars on significant academic projects.
            </li>
          </ul>
          <h3>Service Offerings</h3>
          <ul>
            <li>
              <strong>Manuscript Review and Editing:</strong> Expertise in
              streamlining complex texts while maintaining scientific
              precision.
            </li>
            <li>
              <strong>Research Development:</strong> Skilled in refining
              arguments, ensuring coherence, and bridging theoretical gaps.
            </li>
            <li>
              <strong>Educational Support:</strong> Experience in teaching
              advanced concepts and developing engaging materials.
            </li>
          </ul>
          <h3>Approach to Excellence</h3>
          <ul>
            <li>
              <strong>Scientific Rigor:</strong> Emphasis on accuracy,
              coherence, and alignment with the latest literature.
            </li>
            <li>
              <strong>Tailored Services:</strong> Focused on understanding
              client needs and providing personalized feedback.
            </li>
            <li>
              <strong>Accessible Communication:</strong> Simplifying
              complex ideas for clarity without losing depth.
            </li>
          </ul>
          <h3>Client Outcomes</h3>
          <ul>
            <li>Enhanced manuscript quality for publication.</li>
            <li>
              Improved understanding of advanced theoretical concepts.
            </li>
            <li>
              Clear, impactful academic writing tailored for specific
              audiences.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

