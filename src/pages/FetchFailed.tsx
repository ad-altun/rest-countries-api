import { Link } from "react-router";
import { BiErrorCircle } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";

export default function FetchFailed() {
    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <div className="fetch-failed-page">
            <div className="fetch-failed-content">
                <BiErrorCircle className="fetch-failed-icon" />
                <h1 className="fetch-failed-title">Oops! Something went wrong</h1>
                <p className="fetch-failed-message">
                    We couldn't load the data. This might be due to a network issue or the server being temporarily unavailable.
                </p>
                <p className="fetch-failed-suggestion">
                    Please check your internet connection and try again.
                </p>
                <div className="fetch-failed-actions">
                    <button onClick={handleRetry} className="fetch-failed-button primary">
                        <MdRefresh className="button-icon" />
                        Try Again
                    </button>
                    <Link to={'/'} className="fetch-failed-button secondary">
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}