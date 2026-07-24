import "../styles/about.css";
import { motion } from "framer-motion";

function About() {

  return (

    <section id="about" className="about">

      <motion.div
        className="about-container"

        initial={{opacity:0, y:50}}

        whileInView={{opacity:1, y:0}}

        transition={{duration:0.8}}

        viewport={{once:true}}

      >

        <div className="about-content">


          <h2>
            About <span>Me</span>
          </h2>


          <p>

            I am a Computer Science graduate passionate about
            developing modern web and mobile applications.
            My focus is creating clean, scalable, and
            user-friendly digital solutions using modern
            technologies.

          </p>


          <p>

            My Final Year Project,
            <strong> ShareBite: Reducing Food Waste Through
            Community Sharing</strong>, is a
            food donation platform that connects donors,
            managers, riders, and receivers to reduce food
            waste and support communities.

          </p>


          <p>

            I have also developed
            <strong> SkinFit E-Commerce Website</strong>,
            a responsive online shopping platform that
            strengthened my frontend development and
            user experience skills.

          </p>


        </div>



        <div className="about-cards">


          <div className="info-card">

            <h3>
              BS Computer Science
            </h3>

            <p>
              Computer Science Graduate
            </p>

          </div>



          <div className="info-card">

            <h3>
              Full Stack Development
            </h3>

            <p>
              React • Flutter • Firebase
            </p>

          </div>
        </div>


      </motion.div>


    </section>

  );

}


export default About;