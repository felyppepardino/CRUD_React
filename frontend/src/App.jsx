import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserList from "./UserList";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import UserDelete from "./UserDelete";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={
            <div className="home">
              <h1 className="title">Seja bem-vindo!</h1>
              <span className="subtitle">O que deseja fazer?</span>
            </div>
          } />
          <Route path="/listarusuarios" element={<UserList />} />
          <Route path="/criarusuarios" element={<UserCreate />} />
          <Route path="/editarusuarios" element={<UserEdit />} />
          <Route path="/excluirusuarios" element={<UserDelete />} />
        </Routes>
        <nav className="nav-links">
          <Link className="link" to="/">Início</Link> | 
          <Link className="link" to="/listarusuarios">Listar usuários</Link> | 
          <Link className="link" to="/criarusuarios">Criar usuários</Link> | 
          <Link className="link" to="/editarusuarios">Editar usuários</Link> | 
          <Link className="link" to="/excluirusuarios">Excluir usuários</Link>
        </nav>
        <p className="footer">Feito por: Felyppe Pardino da Silva 5A</p>
      </div>
    </Router>
  );
}

export default App;
