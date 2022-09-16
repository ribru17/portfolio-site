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
                <h2>Employment Experience</h2>
                <div className="flex">
                    <div className="workCont">
                        <div className="workInfoCont">
                            <h3>AI Model Trainer at Surge AI</h3>
                            <h3>June 2022 - August 2022</h3>
                        </div>
                        <p className="workText">
                            Here I worked part-time with a team of over 80 people to write helpful and
                            production-quality code in order to teach an AI model to do the same.
                            My main focus was in Javascript and Typescript but I also trained
                            the bot in Rust and C.
                        </p>
                    </div>
                </div>
                <h2>Personal Experience</h2>
                <div className="flex">
                    <div className="workCont spaceBottom revOnMobile">
                        <div id="experienceTextCont">
                            <p id="experienceText">
                                I mostly use Express with Node for my backends and favor React as my frontend
                                framework. I even built this website using React and Typescript!
                                You can view this site's source code <a className="inlineLink" target="_blank" rel="noreferrer" href="https://github.com/ribru17/portfolio-site">here</a> or
                                take a look at some of my skills below!
                            </p>
                        </div>
                        <div className="typewriterCont">
                            <p className="typewriterStatic">background-color:&nbsp;</p>
                            <p className="typewriter"></p>
                        </div>
                    </div>
                </div>
                <div id="experienceCont">
                    <div className="bar">
                        <div className="max">Node.js</div>
                    </div>
                    <div className="bar">
                        <div className="max">Javascript / Typescript</div>
                    </div>
                    <div className="bar">
                        <div className="max">React.js / React Native</div>
                    </div>
                    <div className="bar">
                        <div className="max">HTML + CSS</div>
                    </div>
                    <div className="bar">
                        <div className="max">MongoDB</div>
                    </div>
                    <div className="bar">
                        <div className="max">Git</div>
                    </div>
                    <div className="bar">
                        <div className="max">C / C++</div>
                    </div>
                    <div className="bar">
                        <div className="eighty">Rust</div>
                    </div>
                    <div className="bar">
                        <div className="eighty">Python</div>
                    </div>
                    <div className="bar">
                        <div className="sixty">C#</div>
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