import { HTMLProps } from "react";
import './CoolButton.css'

export default function CoolButton(props: HTMLProps<HTMLButtonElement>) {

    

    return (
        <button onClick={props.onClick}>
            {props.title}
            <span></span>
        </button>
    )
}