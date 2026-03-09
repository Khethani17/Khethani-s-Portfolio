import profileImg from "../assets/profile.jpg"

const About = () => {
    return (
      <section id="about" className="about">
  
        <div className="about-card">
  
          <div className="about-left">
  
          <img src={profileImg} alt="Khethani" className="profile-img" />
  
            <div className="about-info">
  
              <p><strong>Name:</strong> Khethani Musandiwa</p>
              <p><strong>Profile:</strong> Aspiring Full-Stack Developer</p>
              <p><strong>Cell:</strong> 0681615706</p>
              <p><strong>Email:</strong> ktn940317@gmail.com</p>

            </div>
  
          </div>
  
          <div className="about-right">
  
            <h2>About Me</h2>
  
            <p>
              I am an aspiring web developer with a strong foundation
              in HTML, CSS, and Bootstrap, currently expanding my skills
              in JavaScript and React. I enjoy turning clean designs into
              responsive, user-friendly websites and continuously improving
              my problem-solving abilities.
            </p>
  
          </div>
  
        </div>
  
      </section>
    )
  }
  
  export default About