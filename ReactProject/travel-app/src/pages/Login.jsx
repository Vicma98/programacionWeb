import React from 'react'
import '../styles/Login.css'
import mundo from '../assets/mundo.svg'
import logo from '../assets/logoavion.svg'
import { ButtonsLogin } from '../components/ButtonsLogin'


export const Login = () => {
  return (
  <div className="container_principal">
    <img className="avion" src={logo} alt="logo avion" />
    <div className="container_world">
      <img src={mundo} alt="img mundo" />
    </div>
      <ButtonsLogin />
  </div>
    

  )
}
