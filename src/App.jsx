import About from "./About.jsx"
import Projects from "./Projects.jsx"
import Contact from "./Contact.jsx"

export default function App() {

  return (
    <div className="home-container">
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}