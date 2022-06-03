import React from 'react'
import { Link } from 'react-router-dom'
import './DropDown.css'

interface DropDownType {
    showing: boolean,
    setShowing: React.Dispatch<React.SetStateAction<boolean>>,
}

const DropDown = React.forwardRef((props: DropDownType, ref: React.ForwardedRef<HTMLDivElement>) => {

    return (
        <div ref={ref} id="dropDown" style={{maxWidth: props.showing ? '150px' : '0%'}}>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
})
export default DropDown