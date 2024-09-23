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
            nome: "Jose",
            email: "jose@gmail.com",
            apelido: "josefi",
            dataNascimento: "2000-08-10",
            cpf
        }

        try {
            // A resposta do back end esta dando certo
            const response = await axios.post(`http://localhost:8080/photographer`, pessoa)


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
            <button onClick={handleSumbit}>Entrar</button>
            <footer className="footer"> &copy; 2024 FotoHub - Todos os direitos reservados</footer>
        </div>
    )
}

export default Cadastro;