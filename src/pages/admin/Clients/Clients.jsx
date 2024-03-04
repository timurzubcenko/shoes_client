import React, { useEffect, useState } from 'react'
import s from './Clients.module.scss'
import axios from 'axios'
import { PencilFill, TrashFill } from 'react-bootstrap-icons'

const API_URL = import.meta.env.VITE_API_URL

const Clients = () => {

    const [clients, setClients] = useState([])

    const getClients = async () => {
        await axios.get(API_URL + '/api/clients')
            .then((res) => {
                console.log(res.data)
                setClients(res.data)
            })
    }

    useEffect(() => {
        getClients()
    }, [])

    return (
        <div className={s.clients}>
            <header>
                <h2>Clients</h2>
            </header>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>COUNT PRODUCTS IN CART</th>
                        <th>BTNS</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client, index) =>
                        <tr key={client._id}>
                            <td>{index + 1}.</td>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.products.length}</td>
                            <td>
                                <button><PencilFill /></button>
                                <button onClick={() => deleteProduct(product._id)}><TrashFill /></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default Clients