import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function PerfilPhotographer() {
    const navigate = useNavigate()
    const cpfPhotographer = sessionStorage.getItem('cpf_id')
    let photographer

    // if (cpfPhotographer == null) {
    //     navigate("/photographer/login")
    //     return
    // }
    console.log(cpfPhotographer)

    const getInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/photographer/${cpfPhotographer}`)

            photographer = response.data.photographer
            
            console.log(photographer);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            {getInfo()}
            <p>{photographer.nome}</p>
            <p>{photographer.apelido}</p>
            <p>{photographer.dataNascimento}</p>
            <p>{photographer.email}</p>
            <p>{photographer.cpf}</p>
            <button onClick={() => navigate("/photographer/alter")}>Alterar credenciais</button>
        </div>
    )
}