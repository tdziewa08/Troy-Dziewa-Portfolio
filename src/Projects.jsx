import vgb2 from "/src/assets/sites/vg-bracket2.png"
import vgb3 from "/src/assets/sites/vg-bracket3.png"
import rf1 from "/src/assets/sites/recipe-finder1.png"
import rf2 from "/src/assets/sites/recipe-finder2.png"
import wb1 from "/src/assets/sites/the-wisenbergs1.png"
import wb3 from "/src/assets/sites/the-wisenbergs3.png"
import qz1 from "/src/assets/sites/quizzical1.png"
import qz2 from "/src/assets/sites/quizzical2.png"
import gd1 from "/src/assets/sites/gold-digger1.png"

import gitImgWhite from "/src/assets/github-mark-white.png"

import ProjectCard from "./ProjectCard.jsx"

export default function Projects() {
    return (
        <div id="projects" className="projects-container">
            <h2>Projects</h2>
            <span>Here you can find the projects I am most proud of. You can view my other projects on my <a href="https://www.github.com/tdziewa08" target="blank">GitHub</a> account.</span>
            <div className="project-cards">
                <ProjectCard
                    title={"Video Game Bracket"}
                    desc={"Determine the winner of a video game bracket"}
                    siteLink={"https://video-game-bracket.netlify.app/"}
                    gitLink={"https://github.com/tdziewa08/Video-Game-Bracket"}
                    gitImgWhite={gitImgWhite}
                    img1={vgb2}
                    img2={vgb3}
                    technology={["React", "API Integration", "State Management", "Responsive Design"]}
                />
                <ProjectCard
                    title={"Recipe Finder"}
                    desc={"Recipe finder app with smart substitutions"}
                    siteLink={"https://recipe-finder-td.netlify.app/"}
                    gitLink={"https://github.com/tdziewa08/Recipe-Finder"}
                    gitImgWhite={gitImgWhite}
                    img1={rf1}
                    img2={rf2}
                    technology={["React", "React Router", "Data Structures", "Responsive Design"]}
                />
                <ProjectCard
                    title={"The Wisenbergs"}
                    desc={"Website for my trivia team"}
                    siteLink={"https://the-wisenbergs.netlify.app/"}
                    gitLink={"https://github.com/tdziewa08/The-Wisenbergs-react"}
                    gitImgWhite={gitImgWhite}
                    img1={wb1}
                    img2={wb3}
                    technology={["React", "React Router", "Responsive Design"]}
                />
                <ProjectCard
                    title={"Quizzical"}
                    desc={"Simple, replayable trivia app"}
                    siteLink={"https://quizzical-td.netlify.app/"}
                    gitLink={"https://github.com/tdziewa08/Quizzical"}
                    gitImgWhite={gitImgWhite}
                    img1={qz1}
                    img2={qz2}
                    technology={["React", "API Integration", "State Management", "Responsive Design"]}
                />
                <ProjectCard
                    title={"Gold-Digger"}
                    desc={"Gold Marketplace Tracker"}
                    gitLink={"https://github.com/tdziewa08/Gold-Digger"}
                    gitImgWhite={gitImgWhite}
                    img1={gd1}
                    technology={["Node.js", "Node:Path Module", "Asynchronous JS", "DOM Manipulation"]}
                />
            </div>
        </div>
        
    )
}