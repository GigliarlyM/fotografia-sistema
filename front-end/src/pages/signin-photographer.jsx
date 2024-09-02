//import React from "react"
import { useState } from "react";
import axios from "axios"

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [apelido, setApelido] = useState('');
    const [data, setData] = useState('');
    const [cpf, setCpf] = useState('');

    const handleSumbit = async () => {
        const pessoa = {
            nome,
            email,
            apelido,
            dataNascimento: data,
            cpf
        }
        console.log(pessoa)

        try {
            const response = await axios.post(`http://localhost:8080/photographer`, pessoa)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form >
            <input type="text" required placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
            <input type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="Apelido" value={apelido} onChange={e => setApelido(e.target.value)} />
            <input type="date" value={data} onChange={e => setData(e.target.value)} />
            <input type="text" placeholder="xxx.xxx.xxx-xx" value={cpf} onChange={e => setCpf(e.target.value)} />
            <button onClick={handleSumbit}>Entrar</button>
        </form>
    )
}

export default Cadastro;