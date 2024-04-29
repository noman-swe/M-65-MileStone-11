import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleUserDel = id => {
        const delPrceed = window.confirm("Are You Sure To Delete? ", id);
        if (delPrceed) {
            console.log("Deleting User id is : ", id);
        }
    }

    return (
        <div>
            <h3>The total available users : {users.length}</h3>

            <ul>
                {
                    users.map(user =>
                        <li key={user._id}>
                            Name: {user.name} :=: Email: {user.email} -
                            <button onClick={() => handleUserDel(user._id)} style={{ cursor: "pointer" }}> X </button>
                        </li>
                    )
                }
            </ul>


        </div>
    );
};

export default Home;