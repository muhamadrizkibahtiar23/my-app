import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Customer() {
    const [users, setUsers] = useState([]);

    async function loadData() {


        const data = await axios.get('https://jsonplaceholder.typicode.com/users')


        setUsers(data.data);
    }
    useEffect(() => {



    }, [])

    return (
        <div className="customer">
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
            <button onClick={loadData}> Fetch data</button><br />
            <Link to='/'> Kembali ke Home</Link>

        </div>
    );
}
