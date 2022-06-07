import "./CSS/experience.css"

export default function Experience() {
    return (
        <>
            <h1>Experience</h1>
            <div className="largeBlock">
                <p>
                    &emsp;&emsp;I mostly use Express with Node for my backends and favor React as my frontend
                    framework. I'm very comfortable with the MERN stack but I'm an extremely quick
                    learner and I can handle any frameworks thrown my way. Take a look at some of my
                    skills below!
                    </p>
                <div id="experienceCont">
                    <div className="bar">
                        <div className="max">Node.js</div>
                    </div>
                    <div className="bar">
                        <div className="max">Javascript</div>
                    </div>
                    <div className="bar">
                        <div className="max">React.js / React Native</div>
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
                        <div className="sixty">R</div>
                    </div>
                </div>
            </div>
        </>
    )
}