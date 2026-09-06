import "../styles/projects.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
} from "react-icons/fa";

import sharebite from "../assets/projects/ShareBite.png";
import skinfit from "../assets/projects/skinfit.png";
import birthday from "../assets/projects/birthday.png";
import sharebiteDemo from "../assets/projects/HADIATAHIR_demoVideo.mp4";

function Projects() {
  const projects = [
    {
      title: "ShareBite",
      featured: true,
      image: sharebite,
      demoVideo: sharebiteDemo,

      description:
        "A cross-platform food donation mobile application that connects donors, managers, riders, and receivers to reduce food waste using Firebase.",

      technologies: [
        "Flutter",
        "Firebase",
        "Cloudinary",
        "FlutterMap",
        "MVVM",
      ],

      github: "https://github.com/Hadia14",
      demo: "",
    },

    {
      title: "SkinFit E-Commerce Website",
      featured: false,
      image: skinfit,
      demoVideo: "",

      description:
        "A responsive e-commerce website with a modern shopping interface, clean product pages, category filtering, and an intuitive user experience.",

      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
      ],

      github: "https://github.com/Hadia14",
      demo: "",
    },

    {
      title: "Interactive Birthday Website",
      featured: false,
      image: birthday,
      demoVideo: "",

      description:
        "A personalized interactive website featuring animations, background music, photo galleries, and creative storytelling designed as a memorable digital birthday experience.",

      technologies: [
        "JavaScript",
        "CSS Animations",
        "Responsive Design",
        "UI/UX",
      ],

      github: "",
      demo: "Private Project",
    },
  ];

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>
          My <span>Projects</span>
        </h2>

        <p className="projects-description">
          A collection of projects demonstrating my experience in
          mobile application development, web development, and creative
          user experiences.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                {project.featured && (
                  <div className="featured-badge">
                    ⭐ Featured
                  </div>
                )}

                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">

                  {project.demoVideo && (
                    <a
                      href={project.demoVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaPlay />
                      Watch Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.demo &&
                    project.demo !== "Private Project" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}

                  {project.demo === "Private Project" && (
                    <span className="private-project">
                      🔒 Private Project
                    </span>
                  )}

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;