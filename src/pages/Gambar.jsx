import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Gambar() {
    const [users, setUsers] = useState([]);

    async function loadData() {

        // const res= await fetch ('https://jsonplaceholder.typicode.com/users');
        // const data =await res.json();

        //with axios
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')


        setUsers(data.data);
    }
    useEffect(() => {
        // loadData();


    }, [])

    return (
        <div>
            <h3>Daftar Customer</h3>
            <div>
                <ol>
                    {
                        users.map((user) => (
                            <li>{user.name}</li>
                        ))
                    }
                </ol>
            </div>
            <button onClick={loadData}> Fetch data</button>
            <Link to='/'> ke home</Link>

        </div>
    );
}
