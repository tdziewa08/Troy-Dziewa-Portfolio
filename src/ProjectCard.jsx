export default function ProjectCard(props) {

    const showcase = props.technology.map(item => {
        return <span>{item}</span>
    })

    return (
        <div className="project-showcase">
            <aside className="project-card">
                <p className="project-title">{props.title}</p>
                <p className="project-desc">{props.desc}</p>
                <div className="link-container">
                    <a className="project-link" href={props.siteLink} target="_blank" rel="noopener noreferrer">Check it Out</a>
                    <a className="project-git-link" href={props.gitLink} target="_blank" rel="noopener noreferrer">
                        <img src={props.gitImgWhite} />
                    </a>
                </div>
                <div className="features">
                    <p>Technologies Used:</p>
                    <div className="features-grid">
                        {showcase}
                    </div>
                </div>
            </aside>
            <div className="showcase-img-container">
                <img src={props.img1} />
            </div>
            <div className="showcase-img-container">
                <img src={props.img2} />
            </div>
        </div>
    )
}