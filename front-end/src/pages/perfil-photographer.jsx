import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function PerfilPhotographer() {
    const navigate = useNavigate()
    const cpfPhotographer = sessionStorage.getItem('cpf_id')
    const [isLoading, setIsLoanding] = useState(false)
    const [photographer, setPhotographer] = useState({
        nome: '',
        apelido: '',
        dataNascimento: '',
        email: '',
        cpf: ''
    })
    const token = sessionStorage.getItem('auth_token')

    useEffect(() => {
        const fetchPhotographerInfo = async () => {
            setIsLoanding(true)
            try {
                if (cpfPhotographer) {
                    const response = await axios.get(import.meta.env.VITE_APP_API_URL + `/photographer/${cpfPhotographer}`, {auth: token})

                    setPhotographer(response.data.photographer)
                } else {
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
            <h1 className="cards-perfil">Perfil</h1>

            <section className="credential">
                <div className="field-names">
                    <p>Nome</p>
                    <p>Apelido</p>
                    <p>Data de Nascimento</p>
                    <p>Email</p>
                    {/* <p>CPF</p> dado sensivel */}
                </div>
                <div className="field">
                    <p>{photographer.nome}</p>
                    <p>{photographer.apelido}</p>
                    <p>{`${photographer.dataNascimento.substring(8, 10)}
                    / ${photographer.dataNascimento.substring(5, 7)} /
                    ${photographer.dataNascimento.substring(0, 4)}`}</p>
                    <p>{photographer.email}</p>
                    {/* <p>CPF: {photographer.cpf}</p> dado sensivel  */}
                </div>
            </section>

            <div className="bloco-Botoes">
            <button onClick={() => navigate("/photographer/photo/create")}>Adicionar foto</button>
            <button onClick={() => navigate("/photographer/alter")}>Alterar credenciais</button>
            <button onClick={() => navigate("/photographer/photo")}>Exibir fotos</button>
            </div>
            <footer className="footer"> &copy; 2024 FotoHub - Todos os direitos reservados</footer>
        </div>
    )
}