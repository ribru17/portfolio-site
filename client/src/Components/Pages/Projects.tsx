import Wurd from '../../assets/images/wurd.jpg'
import './CSS/projects.css'

export default function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <div className="projectDiv">
                <h2>Wurd (Text Editor App)</h2>
                <img src={Wurd} alt="Wurd preview" />
                <div className="descDiv">
                    <p>
                        This is a text editor app I made for a school project. The text editor is
                        capable of basic functions such as opening and editing files, and saving and creating
                        files, and also comes with a basic spell checking system based on a provided dictionary
                        file which can also be changed by the user. It was programmed in C++ (using libraries
                        written in C) and demonstrates OOP principles and different data structures such as tries,
                        linked lists, stacks, etc.
                    </p>
                    <div className="stackDiv">
                        <p>C++</p>
                        <p>OOP</p>
                    </div>
                </div>
            </div>
        </>
    )
}