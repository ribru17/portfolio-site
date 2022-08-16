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
            case '/portfolio-site':
            case '/portfolio-site/':
                setActivePage(['active', '', '', ''])
                break
            case '/portfolio-site/experience':
                setActivePage(['', 'active', '', ''])
                break
            case '/portfolio-site/projects':
                setActivePage(['', '', 'active', ''])
                break
            case '/portfolio-site/contact':
                setActivePage(['', '', '', 'active'])
                break
        }
    }, [location])

    return (
        <div ref={ref} id="dropDown" style={{
                maxWidth: props.showing ? '150px' : '0%',
                borderRight: props.showing ? '2px solid darkgoldenrod' : 'none'
            }}>
            <Link className={activePage[0]} to="/portfolio-site">Home</Link>
            <Link className={activePage[1]} to="/portfolio-site/experience">Experience</Link>
            <Link className={activePage[2]} to="/portfolio-site/projects">Projects</Link>
            <Link className={activePage[3]} to="/portfolio-site/contact">Contact</Link>
        </div>
    )
})
export default DropDown