import "../styles/education.css";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

function Education() {

  return (

    <section id="education" className="education">

      <div className="education-container">

        {/* ================= EDUCATION ================= */}

        <motion.div

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          viewport={{ once: true }}

        >

          <h2>

            My <span>Education</span>

          </h2>

          <p className="education-text">

            My academic journey has equipped me with a strong foundation
            in computer science, software engineering, full stack
            development, mobile application development, and emerging
            technologies.

          </p>

          <div className="education-grid">

            <div className="education-card">

              <div className="education-icon">

                <FaGraduationCap />

              </div>

              <h3>

                Bachelor of Science in Computer Science

              </h3>

              <h4>

                Quaid-i-Azam University, Islamabad

              </h4>

              <span>

                2022 – 2026

              </span>

              <p>

                Currently pursuing a Bachelor's degree in Computer Science
                with a strong academic foundation in Software Engineering,
                Database Systems, Artificial Intelligence, Mobile App
                Development, and Full Stack Development.

              </p>

            </div>

          </div>

        </motion.div>



        {/* ================= CERTIFICATION ================= */}

        <motion.div

          className="certification-section"

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          viewport={{ once: true }}

        >

          <h2>

            Professional <span>Certification</span>

          </h2>

          <p className="education-text">

            Professional technical training completed through NAVTTC,
            strengthening my practical knowledge in Artificial Intelligence,
            Machine Learning, Data Science, and Blockchain.

          </p>

          <div className="certificate-card">

            <div className="education-icon">

              <FaCertificate />

            </div>

            <h3>

              NAVTTC Professional Training

            </h3>

            <h4>

              Artificial Intelligence • Machine Learning • Data Science • Blockchain

            </h4>

            <span>

              June 2024 – December 2024

            </span>

            <p>

              Successfully completed professional training under NAVTTC,
              gaining practical experience in AI, Machine Learning,
              Data Science, and Blockchain technologies.

            </p>

            <div className="certificate-preview">

              <a

                href="/certificates/navttc-certificate.pdf"

                target="_blank"

                rel="noopener noreferrer"

              >

                <img

                  src="/certificates/navttc-certificate.jpeg"

                  alt="NAVTTC Certificate"

                />

              </a>

            </div>

            <a

              href="/certificates/navttc-certificate.pdf"

              target="_blank"

              rel="noopener noreferrer"

              className="view-certificate"

            >

              View Full Certificate ↗

            </a>

          </div>

        </motion.div>

      </div>

    </section>

  );

}

export default Education;