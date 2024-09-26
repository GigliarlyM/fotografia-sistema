//import React from "react"
import { useState } from "react";
import axios from "axios"

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [apelido, setApelido] = useState('');
    const [data, setData] = useState('');
    const [cpf, setCpf] = useState('');

    const handleSubmit = async () => {
        
        const pessoa = {
            nome,
            email,
            apelido,
            dataNascimento,
            cpf
        }

        try {
            // A resposta do back end esta dando certo
            const response = await axios.post(import.meta.env.VITE_APP_API_URL + `/photographer`, pessoa)
            console.log(response.data)
        } catch (error) {
            if (error.response.data.message == "CPF já cadastrado") {
                console.log("CPF já cadastrado")
            } else {
                console.error(error)
            }
        }
    }

    return (
        <div >
            <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="Apelido" value={apelido} onChange={e => setApelido(e.target.value)} />
            <input type="date" value={data} onChange={e => setData(e.target.value)} />
            <input type="text" required placeholder="xxx.xxx.xxx-xx" value={cpf} onChange={e => setCpf(e.target.value)} />
            <button type="button" onClick={handleSubmit}>Entrar</button>
            <footer className="footer"> &copy; 2024 FotoHub - Todos os direitos reservados</footer>
        </div>
    )
}

export default Cadastro;