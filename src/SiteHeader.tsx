import { Link } from 'react-router-dom';
import './SiteHeader.css';

export default function SiteHeader() {
    return (
        <div className="container">
            <div className="left">
                <img className="logo" src="/assets/images/logo.png" alt="Logo" />
                <Link to={`/`}>Home</Link>
                <Link to={`/catalog`}>Catalog</Link>
                <div className="cartHeader">
                <Link to={`/cart`}>Cart</Link>
                </div>
            </div>
            <div className="right">
                <a href="">Sign In</a>
                <a href="" className="cta">Register</a>
            </div>
        </div>
    )
}