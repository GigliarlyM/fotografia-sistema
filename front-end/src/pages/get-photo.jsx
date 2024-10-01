/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import axios from "axios"
import { useEffect, useState } from "react"

import PromoModal from "./components/popup-promo"

function GetPhoto() {
    const cpfPhotographer = sessionStorage.getItem("cpf_id")
    const [photos, setPhotos] = useState([])
    const [isLoading, setIsLoanding] = useState(false)
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [idPhoto, setIdPhoto] = useState(0)
    const uriApi = import.meta.env.VITE_APP_API_URL + `/photo/${cpfPhotographer}`
    const token = sessionStorage.getItem('auth_token')

    useEffect(() => {
        const fetchData = async () => {
            setIsLoanding(true)
            try {
                const response = await axios.get(uriApi, { auth: token })

                setPhotos(response.data.photos)
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoanding(false)
            }
        }

        fetchData()
    }, [uriApi])

    const handleSubmitPromo = (idPhoto) => {
        setIdPhoto(idPhoto)
        setIsModelOpen(true)
    }

    const handleFormSubmit = async (newPrice, id) => {
        try {
            const response = await axios.post(uriApi + `/${id}`, { priceAlt: newPrice }, { auth: token })

            console.log(response);
        } catch (error) {
            console.error(error)
        }

        setIsModelOpen(false)
    }

    const handleDeletePhoto = async (id) => {
        try {
            const response = await axios.delete(uriApi + `/${id}`, { auth: token })

            setPhotos(photos.filter(photo => photo.id !== id))
        } catch (error) {
            console.error(error);
        }
    }

    if (isLoading) {
        return <div >Carregando fotos</div>
    }

    return (
        <>
            <h1>Photos</h1>

            <section className="photos">
                {photos.map(photo => (
                    <div className="photo">
                        <h3>Photo id: {photo.id}</h3>
                        <button className="minButton" onClick={() => handleDeletePhoto(photo.id)}>Apagar foto</button>
                        <Photo url={photo.url} price={photo.price} promo={photo.promo} />
                        <button onClick={() => handleSubmitPromo(photo.id)}>Adicionar promo</button>
                    </div>
                ))}
                <PromoModal
                    isOpen={isModelOpen}
                    onFormSubmit={handleFormSubmit}
                    idPhoto={idPhoto}
                />
            </section>

        </>
    )
}

function Photo({ url, price, className = "", promo = 0 }) {
    return (
        <div className={className}>
            <img src={url} width={200} />
            {promo ?
                <p>R$ {price - (price * promo)} com - {promo * 100}%</p> :
                <p>R$ {price}</p>}

        </div>
    )
}

export {
    Photo,
    GetPhoto
}
