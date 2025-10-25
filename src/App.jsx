import Home from "./Home.jsx"
import Projects from "./Projects.jsx"
import About from "./About.jsx"
import Contact from "./Contact.jsx"

export default function App() {

  return (
    <div className="home-container">
      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <Home />
      <Projects />
      {/* <About /> */}
      <Contact />
    </div>
  )
}