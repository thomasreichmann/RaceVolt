import { Link } from "react-router-dom";

function Cabecalho() {
    return (
            <div className="container-header">
                <h1>RACEVOLT</h1>
                <div className="navbar">
                    <nav>
                        <ul className="navlinks">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/sobre">Sobre Nós</Link>
                            </li>
                            <li>
                                <Link to="/contato">Contato</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
    );
}

export default Cabecalho;