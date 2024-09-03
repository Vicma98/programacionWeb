import React, { useState } from 'react';
import '../styles/Login.css';
import mundo from '../assets/mundo.svg';
import logo from '../assets/logoavion.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Importa SweetAlert2

export const Register = () => {
    const navigate = useNavigate();
    const [names, setNames] = useState("");
    const [lastnames, setLastNames] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerService = async (e) => {
        e.preventDefault();

        const data = {
            names,
            lastnames,
            username,
            email,
            password
        };

        await axios.post("http://37.60.252.97:3000/api/users/create", data)
            .then((resp) => {
                console.log(resp);
                if (resp.status === 201) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User registered successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        navigate("/");
                    });
                }
            })
            .catch((err) => {
                console.log('Error response:', err.response);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to register user. Please check your input.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            });
    };

    return (
        <div className="container_principal">
            <img className="avion" src={logo} alt="logo avion" />
            <div className="container_world">
                <img src={mundo} alt="img mundo" />
            </div>
            <div className='w-full h-20 mt-60 flex flex-col justify-center items-center'>
                <h5 className='font-bold text-2xl text-gray-950'>Register</h5>
                <input type='text' placeholder='First Name' className='mt-5 border-2 rounded-lg' onChange={(e) => setNames(e.target.value)} />
                <input type='text' placeholder='Last Name' className='mt-4 border-2 rounded-lg' onChange={(e) => setLastNames(e.target.value)} />
                <input type='text' placeholder='Username' className='mt-4 border-2 rounded-lg' onChange={(e) => setUsername(e.target.value)} />
                <input type='email' placeholder='Email' className='mt-4 border-2 rounded-lg' onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' className='mt-4 border-2 rounded-lg' onChange={(e) => setPassword(e.target.value)} />
                <button className='mt-4 bg-[#121534] w-20 text-white rounded-lg' onClick={registerService}>Register</button>
                <button className='mt-3 bg-[#7453a5] w-20 text-white rounded-lg' onClick={() => navigate("/")}>Volver</button>
            </div>
        </div>
    )
}