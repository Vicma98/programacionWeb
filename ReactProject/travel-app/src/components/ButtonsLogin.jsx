import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ButtonsLogin = () => {
    const navigate = useNavigate();
    return (
        <div className="container-buttons">
            <h3><span>Travel</span>App</h3>
            <div className="buttons">
                <button className="btn-login" onClick={() => navigate("/login")}>Log in</button>
                <button className="btn-register">Register</button>
            </div>
        </div>
    )
}