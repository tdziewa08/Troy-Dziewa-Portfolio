import resume from "/src/assets/Copy TroyD Resume 2025.pdf"
import { FaGithub } from "react-icons/fa"
import { GrMailOption } from "react-icons/gr"
import { GrDocument } from "react-icons/gr"
import { GrCertificate } from "react-icons/gr"

export default function Contact(props) {
    return (
        <>
            <h3>Contact Me</h3>
            <div id="contact" className="contact-container">
                <div className="contact-card">
                    <a href="mailto:tdziewa08@gmail.com" className="icon-container">
                        <GrMailOption />
                    </a>
                    <p className="contact-card-desc">
                        Email
                    </p>
                </div>
                <div className="contact-card">
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="icon-container">
                        <GrDocument />
                    </a>
                    <p className="contact-card-desc">
                        Resume
                    </p>
                </div>
                <div className="contact-card">
                    <a href="https://scrimba.com/certificate-cert2uNjfKA1Joq9N9TD2SnRb9cJy8WBVtzVfwN" target="_blank" rel="noopener noreferrer" className="icon-container">
                        <GrCertificate />
                    </a>
                    <p className="contact-card-desc">
                        Course Certificate
                    </p>
                </div>
                <div className="contact-card">
                    <a href="https://github.com/tdziewa08/" target="_blank" rel="noopener noreferrer" className="icon-container">
                        <FaGithub />
                    </a>
                    <p className="contact-card-desc">
                        GitHub Profile
                    </p>
                </div>
            </div>
        </>
    )
}