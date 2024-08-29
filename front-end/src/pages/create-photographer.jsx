//import React from "react"

function Cadastro() {

    return (
        <div>
            <input type="text" name="name" id="name" required placeholder="Nome" />
            <input type="email" name="email" id="email" required  placeholder="Email"/>
            <input type="text" name="apelido" id="apelido" placeholder="Apelido" />
            <input type="date" name="data" id="data" />
            <input type="text" name="cpf" id="cpf" placeholder="xxx.xxx.xxx-xx" />
        </div>
    )
}

export default Cadastro;