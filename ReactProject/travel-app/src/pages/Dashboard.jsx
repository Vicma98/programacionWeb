import React, { useEffect, useState } from 'react'
import { DashboardList } from '../components/DashboardList'

const userInitial ={
    nombre:"victor",
    apellido:"hernandez"
}

export const Dashboard = () => {
    const [nombre,setNombre]= useState("juliana");
    const [user,setUser] = useState(userInitial);
    const [fechaHora, setFechaHora]= useState (new Date());
    

    useEffect(()=> {
        setNombre("ERIK")
        
    }, [])

    useEffect(()=>{
        setUser({nombre: "Erik", apellido: " ERIKE"})
    },[nombre]

    )


    return (
        <>
        <DashboardList nombre={nombre} user={user} />
        </>
    
    )
}