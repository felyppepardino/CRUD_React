import { useState, useEffect } from "react";
import "./App.css";

function UserEdit() {
    const [cpf, setCpf] = useState("");
    const [userData, setUserData] = useState(null);

    const [id, setId] = useState();
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [editedSex, editSex] = useState("");

    const [editConfirmation, setEditConfirmation] = useState(null);

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

    const SubmitNewData = async () => {
        const response = await fetch("http://localhost:8800/editarusuarios/edit", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id, nome: newName, idade: newAge, email: newEmail, sexo: editedSex })
        });

        const data = await response.json();
        console.log("resposta do back: ", data);
        setEditConfirmation(data);
    };

    return (
        <div className="form-container">
            <p className="form-title"><strong>Insira o CPF do usuário que deseja editar:</strong></p>
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
                        <strong>Dados atuais do usuário de CPF <mark>{userData[0].cpf}</mark>:</strong>
                    </p>
                    <p><strong>Nome:</strong> {userData[0].nome}</p>
                    <p><strong>Idade:</strong> {userData[0].idade}</p>
                    <p><strong>E-mail:</strong> {userData[0].email}</p>
                    <p><strong>Sexo:</strong> {userData[0].sexo}</p>

                    <hr className="divider" />

                    <p className="form-subtitle"><strong>Editar dados:</strong></p>

                    <div className="form-group">
                        <label htmlFor="new_name"><strong>Nome:</strong></label>
                        <input
                            className="form-input"
                            type="text"
                            id="new_name"
                            onChange={(e) => setNewName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="new_age"><strong>Idade:</strong></label>
                        <input
                            className="form-input"
                            type="text"
                            id="new_age"
                            onChange={(e) => setNewAge(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="new_email"><strong>E-mail:</strong></label>
                        <input
                            className="form-input"
                            type="text"
                            id="new_email"
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="edited_sex"><strong>Sexo:</strong></label>
                        <input
                            className="form-input"
                            type="text"
                            id="edited_sex"
                            onChange={(e) => editSex(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="submit-button" onClick={SubmitNewData}>
                        Atualizar
                    </button>
                </div>
            )}

            {editConfirmation && editConfirmation.affectedRows === 1 && (
                <p className="success-message">Usuário editado com sucesso.</p>
            )}

            {editConfirmation && editConfirmation.affectedRows === 0 && (
                <p className="error-message">Erro na edição do usuário.</p>
            )}
        </div>
    );
}

export default UserEdit;
