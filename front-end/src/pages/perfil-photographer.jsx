import { useNavigate } from "react-router-dom"

export default function PerfilPhotographer() {
    const navigate = useNavigate()
    const cpfPhotographer = sessionStorage.getItem('cpf_id')
    const namePhotographer = sessionStorage.getItem('name_photographer')
    let photographer = {
        nome: namePhotographer,
        cpf: cpfPhotographer
    }

    // const getInfo = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:8080/photographer/${cpfPhotographer}`)

    //         photographer = response.data.photographer

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // getInfo()

    return (
        <div>
            <p>{photographer.nome}</p>
            <p>{photographer.cpf}</p>
            <button onClick={() => navigate("/photographer/alter")}>Alterar credenciais</button>
        </div>
    )
}