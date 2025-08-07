import { projects } from "./projects-data";


const OtherProjects = () => {

    return (
        <>
            <section className="other-projects-section std-section">
                <div className="other-projects-container">
                    {projects.map(project => (
                        <div className="project-card">
                            <div className="interactive-images">
                                <img className="project-card-image" src="/images/project.svg" />
                                <div className="project-card-active-image">
                                    <img src="/images/social.svg" />
                                    <a href={project.gitLink}><img src="/images/link.svg" /></a>
                                </div>
                            </div>
                            <h4>{project.name}</h4>
                            <p>{project.description}</p>
                            <div className="project-techologies">
                                {project.technologies.map(tech => (<img src={`./images/${tech}.png`} />))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default OtherProjects;