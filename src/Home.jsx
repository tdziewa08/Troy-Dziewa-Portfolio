import profilePic from "/src/assets/profile-pic.jpg"

export default function Home() {
    return (
        <div className="home-container">
            <nav>
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
            <section id="home" className="profile">
                <div className="profile-info">
                    <section>
                        <h1>Troy Dziewa</h1>
                        <p className="title">Self-taught Web Developer</p>
                        <p>I have been learning web development for the past 3 years, and am still actively learning today.</p>
                    </section>
                </div>
                <div className="profile-img-container">
                    <img src={profilePic} />
                </div>
            </section>
        </div>
    )
}