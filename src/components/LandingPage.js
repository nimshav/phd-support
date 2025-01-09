import React from 'react';
import { ArrowRight, BookOpen, Clock, FileText } from 'lucide-react'; // Importing icons

// Service Card Component
const ServiceCard = ({ icon, title, description, onClick }) => (
  <div className="service-card" onClick={onClick} role="button" tabIndex={0}>
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
      description: "Expert guidance in research methods, study design, and overcoming methodological challenges.",
      icon: <ArrowRight />,
      link: "#methodological-support",
    },
    {
      title: "Personal Consultation",
      description: "One-on-one consulting sessions to address barriers and accelerate your research progress.",
      icon: <BookOpen />,
      link: "#personal-consultation",
    },
    {
      title: "Time Management",
      description: "Strategies and tools for effectively managing your academic workload.",
      icon: <Clock />,
      link: "#time-management",
    },
    {
    

