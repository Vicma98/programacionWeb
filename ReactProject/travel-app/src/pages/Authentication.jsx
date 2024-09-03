import React, { useState } from 'react';
import '../styles/Login.css';
import mundo from '../assets/mundo.svg';
import logo from '../assets/logoavion.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Authentication = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginService = async (e) => {
        e.preventDefault();
        
        const URL= import.meta.env.VITE_URL_BASE;
        const data = {
            username: username,
            password: password
        };

        await axios.post(`${URL}/users/login`, data)
            .then((resp) => {
                console.log(resp);
                if (resp.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successful',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/dashboard");
                }
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Incorrect username or password. Please try again.',
                });
            });
    };

    return (
        <div className="container_principal">
            <img className="avion" src={logo} alt="logo avion" />
            <div className="container_world">
                <img src={mundo} alt="img mundo" />
            </div>
            <div className='w-full h-20 mt-44 flex flex-col justify-center items-center'>
                <h5 className='font-bold text-2xl text-gray-950'>Login</h5>
                <input type='text' placeholder='Username' className='mt-7 border-2 rounded-lg' onChange={(e) => setUsername(e.target.value)} />
                <input type='password' placeholder='Password' className='mt-7 border-2 rounded-lg' onChange={(e) => setPassword(e.target.value)} />
                <button className='mt-5 bg-[#121534] w-20 text-white rounded-lg' onClick={loginService}>Login</button>
                <button className='mt-5 bg-[#7453a5] w-20 text-white rounded-lg' onClick={() => navigate("/")}>Volver</button>
            </div>
        </div>
    );
};