import "../styles/hero.css";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import portfolio from "../data/portfolio";
import profileImage from "../assets/images/pic7.jpeg";

function Hero() {

  return (

    <section id="home" className="hero">

      <motion.div
        className="hero-content"

        initial={{opacity:0, y:40}}

        animate={{opacity:1, y:0}}

        transition={{duration:1}}
      >

        <p className="hero-intro">
          Hello, I'm
        </p>


        <h1>
          {portfolio.name}
        </h1>


        <TypeAnimation

          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Flutter Developer",
            2000,
          ]}

          speed={50}

          repeat={Infinity}

          className="hero-title"

        />


        <p className="hero-description">

          Computer Science graduate passionate about building
          modern web and mobile applications using React,
          Flutter, Firebase and other technologies.

        </p>



        <div className="hero-buttons">

  <a 
    href="#projects" 
    className="primary-btn"
  >
    View Projects
  </a>


  <a
    href={portfolio.cv}
    target="_blank"
    rel="noreferrer"
    className="secondary-btn"
  >
    View CV
  </a>


  <a
    href={portfolio.cv}
    download
    className="secondary-btn"
  >
    Download CV
  </a>


</div>


        <div className="hero-social">

          <a href={portfolio.github} target="_blank">
            <FaGithub/>
          </a>


          <a
            href="https://www.linkedin.com/in/hadia-tahir14"
            target="_blank"
          >
            <FaLinkedin/>
          </a>

        </div>


      </motion.div>



      <motion.div

        className="hero-card"

        initial={{opacity:0, x:80}}

        animate={{opacity:1, x:0}}

        transition={{duration:1}}

      >

        <div className="profile-ring">

          <div className="profile">
  <img
    src={profileImage}
    alt="Alyana"
    className="profile-image"
  />
</div>

        </div>



        <span className="tech react">
          React
        </span>


        <span className="tech flutter">
          Flutter
        </span>


        <span className="tech firebase">
          Firebase
        </span>


        <span className="tech ai">
          AI
        </span>


      </motion.div>


    </section>

  );
}


export default Hero;