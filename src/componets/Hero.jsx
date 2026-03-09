import { useState, useEffect } from "react"
import { FaLinkedin, FaGithub, FaXTwitter, FaFacebook } from "react-icons/fa6"


const Hero = () => {

    const text = "I build modern web applications using React, JavaScript,Node.js and MongoDB";

    const [typedText, setTypedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
       if (index <text.length){
        const timeout = setTimeout(() => {
            setTypedText((prev) => prev + text[index]);
            setIndex(index + 1);
        }, 80);

        return () => clearTimeout(timeout);
       }
    }, [index, text]);

    return (
      <section id="home" className="hero">

<div className="social-icons">

<a href="https://www.linkedin.com/in/khethani-musandiwa" target="_blank">
  <FaLinkedin />
</a>

<a href="https://github.com/Khethani17" target="_blank">
  <FaGithub />
</a>

<a href="https://x.com" target="_blank">
  <FaXTwitter />
</a>

<a href="https://facebook.com" target="_blank">
  <FaFacebook />
</a>

</div>
         
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Khethani</span>
        </h1>
  
        <h2>Aspiring Full-Stack AI Developer</h2>
  
        <p>{typedText}</p>
  
        <div className="hero-buttons">
        <a href="#projects">
        <button>Projects</button>
        </a>
        </div>
        </div>
      </section>
    )
  }
  
  export default Hero