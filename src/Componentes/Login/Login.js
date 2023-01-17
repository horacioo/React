import { useState } from 'react';
import axios from 'axios';
import './estilo.css';

function Login(props) {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [logado, setLogado] = useState();

  function LogadoOnLine(valor = 0) {
    window.sessionStorage.setItem('Logado', valor);
    setLogin(valor);
  }

  function StopForm(e) {
    e.preventDefault();
    console.log('apenas um teste');
    axios
      .get(
        '1222.44://sistema.cssantos.com.br/api/API_SAE.php?login=1&login=' +
          login +
          '&senha=' +
          password +
          ''
      )
      .then((resp) => {
        LogadoOnLine(1);
        window.sessionStorage.setItem('auth', resp.data.token);
        window.location.href = '/home';
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <>
      <form className="FormLogin" onSubmit={StopForm}>
        <label>
          Login:
          <input
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            name="login"
          />
        </label>
        <label>
          Senha:
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
}

export default Login;
