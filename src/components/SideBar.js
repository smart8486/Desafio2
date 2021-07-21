import React from 'react'
import { Link } from "react-router-dom";
import './styles.css'

export default function Header() {
    return (
        <div className="sidebar">
            <Link on to="/" className="link active">Home</Link>
            <Link id="link-clients" on to="/clients" className="link">Clientes</Link>
            <Link id="link-products" to="/products" className="link">Produtos</Link>
        </div>
    )
}
