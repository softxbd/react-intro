import React, { useEffect, useState } from 'react';
import './User.css'
function Users() {
    const [user, setUser] = useState([]);

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const jsonData = await res.json();
                setUser(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.error('Error fetching data: ' + error);
            }
        };

        fetchUsers();

    }, []);

    return (
        <div className={''}>
            <h1>I am the example of data fetching</h1>
            <ul className={"list-none mt-3"}>
                {user?.map((user, index) => (
                    <li className="user_card" key={index}>
                        <p> <strong>Name:</strong> {user?.name}</p>
                        <p> <strong>Username:</strong>  {user?.username}</p>
                        <p> <strong>Email:</strong>  {user?.email}</p>

                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Users;
