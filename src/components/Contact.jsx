import "../styles/contact.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";

function Contact() {

  return (

    <section id="contact" className="contact">

      <motion.div

        className="contact-container"

        initial={{ opacity: 0, y: 40 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: .8 }}

        viewport={{ once: true }}

      >

        <h2>

          Get In <span>Touch</span>

        </h2>

        <p className="contact-text">

          Have a project in mind, an internship opportunity,
          or just want to connect? Feel free to reach out.
          I'd love to hear from you.

        </p>



        <div className="contact-grid">

          <div className="contact-card">

            <FaEnvelope />

            <h3>Email</h3>

            <span>

              <a href="mailto:hadiatahir142@gmail.com">

                hadiatahir142@gmail.com

              </a>

            </span>

          </div>



          <div className="contact-card">

            <FaPhoneAlt />

            <h3>Phone</h3>

            <span>

              +92 341 5029688

            </span>

          </div>



          <div className="contact-card">

            <FaMapMarkerAlt />

            <h3>Location</h3>

            <span>

              Islamabad, Pakistan

            </span>

          </div>

        </div>



        <div className="social-buttons">

          <a

            href="https://www.linkedin.com/in/hadia-tahir14"

            target="_blank"

            rel="noreferrer"

          >

            <FaLinkedin />

            LinkedIn

          </a>



          <a

            href="https://github.com/Hadia14"

            target="_blank"

            rel="noreferrer"

          >

            <FaGithub />

            GitHub

          </a>



          <a

            href="/Hadia_Tahir_CV.pdf"

            target="_blank"

            rel="noreferrer"

          >

            <MdDownload />

            Download CV

          </a>

        </div>

      </motion.div>

    </section>

  );

}

export default Contact;