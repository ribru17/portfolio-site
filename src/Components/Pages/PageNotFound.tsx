import { Link } from "react-router-dom"
import "./CSS/pagenotfound.css"

export default function PageNotFound() {
    return (
        <>
            <h1>Page not found :(</h1>
            <Link id="notFoundHomeLink" to="/">Home</Link>
        </>
    )
}