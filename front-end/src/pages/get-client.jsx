/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import axios from "axios"
import { useEffect, useState } from "react"

function GetClient() {
    const [client, setClient] = useState([])
    const [isLoading, setIsLoanding] = useState(false)
    const uriApi = import.meta.env.VITE_APP_API_URL + `/client`

    useEffect(() => {
        const fetchData = async () => {
            setIsLoanding(true)
            try {
                const response = await axios.get(uriApi)

                setClient(response.data.client)
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoanding(false)
            }
        }

        fetchData()
    }, [uriApi])

    if (isLoading) {
        return <div>Carregando fotos</div>
    }

    return (
        <>
            <h1>client</h1>

            <section className="clients">

            </section>

        </>
    )
}

function Client({ name, className }) {
    return (
        <div className={className}>
            <p>{name}</p>
        </div>
    )
}

export {
    Client,
    GetClient
}

