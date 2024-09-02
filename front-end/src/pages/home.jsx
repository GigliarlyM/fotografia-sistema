import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate("login/photographer")}>Entrar como fotografo</button>
            <button onClick={() => navigate("signup/photographer")}>Cadastrar fotografo</button>
            <button >Entrar como Cliente</button>
            <button onClick={() => navigate("signup/client")}>Cadastrar cliente</button>
        </div>
    )
}