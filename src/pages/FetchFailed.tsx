import { Link } from "react-router";

// Application error: a server-side exception has occurred 
// (see the browser's console for more information).

export default function FetchFailed() {
    return (
        <div className="fetch-failed">
            <h1 className="fetch-failed-text">Sorry, a roblem occured during the loading the data.</h1>
            <Link to={'/'} className="fetch-failed-link">Go Home</Link>
        </div>
    )
}