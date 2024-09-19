/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import axios from "axios"
import { useEffect, useState } from "react"
import PromoModal from "./components/popup-promo"

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
    const [isModelOpen, setIsModelOpen] = useState(false)

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

    const handleSubmitPromo = (id) => {
        console.log(`Id: ${id}`);
        setIsModelOpen(true)
    }

    const handleFormSubmit = (data) => {
        console.log(`Dados: ${data}`);
        setIsModelOpen(false)
    }

    if (isLoading) {
        return <div>Carregando fotos</div>
    }

    return (
        <>
            <h1>Photos</h1>

            <section className="photos">
                {photos.map(photo => (
                    <div className="photo">
                        <h3>Photo id: {photo.id}</h3>
                        <Photo url={photo.url} price={photo.price} />
                        <button onClick={() => handleSubmitPromo(photo.id)}>Adicionar promo</button>
                        <PromoModal
                            isOpen={isModelOpen}
                            onClose={() => setIsModalOpen(false)}
                            onFormSubmit={handleFormSubmit}
                        />
                    </div>
                ))}
            </section>

        </>
    )
}

function Photo({ url, price, className }) {
    return (
        <div className={className}>
            <img src={url} width={200} />
            <p>R$ {price}</p>
        </div>
    )
}

export {
    Photo,
    GetPhoto
}
