import React, { useEffect, forwardRef, useState } from "react"
import PageProps from '../../Types/PageProps'
import "./CSS/experience.css"

const Experience = forwardRef((props: PageProps, ref: React.ForwardedRef<HTMLDivElement>) => {

    const [pageClass, setPageClass] = useState('pageDiv')

    useEffect(() => {
        if (props.standAlone) {
            window.scrollTo(0, 0)
            setPageClass('pageDiv active')
        }
    }, [props.standAlone])

    return (
        <div className={pageClass} ref={ref}>
            <h1>Experience</h1>
            <div className="largeBlock" id="experienceBody">
                <p>
                    I mostly use Express with Node for my backends and favor React as my frontend
                    framework. I even built this website using React with Typescript, complete with an Express
                    backend! You can view this site's source code <a className="inlineLink" target="_blank" rel="noreferrer" href="https://github.com/ribru17/portfolio-site">here</a> or
                    take a look at some of my skills below!
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
        </div>
    )
})

export default Experience