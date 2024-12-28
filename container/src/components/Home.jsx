import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Home = ({ isAuthenticated }) => {
    const navigate = useNavigate();
    if (isAuthenticated) {
        navigate("/dashboard");
    }
    return (
        <div>Home</div>
    )
}

export default Home