import { Link } from 'react-router-dom'
import './css/estilo.css';
function Menu() {
    return (
        <nav className="MeuMenu">
            <ul>
                <li tabIndex="0" ><Link to="/Home">Home</Link></li>
                <li tabIndex="0" >
                    Cadastro
                    <ul>
                        <li>teste1</li>
                        <li>teste1</li>
                        
                        <li>teste1</li>
                        <li>teste1</li>
                    </ul>
                </li>
                
                <li tabIndex="0" >Deslogar</li>
            </ul>
        </nav>
    )
}
export default Menu