import React from "react";
import Skills from "./Skills"; // Importing Skills component
import Education from "./Education";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa"; // Importing Font Awesome icons

const About = () => {
  return (
    <section id="about" className="about">
      <h2 id="aboutText">ABOUT ME</h2>
      <div className="about-container">
        {/* Left Section - Personal Info */}
        <div className="personal-info">
          <h3>Personal Info</h3>
          <p>
            <span>First Name:</span> Idowu
          </p>
          <p>
            <span>Last Name:</span> Adeniyi
          </p>
          {/* <p>
            <span>Nationality:</span> Nigerian
          </p> */}
          <p>
            <span>Freelance:</span> Available
          </p>
          <p>
            <span>Address:</span> Toronto, ON M9V1N8.
          </p>
          <p>
            <span>Phone:</span> (416)402-0633
          </p>
          <p>
            <span>Email:</span> adeniyi.idowu50@gmail.com
          </p>
          <p>
            <span>Languages:</span> English
          </p>
        </div>

        {/* Skills Section */}
        <div className="personal-info">
          <h3>Skills</h3>
          <Skills />
        </div>

        {/* Right Section - Experience & Projects Completed */}
        <div className="experience-projects">
          <h3 id="education-heading">Education</h3>
          <div className="project-stats">
            <Education />
            <div>
              <span id="experience">1+</span>
              <p id="experienceText">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Relevant Experience Section */}
        <div className="relevant-experience">
          <h3>
            <FaBriefcase /> Relevant Experience
          </h3>
          <div className="experience-item">
            <h4>
              <span>07/2024 - 08/2024</span> Number Quest Game (Individual
              Project)
            </h4>
            <p>
              Developed an interactive game called "Number Quest" using
              JavaScript, allowing players to race towards a target number
              through strategic choices. Implemented dynamic gameplay logic,
              scoring system, and ensured responsive user interactions.
            </p>
          </div>
          <div className="experience-item">
            <h4>
              <span>08/2024 - 09/2024</span> Movie Booking Page with Animations
              (Individual Project)
            </h4>
            <p>
              Created a user-friendly web page for booking movie tickets using
              HTML, CSS, and JavaScript. Integrated animated transitions to
              enhance user engagement and a countdown timer for upcoming
              releases. Focused on delivering a seamless, responsive experience
              across devices.
            </p>
          </div>
          <div className="experience-item">
            <h4>
              <span>08/2024 - 09/2024</span> JavaScript and Node.js Assignments
            </h4>
            <p>
              Completed various lab assignments that involved developing
              full-stack applications using JavaScript, Node.js, and databases.
              These assignments helped solidify understanding of both front-end
              and back-end technologies, including CRUD operations and
              server-side scripting.
            </p>
          </div>
          <div className="experience-item">
            <h4>
              <span>01/2025 - 03/2025</span> Capstone Project - Work Hour
              Tracking Application
            </h4>
            <p>
              Developed a full-stack work hour tracking system where employees
              can clock in/out, and admin can manage shifts and employee data.
              <p>
                <h4>Key Features & Implementation:</h4>
              </p>
              <ol>
                <li>Authentication & Role Management</li>
                <li>Frontend-Backend Integration</li>
                <li>Database & API Development</li>
                <li>Email Notification System</li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
