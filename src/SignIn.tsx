import { useState } from 'react';
import './SignIn.css';
import { useCart } from './CartContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const cartService = useCart();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        // Handle authentication logic here (e.g., API call)
        axios.post('/api/sign-in', { email, password })
            .then(response => {
                const user = response.data;
                cartService.signIn(user);
                console.log(`User signed in: ${user.email}`);
                navigate('/catalog');
            })
            .catch(error => {   
                console.error('Sign-in failed:', error);
            }
        );
    };
    

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <img className="logo" src="/assets/images/logo.png" />
                <div className="sign-in">Sign In</div>
                <div className="sub-text">to acquire awesome bots</div>
                <input
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="buttons">
                    <button type="submit" className="button cta">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}