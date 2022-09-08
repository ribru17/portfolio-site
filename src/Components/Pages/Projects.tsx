import { ForwardedRef, forwardRef, useEffect } from 'react'
// import { after } from 'underscore'
import Github from '../SVGs/Github/Github'
import WurdGIF from '../../assets/images/wurdpreviewcropped.gif'
import Westwordle from '../../assets/images/westwordle.jpg'
import Chordeographer from '../../assets/images/chordeographerpreview.jpg'
import PageProps from '../../Types/PageProps'
import Card3D from '../Card3D/Card3D'
import './CSS/projects.css'

// const TOTAL_IMAGES = 0

const Projects = forwardRef((props: PageProps, ref: ForwardedRef<HTMLDivElement>) => {

    // const [pageClass, setPageClass] = useState('pageDiv')
    // const [loading, setLoading] = useState(props.standAlone)

    // const imageLoaded = after(TOTAL_IMAGES, () => {
    //     setLoading(false)
    //     if (props.standAlone) {
    //         setPageClass('pageDiv active')
    //     }
    // })

    useEffect(() => {
        if (props.standAlone) {
            window.scrollTo(0, 0)
        }
    }, [props.standAlone])

    return (
        <>
            {/* <h1 style={{
                opacity: loading ? 1 : 0,
                display: loading ? '' : 'none'
            }}>Loading...</h1> */}
            {/* <div className={pageClass} ref={ref}> */}
            <div className='pageDiv active' ref={ref}>
                <h1>Projects</h1>
                <h3>Click an image to show relevant skills</h3>
                <div className="projectDiv">
                    <h2 className='projectTitle'>Westwordle<a className='toSource' rel='noreferrer' target="_blank" href="https://github.com/ribru17/westwordle"><Github /></a></h2>
                    {/* <img onLoad={() => {imageLoaded()}} src={Westwordle} alt="Westwordle preview" /> */}
                    {/* <div style={{width: '100%'}}> */}
                        <Card3D photo={Westwordle} aspectRatio='1.5'>
                            <div className="card-bar card-bar2"><span>React</span></div>
                            <div className="card-bar card-bar2"><span>Typescript</span></div>
                        </Card3D>
                    {/* </div> */}
                    <div className="descDiv">
                        {/* <div className="stackDiv">
                            <p>React</p>
                            <p>Typescript</p>
                        </div> */}
                        <p>
                            This is a take on the New York Times' popular Wordle game with all words
                            being UCLA-themed. 
                        </p>
                    </div>
                </div>
                <div className="projectDiv">
                    <h2 className='projectTitle'>Wurd (Text Editor App)<a className='toSource' rel='noreferrer' target="_blank" href="https://github.com/ribru17/text-editor-app"><Github /></a></h2>
                    {/* <img onLoad={() => {imageLoaded()}} src={Wurd} alt="Wurd preview" /> */}
                    
                    <Card3D photo={WurdGIF} aspectRatio='1.8'>
                        <div className="card-bar card-bar2"><span>C++</span></div>
                        <div className="card-bar card-bar2"><span>OOP</span></div>
                    </Card3D>
                    <div className="descDiv">
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
                    {/* <img onLoad={() => {imageLoaded()}} src={Chordeographer} alt="Wurd preview" /> */}
                    
                    <Card3D photo={Chordeographer} aspectRatio='1.5'>
                        <div className="card-bar card-bar2"><span>JS</span></div>
                        <div className="card-bar card-bar2"><span>React Native</span></div>
                    </Card3D>
                    <div className="descDiv">
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