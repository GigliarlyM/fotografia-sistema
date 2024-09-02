//import React from "react"
import { useState } from "react";
import "../styles/form.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LogIn() {
    const [apelido, setApelido] = useState('')
    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(false)
    const navigate = useNavigate()
    const pathApi = 'http://localhost:8080/photographer/validation'

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(`Apelido: ${apelido}, Email: ${email}`)
        try {
            const reponse = await axios.post(pathApi, { apelido, email })
            console.log(reponse.data.photographer)

            if (reponse.data) {
                setValid(true)
            } else {
                setValid(false)
            }
        } catch (error) {
            console.error(error)
        }
    }

    if (valid) {
        navigate('photographer')
    }

    return (
        <div >
            <input type="text" required placeholder="Apelido" value={apelido} onChange={e => setApelido(e.target.value)} />
            <input type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={handleSubmit}>Entrar</button>
        </div>
    )
}

export default LogIn;