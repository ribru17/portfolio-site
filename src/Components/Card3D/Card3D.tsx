import React, { useState } from 'react'
import './card3d.css'

interface Props {
    children?: React.ReactNode,
    photo: string,
    aspectRatio: string
}

export default function Card3D({ children, photo, aspectRatio }: Props) {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(prev => !prev)
    }

    return (
        <div className={`background ${isClicked ? 'details' : ''}`} onClick={handleClick}>
            <div className="card" style={{
                aspectRatio: aspectRatio
            }}>
                <div className="photo" style={{
                    background: `url(${photo}) no-repeat center center`,
                    backgroundSize: 'cover',
                    }}></div>
                <div className="chart">
                    <div></div>
                    {children}
                    <div></div>
                </div>
            </div>
        </div>
    )
}