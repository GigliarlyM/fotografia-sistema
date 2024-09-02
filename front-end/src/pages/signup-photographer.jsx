//import React from "react"
import { useState } from "react";
import axios from "axios"

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [apelido, setApelido] = useState('');
    const [data, setData] = useState('');
    const [cpf, setCpf] = useState('');
    let validade = false

    const handleSumbit = async () => {
        
        const pessoa = {
            nome: "Jose",
            email: "jose@gmail.com",
            apelido: "josefi",
            dataNascimento: "2000-08-10",
            cpf
        }
        console.log(pessoa)

        try {
            // A resposta do back end esta dando certo
            const response = await axios.post(`http://localhost:8080/photographer`, pessoa)

            console.log("Fotografo cadastrado")
            validade = true

            if (validade) {
                console.log(`Acesso livre`)
            }

            console.log(response.data)
        } catch (error) {
            //console.log(error.response.data.message)
            if (error.response.data.message == "CPF já cadastrado") {
                validade = false
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
        </div>
    )
}

export default Cadastro;