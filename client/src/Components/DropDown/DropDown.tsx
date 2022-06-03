import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './DropDown.css'

interface DropDownType {
    showing: boolean,
    setShowing: React.Dispatch<React.SetStateAction<boolean>>,
}

const DropDown = React.forwardRef((props: DropDownType, ref: React.ForwardedRef<HTMLDivElement>) => {

    let location = useLocation()
    const [activePage, setActivePage] = useState<string[]>([
        '',
        '',
        '',
        ''
    ])

    useEffect(() => {
        switch(location.pathname) {
            case '/':
                setActivePage(['active', '', '', ''])
                break
            case '/projects':
                setActivePage(['', 'active', '', ''])
                break
            case '/experience':
                setActivePage(['', '', 'active', ''])
                break
            case '/contact':
                setActivePage(['', '', '', 'active'])
                break
        }
    }, [location])

    return (
        <div ref={ref} id="dropDown" style={{
                maxWidth: props.showing ? '150px' : '0%',
                borderRight: props.showing ? '2px solid darkgoldenrod' : 'none'
            }}>
            <Link className={activePage[0]} to="/">Home</Link>
            <Link className={activePage[1]} to="/projects">Projects</Link>
            <Link className={activePage[2]} to="/experience">Experience</Link>
            <Link className={activePage[3]} to="/contact">Contact</Link>
        </div>
    )
})
export default DropDown