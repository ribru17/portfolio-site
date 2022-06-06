import "./CSS/experience.css"

export default function Experience() {
    return (
        <>
            <h1>Experience</h1>
            <div className="textBlock">
                <p>Worked on ...</p>
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
                </div>
            </div>
        </>
    )
}