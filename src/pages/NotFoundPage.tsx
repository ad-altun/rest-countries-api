import { Link } from 'react-router'

export default function NotFoundPage() {
    return (
        <div className='not-found-page'>404 Not Found
            <Link to='/'>Go To Home...
            </Link>
        </div>
    )
}