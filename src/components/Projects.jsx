import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'WINS (Educational Management Web Application)',
      description: 'A comprehensive web application for student enrollment, attendance tracking, and grade management, developed using PHP, HTML, CSS, and MySQL.',
      link: '#',
    },
    {
      name: 'Car Rental System',
      description: 'A transportation management system for booking and managing transportation services, developed using Java, MySQL, and HTML/CSS.',
      link: '#',
    },
    {
      name: 'SIKSHA (Tuition Class Management System)',
      description: 'A web app for scheduling classes, managing student records, and generating reports, developed using React, Spring Boot, and MongoDB.',
      link: '#',
    },
    {
      name: 'Meddonate (Mobile App)',
      description: 'A mobile app connecting donors with patients in need of medical supplies, built with React, Firebase, and Java backend services.',
      link: '#',
    },
    {
      name: 'Virtual Fitting Room (Glamour Grab)',
      description: 'A 3D model-based virtual fitting room app for trying on clothes online, using the MERN stack and Blender Tool.',
      link: '#',
    },
    {
      name: 'Online Fitness Center',
      description: 'A social media app for fitness enthusiasts to share workouts, track progress, and participate in live classes, built using Spring Boot, React, and MongoDB.',
      link: '#',
    },
    {
      name: 'E-Commerce Web Application: Case Cobra',
      description: 'A legal case and client management system for law firms, built using Next.js, React, and MongoDB.',
      link: '#',
    },
    {
      name: 'Online Chat App',
      description: 'A real-time chat application utilizing WebSockets for seamless messaging between users.',
      link: '#',
    },
    {
      name: 'ChatBot Project',
      description: 'A simple chatbot with voice input and output, built using Materialize for UI design.',
      link: '#',
    },
    {
      name: 'College-Courses API',
      description: 'A full-stack application to manage and display college and course details, using React.js for the frontend and Java Spring Boot with JPA for the backend.',
      link: '#',
    },
    {
      name: 'BargainBazzar',
      description: 'An e-commerce application with online purchasing capabilities, developed using the MERN stack.',
      link: '#',
    },
  ];

  return (
    <section 
      id="projects" 
      style={{
        padding: '60px 20px',
        backgroundColor: '#2c003e',  
        color: '#e6e6e6', 
      }}
    >
      <div className="projects-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card" 
            style={{
              backgroundColor: "#0f0f1a",  
              borderRadius: '10px', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              padding: '20px',
              margin: '15px',
              width: '300px',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', color: '#b3a3d7' }}>{project.name}</h3> 
            <p style={{ fontSize: '1rem', color: '#d1d1d1' }}>{project.description}</p> 
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                color: '#00bcd4', 
                fontWeight: 'bold', 
                fontSize: '1.1rem', 
                textDecoration: 'none', 
                marginTop: '10px', 
                display: 'inline-block'
              }}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
