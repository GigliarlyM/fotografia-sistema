import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Photo } from "./get-photo";

export default function Home() {
    const navigate = useNavigate()
    const [photos, setPhotos] = useState([
        {
            url: "",
            price: ""
        }
    ])
    const [isLoading, setIsLoanding] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoanding(true)
            try {
                const response = await axios.get(`http://localhost:8080/photo`)

                console.log(response.data.photos)

                setPhotos(response.data.photos)
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoanding(false)
            }
        }

        fetchData()
    }, [])

    if (isLoading) {
        return <div>Carregando fotos</div>
    }

    return (
        <>
            <div>
                <button onClick={() => navigate("login/photographer")}>Entrar como fotografo</button>
                <button onClick={() => navigate("login/client")}>Entrar como Cliente</button>
                <button onClick={() => navigate("signup")}>Cadastrar</button>
                <button onClick={() => navigate("cadastro-servico")}>Cadastrar serviço</button>
            </div>
            <div>
                <h1>Sobre a Fotografia Sistema</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero vel arcu rhoncus sollicitudin ac vitae metus. Sed tincidunt, arcu vel dignissim bibendum, arcu justo gravida lacus, non porttitor felis odio vel velit. Donec laoreet, erat id consectetur faucibus, mauris dui consectetur ligula, non sagittis arcu neque non ex.</p>
            </div>
            <div>
                {photos.map(photo => {
                    <Photo url={photo.url} price={photo.price} />
                })}
            </div>
        </>
    )
}