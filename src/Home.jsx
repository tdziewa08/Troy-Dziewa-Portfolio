import profilePic from "/src/assets/profile-pic.jpg"

export default function Home() {
    return (
        <div className="home-container">
            <nav>
                <a>Home</a>
                <a>Projects</a>
                <a>About</a>
                <a>Contact</a>
            </nav>
            <section className="profile">
                <div className="profile-info">
                    <section>
                        <h1>Troy Dziewa</h1>
                        <h2>Self-taught web developer of 3 years</h2>
                        <p>wiuehbruigthwerig hweuirhguiwe rihwer gpwiuer ghweurgh iwehprg pwerg ipower wehrogi wiheorigohpweor hwoiehrgopw phwepr hgpwehp;o</p>
                    </section>
                </div>
                <div className="profile-img-container">
                    <img src={profilePic} />
                </div>
            </section>
        </div>
    )
}