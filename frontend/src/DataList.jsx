// Este componente busca dados da API e os exibe em uma lista. Cada item tem um botão para exibir detalhes.
import React, { useEffect, useState } from "react";

const DataList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/listarusuarios")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="list">
      <h1 className="title">Listando Usuários</h1>
      <ul className="list">
        {data.map((item) => (
          <li key={item.id} className="li-list">
            <span className="item"><b>Nome:</b> </span>{item.nome}<br />
            <span className="item"><b>Idade:</b> </span>{item.idade}<br />
            <span className="item"><b>CPF:</b> </span>{item.cpf}<br />
            <span className="item"><b>E-mail:</b> </span>{item.email}<br />
            <span className="item"><b>Sexo:</b> </span>{item.sexo}<br />
            <button className="btn-list" onClick={() => props.clicked(item)}>
              Mais detalhes
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;

