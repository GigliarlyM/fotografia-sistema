import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginClient() {
    const [apelido, setApelido] = useState('')
    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(false)
    const navigate = useNavigate()
    const pathApi = 'http://localhost:8080/client/validation'

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(`Apelido: ${apelido}, Email: ${email}`)
        try {
            const reponse = await axios.post(pathApi, { apelido, email })
            console.log(reponse.data.client)

            if (reponse.data.client) {
                setValid(true)
                //sessionStorage.setItem('cpf_id', reponse.data.client.cpf)
                //sessionStorage.setItem('name_photographer', reponse.data.client.nome)
            } 
        } catch (error) {
            console.error(error)
        }
    }

    if (valid) {
        navigate('/client')
    }

    return (
        
        <div >
        <div>
            <button onClick={() => navigate("login/photographer")}>Voltar para a Home</button>

        </div>
            <h1>Login Cliente</h1>
            <input type="text" required placeholder="Apelido" value={apelido} onChange={e => setApelido(e.target.value)} />
            <input type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={handleSubmit}>Entrar</button>

        </div>
    )
}