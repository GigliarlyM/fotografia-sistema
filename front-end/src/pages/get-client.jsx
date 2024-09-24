/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import axios from "axios"
import { useEffect, useState } from "react"

function GetClient() {
    const [clients, setClients] = useState([])
    const [isLoading, setIsLoanding] = useState(false)
    const uriApi = import.meta.env.VITE_APP_API_URL + `/client`

    useEffect(() => {
        const fetchData = async () => {
            setIsLoanding(true)
            try {
                const response = await axios.get(uriApi)

                setClients(response.data.clients)
                console.log(response.data.clients)
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
                {clients.map(cli => (
                    <div className="client">
                        <Client name={cli.nome} email={cli.email}/>
                    </div>
                ))}
            </section>

        </>
    )
}

function Client({ name, className, email }) {
    return (
        <div className={className}>
            <p>{name}</p>
            <p>{email}</p>
            <hr />
        </div>
    )
}

export {
    Client,
    GetClient
}

