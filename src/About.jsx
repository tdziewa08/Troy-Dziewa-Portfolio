import profilePic from "/src/assets/profile-pic2.jpg"

export default function About() {
    return (
        <section id="about" className="profile">
            <div className="profile-info">
                <section>
                    <h1>Troy Dziewa</h1>
                    <p className="title">Web Developer</p>
                    <p>
                        I have been learning web development for the past 2 years, and am still actively learning today. I am looking to get my start in the industry, and prove that I can be a great addition to any team.
                    </p>
                </section>
            </div>
            <div className="profile-img-container">
                <img src={profilePic} />
            </div>
        </section>
    )
}