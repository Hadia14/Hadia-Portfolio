import "../styles/skills.css";
import { motion } from "framer-motion";
import { useState } from "react";

function Skills() {

  const [activeCategory, setActiveCategory] = useState("All");

  const filterButtons = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Mobile",
    "Tools",
    "Data Science",
    "Soft Skills"
  ];

  const skillCards = [

    {
      category: "Frontend",
      title: "🎨 Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "React", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },

    {
      category: "Backend",
      title: "⚙️ Backend",
      skills: [
        { name: "Firebase", level: 85 },
        { name: "Node.js", level: 75 }
      ]
    },

    {
      category: "Database",
      title: "🗄️ Database",
      skills: [
        { name: "Firebase / Firestore", level: 85 },
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 70 }
      ]
    },

    {
      category: "Mobile",
      title: "📱 Mobile Development",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "Dart", level: 85 }
      ]
    },

    {
      category: "Tools",
      title: "🛠️ Tools",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 90 },
        { name: "Canva", level: 85 }
      ]
    },

    {
      category: "Data Science",
      title: "🤖 Data Science & AI",
      skills: [
        { name: "Python", level: 80 },
        { name: "Pandas & NumPy", level: 75 },
        { name: "Matplotlib / Seaborn", level: 70 },
        { name: "Machine Learning", level: 70 }
      ]
    }

  ];

  const softSkills = [
    "🧩 Problem Solving",
    "🧠 Analytical Thinking",
    "🤝 Team Collaboration",
    "💬 Effective Communication",
    "🎯 Attention to Detail",
    "⚡ Adaptability",
    "📅 Project Management",
    "📖 Continuous Learning"
  ];

  const filteredCards =
    activeCategory === "All"
      ? skillCards
      : skillCards.filter(card => card.category === activeCategory);

  return (

    <section id="skills" className="skills">

      <motion.div

        className="skills-container"

        initial={{ opacity: 0, y: 40 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: .8 }}

        viewport={{ once: true }}

      >

        <h2>
          My <span>Skills</span>
        </h2>

        <p className="skills-text">
          Technologies, frameworks, and development tools I use to build
          modern web and mobile applications with a strong focus on
          performance, scalability, and user experience.
</p>

        <div className="filter-buttons">

          {
            filterButtons.map(button => (

              <button

                key={button}

                className={activeCategory === button ? "active" : ""}

                onClick={() => setActiveCategory(button)}

              >

                {button}

              </button>

            ))
          }

        </div>

        <div className="skills-grid">

          {

            filteredCards.map((card) => (

              <motion.div

                key={card.category}

                className="skill-card"

                initial={{ opacity: 0, scale: .9 }}

                animate={{ opacity: 1, scale: 1 }}

                transition={{ duration: .4 }}

              >

                <h3>{card.title}</h3>

                <hr />

                {

                  card.skills.map((skill) => (

                    <div className="skill-item" key={skill.name}>

                      <div className="skill-header">

                        <span>{skill.name}</span>

                        <span>{skill.level}%</span>

                      </div>

                      <div className="progress">

                        <motion.div

                          className="progress-bar"

                          initial={{ width: 0 }}

                          whileInView={{
                            width: `${skill.level}%`
                          }}

                          transition={{ duration: 1 }}

                          viewport={{ once: true }}

                        />

                      </div>

                    </div>

                  ))

                }

              </motion.div>

            ))

          }

          {

            (activeCategory === "All" || activeCategory === "Soft Skills") && (

              <motion.div

                className="soft-card"

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

              >

                <h3>💡 Soft Skills</h3>

                <hr />

                <div className="soft-tags">

                  {

                    softSkills.map(skill => (

                      <span key={skill}>

                        {skill}

                      </span>

                    ))

                  }

                </div>

              </motion.div>

            )

          }

        </div>

      </motion.div>

    </section>

  );

}

export default Skills;