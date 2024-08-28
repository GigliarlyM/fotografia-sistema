import './App.css';
import CadastrarUsuario from './componets/CadastroUsuario';
import TeladeCadastro from './componets/TeladeCadastro';

function App() {
  return (
    <div className="App">
      <h2>Login</h2>
        <form action="/login" method="POST">
            <input type="text" name="username" placeholder="Usuário" required/>
            <input type="password" name="password" placeholder="Senha" required/>
            <button type="submit">Entrar</button>
        </form>
        <CadastrarUsuario/>
        <TeladeCadastro/>
    </div>
  );
}

export default App;
