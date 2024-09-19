import { useState } from 'react';



export default function CadastroGeral() {
    const [activeForm, setActiveForm] = useState('cliente');

    const showForm = (form) => {
        setActiveForm(form);
    };

    return (
        <div className="tab-container">
            <h1>Cadastro</h1>
            <div className="tabs">
                <button
                    id="clienteTab"
                    className={activeForm === 'cliente' ? 'active' : ''}
                    onClick={() => showForm('cliente')}
                >
                    Cliente/Usuário
                </button>
                <button
                    id="fotografoTab"
                    className={activeForm === 'fotografo' ? 'active' : ''}
                    onClick={() => showForm('fotografo')}
                >
                    Fotógrafo
                </button>
            </div>

            {activeForm === 'cliente' && (
                <div id="clienteForm" className="form-container active">
                    <form action="/cadastrar_cliente" method="POST">
                        <label htmlFor="nomeCliente">Nome</label>
                        <input type="text" id="nomeCliente" name="nomeCliente" placeholder="Nome" required />

                        <label htmlFor="emailCliente">Email</label>
                        <input type="email" id="emailCliente" name="emailCliente" placeholder="Email" required />

                        <label htmlFor="cpfCliente">CPF</label>
                        <input type="text" id="cpfCliente" name="cpfCliente" placeholder="CPF" required />

                        <button type="submit">Cadastrar Cliente/Usuário</button>
                    </form>
                </div>
            )}

            {activeForm === 'fotografo' && (
                <div id="fotografoForm" className="form-container">
                    <form action="/cadastrar_fotografo" method="POST">
                        <label htmlFor="nomeFotografo">Nome</label>
                        <input type="text" id="nomeFotografo" name="nomeFotografo" placeholder="Nome" required />

                        <label htmlFor="apelidoFotografo">Apelido</label>
                        <input type="text" id="apelidoFotografo" name="apelidoFotografo" placeholder="Apelido" required />

                        <label htmlFor="emailFotografo">Email</label>
                        <input type="email" id="emailFotografo" name="emailFotografo" placeholder="Email" required />

                        <label htmlFor="dataNascFotografo">Data de Nascimento</label>
                        <input type="date" id="dataNascFotografo" name="dataNascFotografo" required />

                        <label htmlFor="cpfFotografo">CPF</label>
                        <input type="text" id="cpfFotografo" name="cpfFotografo" placeholder="CPF" required />

                        <button type="submit">Cadastrar Fotógrafo</button>
                    </form>
                </div>
            )}
        </div>
    );
}
