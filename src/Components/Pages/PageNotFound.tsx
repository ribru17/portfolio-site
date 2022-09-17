import { Link } from "react-router-dom"
import "./CSS/pagenotfound.css"

export default function PageNotFound() {

    return (
        <div className="pageDiv active">
            <h1>Page not found :(</h1>
            <Link id="notFoundHomeLink" to="/">Return home</Link>
            <div className="codeSnippet">
                <header>
                    PageNotFound.tsx
                </header>
                <pre>{"<div className=\"pageDiv\">"}</pre>
                <pre className="cursorLine">{"    {/* TODO: implement this page */}"}</pre>
                <pre>{"</div>"}</pre>
            </div>
        </div>
    )
}