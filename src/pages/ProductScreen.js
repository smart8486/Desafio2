import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import './styles.css'

export default function ClientScreen() {
    const [type, setType] = useState('')
    const [price, setPrice] = useState(10)
    const [category, setCategory] = useState('')
    const [stock, setStock] = useState(1)
    const [store, setStore] = useState([])

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products'))
        if (products) {
            setStore(products)
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        let data = {
            type, price, category, stock
        }

        let newProducts = JSON.stringify([...store || [], data])

        localStorage.setItem('products', newProducts)

        setStore(JSON.parse(newProducts))

        toast.success('Produto cadastrado com sucesso!')
    }
    return (
        <div className="container">
            <div className="header">
                <h1>Produtos</h1>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        Categoria:
                        <select id="category" value={category} onChange={e => setCategory(e.target.value)} required>
                            <option value="">Selecione</option>
                            <option value="eletrodom">Eletrodomésticos</option>
                            <option value="notebooks">Notebooks</option>
                            <option value="celulares">Celulares</option>
                        </select>
                    </label>
                    <label>
                        Produto:<input type="text" value={type} onChange={e => setType(e.target.value)} required minLength={2} />
                    </label>
                    <label>
                        Preço:<input type="number" value={price} onChange={e => setPrice(e.target.value)} required min={1} max={5000} />
                    </label>
                    <label>
                        Quantidade:<input type="number" value={stock} onChange={e => setStock(e.target.value)} required />
                    </label>
                    <button className="btn-add" type="submit">Adicionar Produto</button>
                </form>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Estoque</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.map((product, idx) => (
                            <tr key={idx}>
                                <td>{product.category}</td>
                                <td>{product.type}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
