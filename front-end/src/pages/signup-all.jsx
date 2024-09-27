import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CadastroGeral() {
    const [activeForm, setActiveForm] = useState('cliente');
    const navigate = useNavigate()

    const [nomeCliente, setNomeCliente] = useState('');
    const [emailCliente, setEmailCliente] = useState('');
    const [cpfCliente, setCpfCliente] = useState('');

    const [nomeFotografo, setNomeFotografo] = useState('');
    const [apelidoFotografo, setApelidoFotografo] = useState('');
    const [emailFotografo, setEmailFotografo] = useState('');
    const [dataNascFotografo, setDataNascFotografo] = useState('');
    const [cpfFotografo, setCpfFotografo] = useState('');

    const showForm = (form) => {
        setActiveForm(form);
    };

    const getToken = () => {
        return sessionStorage.getItem('token');
    }

    const handleClienteSubmit = async (e) => {
        
        const cliente = {
            nome: nomeCliente,
            email: emailCliente,
            cpf: cpfCliente
        }

        try {
            const token = getToken();
            const response = await axios.post(import.meta.env.VITE_APP_API_URL + `/cliente`, cliente)
            console.log("Cliente cadastrado " + response.data)
        } catch (error) {
            if (error.response.data.message == "CPF já cadastrado") {
                console.log("CPF já cadastrado")
            }
            else {
                console.log(error)
            }
        }
    }

    const handlePhotographerSubmit = async () => {

        const fotografo = {
            nome: nomeFotografo,
            apelido: apelidoFotografo,
            email: emailFotografo,
            dataNascimento: dataNascFotografo,
            cpf: cpfFotografo
        }

        try {
            const token = getToken();
            const response = await axios.post(import.meta.env.VITE_APP_API_URL + `/photographer`, fotografo)
            console.log("Fotográfo cadastrado " + response.data)
        } catch (error) {
            if (error.response.data.message == "CPF já cadastrado") {
                console.log("CPF já cadastrado")
            }
            else {
                console.log(error)
            }
        }
    }

    return (
        <div className="tab-container">
            <button onClick={() => navigate("login/photographer")}>Voltar para a Home</button>
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
                    <form>
                        <br />
                        <label htmlFor="nomeCliente">Nome</label>
                        <input type="text" id="nomeCliente" placeholder="Nome" value={nomeCliente} onChange={e => setNomeCliente(e.target.value)} />

                        <label htmlFor="emailCliente">Email</label>
                        <input type="email" id="emailCliente" placeholder="Email" value={emailCliente} onChange={e => setEmailCliente(e.target.value)} />

                        <label htmlFor="cpfCliente">CPF</label>
                        <input type="text" id="cpfCliente" placeholder="CPF" value={cpfCliente} onChange={e => setCpfCliente(e.target.value)} />

                        <br />

                        <div className="botao-Cadastrar">
                        <button type="button" onClick={handleClienteSubmit}>Cadastrar Cliente/Usuário</button>
                        </div>
                    </form>
                </div>
            )}

            {activeForm === 'fotografo' && (
                <div id="fotografoForm" className="form-container">
                    <form>
                        <br />
                        <label htmlFor="nomeFotografo">Nome</label>
                        <input type="text" id="nomeFotografo" placeholder="Nome" value={nomeFotografo} onChange={e => setNomeFotografo(e.target.value)} />

                        <label htmlFor="apelidoFotografo">Apelido</label>
                        <input type="text" id="apelidoFotografo" placeholder="Apelido" value={apelidoFotografo} onChange={e => setApelidoFotografo(e.target.value)} />

                        <label htmlFor="emailFotografo">Email</label>
                        <input type="email" id="emailFotografo" placeholder="Email" value={emailFotografo} onChange={e => setEmailFotografo(e.target.value)}/>

                        <label htmlFor="dataNascFotografo">Data de Nascimento</label>
                        <input type="date" id="dataNascFotografo" value={dataNascFotografo} onChange={e => setDataNascFotografo(e.target.value)} />

                        <label htmlFor="cpfFotografo">CPF</label>
                        <input type="text" id="cpfFotografo" name="cpfFotografo" placeholder="CPF" value={cpfFotografo} onChange={e => setCpfFotografo(e.target.value)} />

                        <br />

                        <div className="botao-Cadastrar">
                        <button type="button" onClick={handlePhotographerSubmit}>Cadastrar Fotógrafo</button>
                        </div>
                    </form>
                    
                </div>
            )}
            <footer className="footer"> &copy; 2024 FotoHub - Todos os direitos reservados</footer>
        </div>
    );
}
