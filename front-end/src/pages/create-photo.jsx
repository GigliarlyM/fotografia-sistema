import { useState } from "react"
import axios from "axios"

export default function CreatePhoto() {
    const [form, setForm] = useState({ title: '', price: '', link: '' })
    const pathApi = "http://localhost:8080/photo"
    
    const handleSubmit = async () => {
        try {
            const response = await axios.post(pathApi, { title: form.title, price: form.price, url: form.link })
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="form">
            <input type="text" placeholder="Título da foto" value={form.title} onChange={e => setForm({ title: e.target.value })} />
            <input type="number" placeholder="10.00" value={form.price} onChange={e => setForm({ price: e.target.value })} />
            <input type="url" placeholder="http://www.google.com" value={form.link} onChange={e => setForm({ link: e.target.value })} />
            <button type="submit" onClick={handleSubmit}>Enviar</button>
        </div>
    )
}