import './SiteHeader.css';

export default function SiteHeader() {
    return (
        <div className="container">
            <div className="left">
                <img className="logo" src="/assets/images/logo.png" alt="Logo" />
                <a>Home</a>
                <a href="">Catalog</a>
                <div className="cartHeader">
                    <a href="">Cart</a>
                </div>
            </div>
            <div className="right">
                <a href="">Sign In</a>
                <a href="" className="cta">Register</a>
            </div>
        </div>
    )
}