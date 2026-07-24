import "../styles/experience.css";
import { motion } from "framer-motion";

function Experience() {

const experiences=[

{

title:"Web Developer Intern",

company:"Devzz Tech Solutions",

duration:"June 2025 – August 2025",

description:[

"Assisted in developing responsive websites and improving existing web applications.",

"Worked on frontend functionality, UI improvements, and website maintenance.",

"Collaborated with the development team using modern web technologies.",

"Gained practical industry experience by contributing to real-world projects."

],

skills:["HTML","CSS","JavaScript","React","Git","GitHub"]

},

{

title:"Graphic Designer",

company:"Ministry of Foreign Affairs (MOFA), Pakistan",

duration:"AUG 2025 - SEP 2025",

description:[

"Designed professional banners and promotional graphics for official national and cultural events.",

"Created creative digital assets while maintaining branding consistency.",

"Worked on visual content for Independence Day, Marka-e-Haq, Kalash Festival, Basant Festival and other official campaigns."

],

skills:["Canva","Figma","Graphic Design","Branding"]

}

];

return(

<section id="experience" className="experience">

<motion.div

className="experience-container"

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.8}}

viewport={{once:true}}

>

<h2>

My <span>Experience</span>

</h2>

<p className="experience-text">

Hands-on experience gained through professional internships in
web development and graphic design, working on real-world projects
and collaborative environments.

</p>

<div className="timeline">

{

experiences.map((exp,index)=>(

<motion.div

className="experience-card"

key={index}

initial={{opacity:0,x:index%2===0?-50:50}}

whileInView={{opacity:1,x:0}}

transition={{duration:.6}}

viewport={{once:true}}

>

<div className="experience-header">

<div>

<h3>{exp.title}</h3>

<h4>{exp.company}</h4>

</div>

<span>{exp.duration}</span>

</div>

<ul>

{

exp.description.map((point,i)=>(

<li key={i}>{point}</li>

))

}

</ul>

<div className="experience-tags">

{

exp.skills.map(skill=>(

<span key={skill}>{skill}</span>

))

}

</div>

</motion.div>

))

}

</div>

</motion.div>

</section>

);

}

export default Experience;