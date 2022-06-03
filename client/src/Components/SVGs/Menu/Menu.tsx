import React from 'react'
import './menu.css'

interface Props extends React.CSSProperties {
    id?: string,
    onClick?(): any,
    open: boolean,
}

// export default function Menu(props: Props) {
const Menu = React.forwardRef((props: Props, ref: React.ForwardedRef<SVGSVGElement>) => {

    const {id, onClick, ...styles} = props

    return (
        <svg viewBox="0 0 100 80" height={30} width={30}
        style={{...styles}}
        id={id || ''}
        className={props.open ? 'close' : ''}
        ref={ref}
        onClick={() => {
            onClick?.()
        }}
        >
            <rect width={100} height={20} rx={12}></rect>
            <rect width={100} height={20} y={30} rx={12}></rect>
            <rect width={100} height={20} y={60} rx={12}></rect>
        </svg>
    )
})

export default Menu