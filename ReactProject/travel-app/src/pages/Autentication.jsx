import React, { useEffect, useState } from 'react'
import '../styles/Login.css'
import mundo from '../assets/mundo.svg'
import logo from '../assets/logoavion.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Login } from './Login'

export const Autentication = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginService = async (e) => {
        e.preventDefault();

        const data = {
            username: username,
            password: password
        }

        await axios.post("http://37.60.252.97:3000/api/users/login", data)
            .then((resp) => {
                console.log(resp)
                if (resp.status == 200) {
                    navigate("/dashboard")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

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
                <button className="mt-5 bg-[#82609a] w-20 text-white rounded-lg" onClick={() => navigate("/back")}>Back </button>
            </div>
        </div>
    )
}