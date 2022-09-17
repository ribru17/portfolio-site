/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "react-router-dom"
import "./CSS/pagenotfound.css"

export default function PageNotFound() {

//     const snippet =
// `1| <div className="pageDiv">
// 2|
// 3|    {/* TODO: implement this page */}
// 4|
// 5| </div>`;

    return (
        <div className="pageDiv active">
            <h1>Page not found :(</h1>
            <Link id="notFoundHomeLink" to="/">Home</Link>
            <div className="codeSnippet">
                <header>
                    PageNotFound.tsx
                </header>
                {/* <pre>
                    {snippet}
                </pre> */}
                <pre>{"<div className=\"pageDiv\">"}</pre>
                <pre className="cursorLine">{"    {/* TODO: implement this page */}"}</pre>
                <pre>{"</div>"}</pre>
            </div>
        </div>
    )
}