import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
    return (
        <div className="loading">
            <div className="loading-card">
                <AiOutlineLoading3Quarters />
                <p>Loading ...</p>
            </div>
        </div>
    )
}