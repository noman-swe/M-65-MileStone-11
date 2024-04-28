import React from 'react';

const AddUser = () => {

    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };

        /*
         send the user data to backend
        steps: 
        *1. Forntend : fetch and method, headers, body set and then and then.
        *2. Backend : newUser = req.body, res.send({result: "success"})
        
        */
        //  send the user to backend
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert('Users added Successfully.');
                event.target.reset();
                console.log("Success", data);
            })
    }

    return (
        <div>
            <h2>Please add a new User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" placeholder='Name' required /> <br />
                <input type="email" name="email" id="" placeholder='Email' required /> <br />

                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;