import { useState } from "react";
import "./App.css";

function UserCreate() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [sex, setSex] = useState("");

    const [createConfirmation, setCreateConfirmation] = useState(null);

    const SubmitData = async () => {
        const response = await fetch("http://localhost:8800/criarusuarios/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome: name, idade: age, cpf: cpf, email: email, sexo: sex })
        });

        const data = await response.json();
        console.log("resposta do back: ", data);
        setCreateConfirmation(data);
    };

    return (
        <div className="form-container">
            <p className="form-title"><strong>Insira os dados do usuário:</strong></p>

            <div className="form-group">
                <label htmlFor="name"><strong>Nome:</strong></label>
                <input
                    className="form-input"
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="age"><strong>Idade:</strong></label>
                <input
                    className="form-input"
                    type="text"
                    id="age"
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="cpf"><strong>CPF:</strong></label>
                <input
                    className="form-input"
                    type="text"
                    id="cpf"
                    onChange={(e) => setCpf(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email"><strong>E-mail:</strong></label>
                <input
                    className="form-input"
                    type="text"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="sex"><strong>Sexo:</strong></label>
                <input
                    className="form-input"
                    type="text"
                    id="sex"
                    onChange={(e) => setSex(e.target.value)}
                />
            </div>

            <button type="submit" className="submit-button" onClick={SubmitData}>
                Enviar
            </button>

            {createConfirmation && createConfirmation.affectedRows === 1 && (
                <p className="success-message">Usuário criado com sucesso.</p>
            )}

            {createConfirmation && createConfirmation.affectedRows === 0 && (
                <p className="error-message">Erro na criação do usuário.</p>
            )}
        </div>
    );
}

export default UserCreate;