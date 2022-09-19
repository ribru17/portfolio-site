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
                <pre>&#60;<span className="code-identifier">div</span> <span className="code-property">className</span>=<span className="code-stringLiteral">"pageDiv"</span>&#62;</pre>
                <pre className="cursorLine">    &#123;<span className="code-comment">&#47;* TODO: implement this page *&#47;</span>&#125;</pre>
                <pre>&#60;/<span className="code-identifier">div</span>&#62;</pre>
            </div>
        </div>
    )
}