import { Link } from 'react-router-dom';
import './SiteHeader.css';
import { useCart } from './CartContext';
import { useEffect, useState } from 'react';
import type { IUser } from './user.model';

export default function SiteHeader() {
    const cartService = useCart();
    const [user, setUser] = useState<IUser | null>(null);
    const [showSignOut, setShowSignOut] = useState(false);
    const toggleSignOutMenu = () => {
        setShowSignOut(!showSignOut);
    };

    // Subscribe to user changes
    useEffect(() => {
        cartService.user$.subscribe((user) => {
            setUser(user);
        });
    }, [cartService.user$]);

    const signOut = () => {
        cartService.signOut();
    };
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
            {!user && (
                <div className="right">
                    <Link to={`/sign-in`}>Sign In</Link>
                    <a href="" className="cta">Register</a>
                </div>
            )}
            {user && (
                <div className="right">
                    <img src="/assets/images/profile.png" onClick={() => toggleSignOutMenu()} alt="profile" />
                    {showSignOut && (
                        <div className="sign-out">
                            <button onClick={() => signOut()}>Sign Out</button>
                        </div>)}
                </div>
            )
            }
        </div >
    )
}