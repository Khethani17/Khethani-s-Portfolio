

const Skills = () => {
    const skills = [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node",
        "MongoDB",
        "Git",
        "Github",
        "Bootstrap"
    ];

    return (  
        <section id="skills" className="skills">

  <div className="skills-card">

    <h2>Skills</h2>

    <div className="skills-grid">
      {skills.map((skill) => (
        <div key={skill}>{skill}</div>
      ))}
    </div>

  </div>

</section>
    );
}
 
export default Skills;