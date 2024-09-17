import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Photo } from "./get-photo";

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
                <h1>Bem-vindo ao FotoHub !</h1>
                <p>Estamos felizes em tê-lo aqui, onde talento e criatividade se encontram!<br/> Quer você seja um fotógrafo em busca de novos projetos ou um cliente à procura do profissional perfeito<br/> para capturar seus momentos especiais,<br/> você está no lugar certo.<br/> Explore, descubra e conecte-se com a arte da fotografia.</p>
            </div>
            <div>
                <RenderPhotos />
            </div>
        </>
    )
}

function RenderPhotos () {
    // @TODO: Fazer um tipo de avaliação; E retonar o Apelido do ser humano que postou
    const [photos, setPhotos] = useState([ ])
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
            {photos.map(photo => (
                <Photo url={photo.url} price={photo.price} />
            ))}
        </>
    )
}