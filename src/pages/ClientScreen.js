import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import './styles.css'

export default function ClientScreen() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [store, setStore] = useState([])

    useEffect(() => {
        const clients = JSON.parse(localStorage.getItem('clients'))
        if (clients) {
            setStore(clients)
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        let data = {
            name, age, email, country
        }

        let newClients = JSON.stringify([...store || [], data])

        localStorage.setItem('clients', newClients)

        setStore(JSON.parse(newClients))

        toast.success('Cliente cadastrado com sucesso!')

    }
    return (
        <div className="container">
            <div className="header">
                <h1>Clientes</h1>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:<input type="text" value={name} onChange={e => setName(e.target.value)} required minLength={2} />
                    </label>
                    <label>
                        Idade:<input type="number" value={age} onChange={e => setAge(e.target.value)} required min={1} max={120} />
                    </label>
                    <label>
                        E-mail:<input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Nacionalidade:
                        <select id="country" value={country} onChange={e => setCountry(e.target.value)} required>
                            <option value="">Selecione</option>
                            <option value="australiana">Australiana</option>
                            <option value="brasileira">Brasileira</option>
                            <option value="usa">Americana</option>
                        </select>
                    </label>
                    <button className="btn-add" type="submit">Adicionar Cliente</button>
                </form>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>E-mail</th>
                            <th>Nacionalidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.map((client, idx) => (
                            <tr key={idx}>
                                <td>{client.name}</td>
                                <td>{client.age}</td>
                                <td>{client.email}</td>
                                <td>{client.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
