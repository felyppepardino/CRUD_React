import "./App.css";
import DataList from "./DataList";
import { useState } from "react";

function UserList() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemClicked, setItemClicked] = useState(null);

  function clicked(item) {
    console.log("Clicou no item", item.id);
    setModalIsOpen(true);
    setItemClicked(item);
  }

  function closeModal() {
    setModalIsOpen(false);
    setItemClicked(null);
  }

  return (
    <div className="list">
      <DataList clicked={clicked} />
      
      {modalIsOpen && itemClicked && (
        <div className="modal">
          <div className="modal-content">
            <h1>Detalhes do Usuário</h1>
            <p><strong>Nome:</strong> {itemClicked.nome}</p>
            <p><strong>Idade:</strong> {itemClicked.idade}</p>
            <p><strong>CPF:</strong> {itemClicked.cpf}</p>
            <p><strong>Email:</strong> {itemClicked.email}</p>
            <p><strong>Sexo:</strong> {itemClicked.sexo}</p>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;
