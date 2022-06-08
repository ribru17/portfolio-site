import { useEffect } from "react"
import "./CSS/experience.css"

interface PageProps {
    resetScroll: boolean
}

export default function Experience(props: PageProps) {

    useEffect(() => {
        if (props.resetScroll) {
            window.scrollTo(0, 0)
        }
    })

    return (
        <>
            <h1>Experience</h1>
            <div className="largeBlock" id="experienceBody">
                <p>
                    I mostly use Express with Node for my backends and favor React as my frontend
                    framework. Take a look at some of my skills below!
                </p>
                <div id="experienceCont">
                    <div className="bar">
                        <div className="max">Node.js</div>
                    </div>
                    <div className="bar">
                        <div className="max">Javascript</div>
                    </div>
                    <div className="bar">
                        <div className="max">React.js & React Native</div>
                    </div>
                    <div className="bar">
                        <div className="max">Typescript</div>
                    </div>
                    <div className="bar">
                        <div className="max">MongoDB</div>
                    </div>
                    <div className="bar">
                        <div className="max">Git</div>
                    </div>
                    <div className="bar">
                        <div className="eighty">C</div>
                    </div>
                    <div className="bar">
                        <div className="eighty">C++</div>
                    </div>
                    <div className="bar">
                        <div className="eighty">Python</div>
                    </div>
                    <div className="bar">
                        <div className="sixty">Rust</div>
                    </div>
                    <div className="bar">
                        <div className="sixty">R</div>
                    </div>
                </div>
            </div>
        </>
    )
}