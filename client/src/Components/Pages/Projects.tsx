import { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import { after } from 'underscore'
import Github from '../SVGs/Github/Github'
import Wurd from '../../assets/images/wurd.jpg'
import Westwordle from '../../assets/images/westwordle.jpg'
import Chordeographer from '../../assets/images/chordeographerpreview.jpg'
import PageProps from '../../Types/PageProps'
import './CSS/projects.css'

const TOTAL_IMAGES = 3

const Projects = forwardRef((props: PageProps, ref: ForwardedRef<HTMLDivElement>) => {

    const [pageClass, setPageClass] = useState('pageDiv')
    const [loading, setLoading] = useState(props.standAlone)

    const imageLoaded = after(TOTAL_IMAGES, () => {
        setLoading(false)
        if (props.standAlone) {
            setPageClass('pageDiv active')
        }
    })

    useEffect(() => {
        if (props.standAlone) {
            window.scrollTo(0, 0)
        }
    }, [props.standAlone])

    return (
        <>
            <h1 style={{
                opacity: loading ? 1 : 0,
                display: loading ? '' : 'none'
            }}>Loading...</h1>
            <div className={pageClass} ref={ref}>
                <h1>Projects</h1>
                <div className="projectDiv">
                    <h2 className='projectTitle'>Westwordle<a className='toSource' rel='noreferrer' target="_blank" href="https://github.com/ribru17/westwordle"><Github /></a></h2>
                    <img onLoad={() => {imageLoaded()}} src={Westwordle} alt="Westwordle preview" />
                    <div className="descDiv">
                        <div className="stackDiv">
                            <p>React</p>
                            <p>Typescript</p>
                        </div>
                        <p>
                            This is a take on the New York Times' popular Wordle game with all words
                            being UCLA-themed. 
                        </p>
                    </div>
                </div>
                <div className="projectDiv">
                    <h2 className='projectTitle'>Wurd (Text Editor App)<a className='toSource' rel='noreferrer' target="_blank" href="https://github.com/ribru17/text-editor-app"><Github /></a></h2>
                    <img onLoad={() => {imageLoaded()}} src={Wurd} alt="Wurd preview" />
                    <div className="descDiv">
                        <div className="stackDiv">
                            <p>C++</p>
                            <p>OOP</p>
                        </div>
                        <p>
                            This is a text editor app I made for a school project. The text editor is
                            capable of basic functions such as opening and editing files, and saving and creating
                            files, and also comes with a basic spell checking system based on a provided dictionary
                            file which can also be changed by the user.
                        </p>
                    </div>
                </div>
                <div className="projectDiv">
                    <h2 className='projectTitle'>Chordeographer<a className='toSource' rel='noreferrer' target="_blank" href="https://github.com/ribru17/text-editor-app"><Github /></a></h2>
                    <img onLoad={() => {imageLoaded()}} src={Chordeographer} alt="Wurd preview" />
                    <div className="descDiv">
                        <div className="stackDiv">
                            <p>React Native</p>
                            <p>Javascript</p>
                        </div>
                        <p>
                            This is a basic iOS app that provides helpful tools and tips related
                            to music theory. It gives suggestions for chord progressions based on
                            your preferred key and is also capable of generating random chord
                            progressions within that key.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Projects