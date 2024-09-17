/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import axios from "axios"
import { useEffect, useState } from "react"

function GetPhoto() {
    const cpfPhotographer = sessionStorage.getItem("cpf_id")
    const [photos, setPhotos] = useState([
        {
            url: "",
            price: 0,
            title: "",
        }
    ])
    const [isLoading, setIsLoanding] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoanding(true)
            try {
                const response = await axios.get(`http://localhost:8080/photo/${cpfPhotographer}`)

                console.log(response.data.photos)

                setPhotos(response.data.photos)
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoanding(false)
            }
        }

        fetchData()
    }, [cpfPhotographer])

    const handleSubmitPromo = ( id, valuePromo ) => {
        console.log(`Id: ${id}, value: ${valuePromo}`);
    }

    if (isLoading) {
        return <div>Carregando fotos</div>
    }

    return (
        <>
            <h1>Photos</h1>
            {photos.map(photo => (
                <>
                    <h3>Photo id: {photo.id}</h3>
                    <Photo url={photo.url} price={photo.price} />
                    <button onClick={handleSubmitPromo}>Adicionar promo</button>
                </>
            ))}
        </>
    )
}

function Photo({ url, price }) {
    return (
        <div className="photo">
            <img src={url} width={200} />
            <p>R$ {price}</p>
        </div>
    )
}

export {
    Photo,
    GetPhoto
}
