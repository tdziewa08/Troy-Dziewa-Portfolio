import vgb1 from "/src/assets/sites/vg-bracket1.png"
import vgb2 from "/src/assets/sites/vg-bracket2.png"
import vgb3 from "/src/assets/sites/vg-bracket3.png"


// MAYBE ONLY SAVE THE IMAGES AS, "WHATS WISIBLE", INSTEAD OF, "WHOLE PAGE"
import wb1 from "/src/assets/sites/the-wisenbergs1.png"
import wb2 from "/src/assets/sites/the-wisenbergs2.png"
import wb3 from "/src/assets/sites/the-wisenbergs3.png"
import wb4 from "/src/assets/sites/the-wisenbergs4.png"

export default function Projects() {
    return (
        <>
            <div>Projects</div>
            <div className="project-showcase">
                <div className="vg-img-container">
                    <img src={vgb1} />
                </div>
                <div className="vg-img-container">
                    <img src={vgb2} />
                </div>
                <div className="vg-img-container">
                    <img src={vgb3} />
                </div>
            </div>
            <div className="project-showcase">
                <div className="vg-img-container">
                    <img src={wb1} />
                </div>
                <div className="vg-img-container">
                    <img src={wb2} />
                </div>
                <div className="vg-img-container">
                    <img src={wb3} />
                </div>
                <div className="vg-img-container">
                    <img src={wb4} />
                </div>
            </div>
        </>
        
    )
}