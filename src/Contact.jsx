import resume from "/src/assets/Copy TroyD Resume 2025.pdf"
import { FaGithub } from "react-icons/fa"
import { GrMailOption } from "react-icons/gr"
import { GrDocument } from "react-icons/gr"
import { GrCertificate } from "react-icons/gr"

import ContactLink from "./ContactLink.jsx"

export default function Contact(props) {
    return (
        <>
            <h3>Contact Me / Links</h3>
            <div id="contact" className="contact-container">
                <ContactLink
                    img={<GrMailOption />}
                    name="Email"
                    path="mailto:tdziewa08@gmail.com"
                />
                <ContactLink
                    img={<GrDocument />}
                    name="Resume"
                    path={resume}
                />
                <ContactLink
                    img={<GrCertificate />}
                    name="Course Certificate"
                    path={"https://scrimba.com/certificate-cert2uNjfKA1Joq9N9TD2SnRb9cJy8WBVtzVfwN"}
                />
                <ContactLink
                    img={<FaGithub />}
                    name="GitHub Profile"
                    path={"https://github.com/tdziewa08/"}
                />
            </div>
        </>
    )
}