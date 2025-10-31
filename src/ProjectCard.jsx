export default function ProjectCard(props) {

    const featuredSkills = props.technology.map(item => {
        return <span>{item}</span>
    })

    return (
        <div className="project-showcase">
            <aside className="project-card">
                <p className="project-title">{props.title}</p>
                <p className="project-desc">{props.desc}</p>
                <div className="link-container">
                    {
                    props.siteLink &&
                    <a className="project-link" href={props.siteLink} target="_blank" rel="noopener noreferrer">Visit Website</a>
                    }
                    <a className="project-git-link" href={props.gitLink} target="_blank" rel="noopener noreferrer">
                        <img src={props.gitImgWhite} /> GitHub Repo
                    </a>
                </div>
                <div className="features">
                    <div className="features-grid">
                        {featuredSkills}
                    </div>
                </div>
            </aside>
            <div className="showcase-img-container">
                <img src={props.img1} />
            </div>
            {
            props.img2 &&
            <div className="showcase-img-container">
                <img src={props.img2} />
            </div>
            }
        </div>
    )
}