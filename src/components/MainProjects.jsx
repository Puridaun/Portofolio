
const MainProjects = () => {
    const projects = [{
        name: 'Rent cars app',
        description: 'Interactive card details form with real-time validation, formatting and secure input.',
        technologies: ['js', 'css', 'react', 'typescript', 'postgre'],
        link: 'https://rent-cars-app-production.up.railway.app/',
        gitLink: 'https://github.com/Puridaun/Rent-cars-app'
    },
    {
        name: 'Tip calculator',
        description: 'Interactive tip calculator with bill splitting and customizable percentage options.',
        technologies: ['js', 'css', 'react'],
        link: ''
    },
    {
        name: 'FAQ accordion',
        description: 'Interactive FAQ accordion with smooth expand/collapse animations and responsive design.',
        technologies: ['js', 'css', 'react'],
        link: ''
    }]

    return (
        <>
            <section  className="projects-section std-section">
                <h2 id="projects-section" className="projects-title">Projects</h2>
                {projects.map(project => {
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


