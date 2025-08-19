import React from 'react';
import '../styles/Skills.css';

const skills = [
  { name: 'HTML', logo: '/logos/html5.png' },
  { name: 'CSS', logo: '/logos/css3.png' },
  { name: 'JavaScript', logo: '/logos/javascript.png' },
  { name: 'React.js', logo: '/logos/react.png' },
  { name: 'Bootstrap', logo: '/logos/bootstrap.png' },
  { name: 'Node.js', logo: '/logos/nodejs.png' },
  { name: 'Express.js', logo: '/logos/express.png' },
  { name: 'Git', logo: '/logos/git.png' },
  { name: 'GitHub', logo: '/logos/github.png' },
  { name: 'Tailwind CSS', logo: '/logos/tailwindcss.png' },
  { name: 'MySQL', logo: '/logos/mysql.png' },
  { name: 'N8N', logo: '/logos/n8n.png' },
  { name: 'GLC5', logo: '/logos/plc.png' },
  { name: 'arm', logo: '/logos/arm.png' },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Competenze</h2>
      <div className="skills__grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill__card">
            <img src={skill.logo} alt={skill.name} className="skill__logo" />
            <span className="skill__name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
