import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/area-content.css"

export default function PerfilPhotographer() {
    const navigate = useNavigate()
    const cpfPhotographer = sessionStorage.getItem('cpf_id')
    const [photographer, setPhotographer] = useState({
        nome: '',
        apelido: '',
        dataNascimento: '',
        email: '',
        cpf: ''
    })
    const [isLoading, setIsLoanding] = useState(false)

    useEffect(() => {
        const fetchPhotographerInfo = async () => {
            setIsLoanding(true)
            try {
                if (cpfPhotographer) {
                    const response = await axios.get(`http://localhost:8080/photographer/${cpfPhotographer}`)
                    
                    setPhotographer(response.data.photographer)
                }else {
                    navigate("/photographer/login")
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoanding(false)
            }
        }

        fetchPhotographerInfo()
    }, [cpfPhotographer, navigate])

    if (isLoading) {
        return <div>Carregando dados do fotógrafo</div>
    }

    return (
        <div >
            <h1 className="cards-perfil">Adicione sua Fotografia</h1>
            <div className="area-content">
            <p>{photographer.nome}</p>
            <p>{photographer.apelido}</p>
            <p>{photographer.dataNascimento.substring(0, 10)}</p>
            <p>{photographer.email}</p>
            <p>{photographer.cpf}</p>
            </div>
            <button onClick={() => navigate("/photographer/photo/create")}>Adicionar foto</button>
            <button onClick={() => navigate("/photographer/alter")}>Alterar credenciais</button>
            <button onClick={() => navigate("/photographer/photo")}>Exibir fotos</button>
        </div>
    )
}