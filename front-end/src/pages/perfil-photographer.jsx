import { useNavigate } from "react-router-dom"

export default function PerfilPhotographer() {
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => navigate("photographer/alter")}>Alterar credenciais</button>
        </div>
    )
}