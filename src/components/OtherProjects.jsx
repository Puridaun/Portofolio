const projects = [{
    name: 'Interactive card details form',
    description: 'Interactive card details form with real-time validation, formatting and secure input.',
    technologies: ['js', 'css', 'react']
},
{
    name: 'Tip calculator',
    description: 'Interactive tip calculator with bill splitting and customizable percentage options.',
    technologies: ['js', 'css', 'react']
},
{
    name: 'FAQ accordion',
    description: 'Interactive FAQ accordion with smooth expand/collapse animations and responsive design.',
    technologies: ['js', 'css', 'react']
},
{
    name: 'Switch color',
    description: 'Interactive button that dynamically changes background color with smooth transitions.',
    technologies: ['js', 'css', 'react']
},
{
    name: 'Landing page',
    description: 'Modern responsive landing page with hero section and interactive elements.',
    technologies: ['js', 'css', 'react']
},
{
    name: 'Interactive rating',
    description: 'Interactive star rating component with hover effects and user feedback.',
    technologies: ['js', 'css', 'react']
}]



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
                                    <img src="/images/link.svg" />
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