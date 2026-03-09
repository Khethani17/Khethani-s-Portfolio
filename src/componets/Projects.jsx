const Projects = () => {

    const projects = [
      {
        id: 1,
        title: "Nail Bar Booking App",
        description: "A booking system for a nail salon where customers can schedule appointments.",
        tech: "React • CSS • JSON Server",
        github: "https://github.com/Khethani17/Nail-Bar",
        demo: "phindi-nail-bar.netlify.app"
      },
      {
        id: 2,
        title: "Khethani's Portfolio",
        description: "My personal portfolio website built with React to display my projects, skills, and development journey.",
        tech: "React • CSS • JSON Server",
        github: "#",
        demo: "#"
      },
      {
        id: 3,
        title: "Twitter clone",
        description: "A social media clone inspired by Twitter where users can post tweets, view timelines, and interact with posts.",
        tech: "HTML • CSS",
        github: "https://github.com/Khethani17/Twitter-solo",
        demo: "twitter-solo-zaio.netlify.app"
      },
      {
        id: 4,
        title: "Youtube clone",
        description: "A YouTube-inspired web application that allows users to browse and watch videos using a modern responsive interface.",
        tech: "HTML • CSS",
        github: "hhttps://github.com/Khethani17/youtube-zaio",
        demo: "youtube-zaio26.netlify.app"
      },
      {
        id: 5,
        title: "Netflix clone",
        description: "A Netflix-inspired streaming interface that displays movie categories and trailers using API data.",
        tech: "HTML • CSS",
        github: "https://github.com/Khethani17/ZAIO-NETFLIX",
        demo: "zaio-khethani-flx.netlify.app"
      }
      ,
      {
        id: 6,
        title: "Tesla clone",
        description: "A responsive Tesla landing page clone showcasing modern UI design and smooth scrolling sections.",
        tech: "HTML • CSS",
        github: "https://github.com/Khethani17/Zaio-Tesla",
        demo: "tesla-zaio26.netlify.app"
      }
    
    
    ]
  
    return (
      <section id="projects" className="projects">
  
        <h2 className="projects-title">Projects</h2>
  
        <div className="projects-container">
  
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
  
              <h3>{project.title}</h3>
  
              <p>{project.description}</p>
  
              <p className="tech">{project.tech}</p>
  
              <div className="project-buttons">
                <a href={project.github} target="_blank">GitHub</a>
                <a href={project.demo} target="_blank">Live Demo</a>
              </div>
  
            </div>
          ))}
  
        </div>
  
      </section>
    )
  }
  
  export default Projects