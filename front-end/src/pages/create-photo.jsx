import { useState } from "react"
import axios from "axios"

export default function CreatePhoto() {
    const cpfPhotographer = sessionStorage.getItem("cpf_id")
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [link, setLink] = useState('')
    const pathApi = import.meta.env.VITE_APP_API_URL + "/photo"
    const token = sessionStorage.getItem('auth_token')
    
    const handleSubmit = async () => {
        try {
            const response = await axios.post(pathApi + `/${cpfPhotographer}`, { price, url: link }, {auth: token})
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="form">
            <h1 className="cards-perfil">Adicione aqui sua Foto:</h1>
            <input type="text" placeholder="Título da foto" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="number" placeholder="10.00" value={price} onChange={e => setPrice(e.target.value)} />
            <input type="url" placeholder="http://www.google.com" value={link} onChange={e => setLink(e.target.value)} />
            <br />

            <div className="botao-Enviar">
            <button type="submit" onClick={handleSubmit}>Enviar</button>
            </div>
            <footer className="footer"> &copy; 2024 FotoHub - Todos os direitos reservados</footer>
        </div>
    )
}