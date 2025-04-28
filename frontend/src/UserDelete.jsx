import { useState, useEffect } from "react";
import "./App.css";

function UserDelete() {
    const [cpf, setCpf] = useState("");
    const [userData, setUserData] = useState(null);
    const [deleteConfirmation, setDeleteConfirmation] = useState(null);
    const [id, setId] = useState();

    // Sempre que houver algo no userData, ou seja, após uma consulta de CPF bem-sucedida, id agora passa a ter um valor 
    useEffect(() => {
        if (userData) setId(userData[0].id);
    }, [userData]);

    const CheckCpf = async () => {
        const response = await fetch("http://localhost:8800/consultarusuarios/check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cpf: cpf }),
        });

        const data = await response.json();
        setUserData(data);
    };

    const deleteUser = async () => {
        const response = await fetch("http://localhost:8800/excluirusuarios/delete/" + id, {
            method: "DELETE",
        });

        const data = await response.json();
        console.log("resposta do back: ", data);
        setDeleteConfirmation(data);
    };

    return (
        <div className="form-container">
            <p className="form-title"><strong>Insira o CPF do usuário que deseja excluir:</strong></p>
            <div className="form-group">
                <input
                    className="form-input"
                    type="text"
                    id="cpf"
                    onChange={(e) => setCpf(e.target.value)}
                />
            </div>
            <button type="submit" className="submit-button" onClick={CheckCpf}>
                Consultar
            </button>

            {userData && (
                <div className="user-data-section">
                    <p className="form-subtitle">
                        <strong>Tem certeza de que deseja excluir o usuário {userData[0].nome}, de CPF <mark>{userData[0].cpf}</mark> e {userData[0].idade} anos?</strong>
                    </p>

                    <button type="submit" className="submit-button" onClick={deleteUser}>
                        Sim
                    </button>
                </div>
            )}

            {deleteConfirmation && deleteConfirmation.affectedRows === 1 && (
                <p className="success-message">Usuário excluído com sucesso.</p>
            )}

            {deleteConfirmation && deleteConfirmation.affectedRows === 0 && (
                <p className="error-message">Erro na exclusão do usuário.</p>
            )}
        </div>
    );
}

export default UserDelete;
