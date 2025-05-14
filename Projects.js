const Projects = () => {
    const projectList = [
      { title: "News App", desc: "AI-based news verification app." },
      { title: "Student Management", desc: "Django-based admin app." }
    ];
  
    return (
      <section id="projects">
        <h2>Projects</h2>
        {projectList.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default Projects;
  