import { HTMLProps, MouseEvent, useRef } from "react";
import './CoolButton.css'

export default function CoolButton(props: HTMLProps<HTMLButtonElement>) {

    const spanRef = useRef<HTMLSpanElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleClick = (e: MouseEvent) => {
        let relX = e.nativeEvent.offsetX
        let relY = e.nativeEvent.offsetY
        if (spanRef.current) {
            spanRef.current.style.top = relY + "px"
            spanRef.current.style.left = relX + "px"
        }
        let width = buttonRef.current?.getBoundingClientRect().width || 0
        if (spanRef.current) {
            spanRef.current.style.width = (width * 2) + "px"
            spanRef.current.style.height = (width * 2) + "px"
        }
        if (buttonRef.current) {
            buttonRef.current.style.color = 'black'
        }
        setTimeout(() => {
            if (spanRef.current) {
                spanRef.current.style.width = "0px"
                spanRef.current.style.height = "0px"
            }
            if (buttonRef.current) {
                buttonRef.current.style.color = 'white'
            }
        }, 1000)
    }

    return (
        <button ref={buttonRef} onClick={(e: MouseEvent<HTMLButtonElement>) => {
            handleClick(e)
            props.onClick?.(e)
            }}>
            {props.title}
            <span ref={spanRef}></span>
        </button>
    )
}