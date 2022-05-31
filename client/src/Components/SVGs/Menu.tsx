import './menu.css'
import {useState} from 'react'

interface Props extends React.CSSProperties {
    id?: string,
    onClick?(): any
}

export default function Menu(props: Props) {

    const {id, onClick, ...styles} = props
    const [closed, setClosed] = useState(false)

    return (
        <svg viewBox="0 0 100 80" height={30} width={30}
        style={{...styles}}
        id={id || ''}
        className={closed ? 'close' : ''}
        onClick={() => {
            setClosed(!closed)
            onClick?.()
        }}
        >
            <rect width={100} height={20} rx={12}></rect>
            <rect width={100} height={20} y={30} rx={12}></rect>
            <rect width={100} height={20} y={60} rx={12}></rect>
        </svg>
    )
}