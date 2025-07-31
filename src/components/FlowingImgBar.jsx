

const skillsArray = ["react", 'css', 'js', 'nodejs', 'postgre', 'github', 'typescript', "react", 'css', 'js', 'nodejs', 'postgre', 'github', 'typescript', "react", 'css', 'js', 'nodejs', 'postgre', 'github', 'typescript', "react", 'css', 'js', 'nodejs', 'postgre', 'github', 'typescript']

export const FlowingImgBar = () => {
    return (
        <div className="flowing-bar">
            <div key={1} className="image-track">
                {skillsArray.map((skill, index) => (
                    <div key={index} className="image-item">
                        <img src={`/images/${skill}.png`} alt={skill} />
                    </div>
                ))}

            </div>
        </div>
    )
}
