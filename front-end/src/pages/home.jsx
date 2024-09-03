import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <button onClick={() => navigate("login/photographer")}>Entrar como fotografo</button>
                <button onClick={() => navigate("login/client")}>Entrar como Cliente</button>
                <button onClick={() => navigate("signup")}>Cadastrar</button>
            </div>
            <div>
                <h1>Sobre a Fotografia Sistema</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero vel arcu rhoncus sollicitudin ac vitae metus. Sed tincidunt, arcu vel dignissim bibendum, arcu justo gravida lacus, non porttitor felis odio vel velit. Donec laoreet, erat id consectetur faucibus, mauris dui consectetur ligula, non sagittis arcu neque non ex.</p>
            </div>
        </>
    )
}