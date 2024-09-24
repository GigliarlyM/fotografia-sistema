import axios from "axios"
import { useState } from "react"

export default function AlterDataPhotographer() {
    // essa pagina precisa do CPF do login
    const [apelido, setApelido] = useState('')
    const [email, setEmail] = useState('')
    const API_URI = import.meta.env.VITE_APP_API_URL

    const handleSubmit = async () => {
        // fazer a requisição PUT para atualizar os dados do photographer
        const dataAlt = {
            apelido,
            email,
            cpf: sessionStorage.getItem(`cpf_id`)
        }

        try {
            const response = await axios.put(
                API_URL + `/photographer/${dataAlt.cpf}`,
                {apelido: dataAlt.apelido, email: dataAlt.email}
            )

            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="form">
            <h1 className="cards-perfil">Altere aqui seus Dados</h1>
            <input type="text" placeholder="Apelido" value={apelido} onChange={e => setApelido(e.target.value)}/>
            <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <br />
            <div className="botao-Atualizar">
            <button onClick={handleSubmit}>Atualizar dados</button>
            </div>
            <footer className="footer"> &copy; 2024 FotoHub - Todos os direitos reservados</footer>
        </div>
    )
}
