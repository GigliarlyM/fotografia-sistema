import { useState } from "react"

export default function CreatePhoto() {
    const [form, setForm] = useState({title: '', price: '', link: ''})
    return (
        <div className="form">
            <input type="text" placeholder="Título da foto" value={form.title} onChange={e => setForm({title: e.target.value})}/>
            <input type="number" placeholder="10.00" value={form.price} onChange={e => setForm({price: e.target.value})}/>
            <input type="url" placeholder="http://www.google.com" value={form.link} onChange={e => setForm({link: e.target.value})}/>
            <button type="submit">Enviar</button>
        </div>
    )
}