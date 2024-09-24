//import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPhotographer() {
    const [apelido, setApelido] = useState('')
    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(false)
    const navigate = useNavigate()
    const pathApi = 'http://localhost:8080/photographer/validation'

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const reponse = await axios.post(pathApi, { apelido, email })

            if (reponse.data.photographer) {
                setValid(true)
                sessionStorage.setItem('cpf_id', reponse.data.photographer.cpf)
            }
        } catch (error) {
            console.error(error)
        }
    }

    if (valid) {
        navigate('/photographer')
    }

    return (
        <div className="form">
            <div>
                <button onClick={() => navigate("login/photographer")}>Voltar para a Home</button>
            </div>
            <h1>Login Fotográfo</h1>
            <input type="text" required placeholder="Apelido" value={apelido} onChange={e => setApelido(e.target.value)} />
            <input type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <br />
            <button onClick={handleSubmit}>Entrar</button>
            <footer className="footer"> &copy; 2024 FotoHub - Todos os direitos reservados</footer>

        </div>
    )
}
