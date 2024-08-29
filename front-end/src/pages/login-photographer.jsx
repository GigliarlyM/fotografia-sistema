//import React from "react"
import { useState } from "react";
import "../css/form.css"
import { useNavigate } from "react-router-dom";

function LogIn() {
    const [apelido, setApelido] = useState('')
    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(false)
    const navigate = useNavigate()
    const pathApi = 'http://localhost:8080/photographers/valid'

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        console.log(`Apelido: ${apelido}, Email: ${email}`)
        try {
            const reponse = await fetch(pathApi, {apelido, email})

            if (reponse.data) {
                setValid(true)
            } else {
                setValid(false)
            }
        } catch (error) {
            console.error(error)
        }

        if(valid) {
            navigate('/')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" required placeholder="Apelido" value={apelido} onChange={e => setApelido(e.target.value)} />
            <input type="email" required  placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="submit" value="Entrar" />
        </form>
    )
}

export default LogIn;