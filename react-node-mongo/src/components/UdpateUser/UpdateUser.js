import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updateUser = { name, email };

        const url = `http://localhost:5000/user/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser),
        })
            .then(res => res.json())
            .then(data => {
                alert('User Updated Successfully.', data);
                event.target.reset();
            })

    }
    return (
        <div>
            <h3>Updating User : { user.name }</h3>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id="" placeholder='Name' required /> <br />
                <input type="email" name="email" id="" placeholder='Email' required /> <br />

                <input type="submit" value="Add User" />
            </form >
        </div>
    );
};

export default UpdateUser;