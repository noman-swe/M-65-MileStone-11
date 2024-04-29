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
            // je id ta k delete korbo seta pailam and console korlam
            console.log("Deleting User id is : ", id);
            // je id ta delete korbo oi id ta k ekhn backend e pathate hobe
            // oi id ta k url e add kore dibo
            const url = `http://localhost:5000/user/${id}`;

            // url ta k fetch kore pathaite hobe delete method diye;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        console.log("Deleted..");
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h3>The total available users : {users.length}</h3>

            <ol>
                {
                    users.map(user =>
                        <li key={user._id}>
                            Name: {user.name} :=: Email: {user.email} -
                            <button onClick={() => handleUserDel(user._id)} style={{ cursor: "pointer" }}> X </button>
                        </li>
                    )
                }
            </ol>


        </div>
    );
};

export default Home;