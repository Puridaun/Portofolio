import { mainProjects } from "./projects-data";
const MainProjects = () => {
  

    return (
        <>
            <section  className="projects-section std-section">
                <h2 id="projects-section" className="projects-title">Projects</h2>
                {mainProjects.map(project => {
                    return (<div className="projects-container">
                        <img className="project-images" src={`/images/${project.name}.png`} />
                        <div className="project-description">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="project-web-technologies">
                                {project.technologies.map(tech => (<img src={`./images/${tech}.png`} />))}
                            </div>
                            <div className="project-sources">
                                <a href={project.gitLink} target='_blank'>Code</a>
                                <a href={project.link} target='_blank'>Live Demo</a>
                            </div>
                        </div>
                    </div>)
                })}
            </section>
        </>);
}

export default MainProjects


