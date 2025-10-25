import profilePic from "/src/assets/profile-pic.jpg"

export default function Home() {
    return (
        <section id="home" className="profile">
            <div className="profile-info">
                <section>
                    <h1>Troy Dziewa</h1>
                    <p className="title">Web Developer</p>
                    <p>I have been learning web development for the past 3 years, and am still actively learning today.</p>
                </section>
            </div>
            <div className="profile-img-container">
                <img src={profilePic} />
            </div>
        </section>
    )
}