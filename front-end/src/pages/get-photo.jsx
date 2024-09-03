/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import axios from "axios"
import { useEffect, useState } from "react"

function GetPhoto() {
    const cpfPhotographer = sessionStorage.getItem("cpf_id")
    const [photos, setPhotos] = useState([
        {
            url: "",
            price: "",
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

    if (isLoading) {
        return <div>Carregando fotos</div>
    }

    return (
        <>
            <h1>Photos</h1>
            {photos.map(photo => (
                <Photo url={photo.url} price={photo.price} />
            ))}
        </>
    )
}

function Photo({ url, price }) {
    return (
        <card>
            <img src={url} width={200} />
            <p>R$ {price}</p>
        </card>
    )
}

export {
    Photo,
    GetPhoto
}
