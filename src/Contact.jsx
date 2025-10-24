import gitImgWhite from "/src/assets/github-mark-white.png"

export default function Contact(props) {
    return (
        <div id="contact" className="contact-container">
            <section className="contact-text">
                <p>
                    If you would like to reach out to me, view my resume, or explore the rest of my portfolio, please click the links to the right.
                </p>
            </section>
            <section className="contact-links-container">
                <a className="contact-link" target="_blank" rel="noopener noreferrer">
                    <img src={gitImgWhite} /> Email
                </a>
                <a className="contact-link" target="_blank" rel="noopener noreferrer">
                    <img src={gitImgWhite} /> GitHub
                </a>
                <a className="contact-link" target="_blank" rel="noopener noreferrer">
                    <img src={gitImgWhite} /> Resume
                </a>
            </section>
        </div>
    )
}