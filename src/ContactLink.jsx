export default function ContactLink(props) {
    return (
        <div className="contact-card">
            <a href={props.path} rel="noopener noreferrer" target="blank" className="icon-container">
                {props.img}
            </a>
            <p className="contact-card-name">
                {props.name}
            </p>
        </div>
    )
}