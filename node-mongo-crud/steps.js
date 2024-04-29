/* 
* 1. 5 steps of creating a node server:
* 1.1. create folder 
* 1.2. npm init 
* 1.3. npm i express cors mongodb 
* 1.4. script-dev: nodemon index.js 
* 1.5. create index.js 
*
*-------------------------------------
* Create Atlas Account
*-------------------------------------
*1. sign up. google access
*2. create cluster
*3. create user dbUser and password
*4. Network Access --> id address: allow all 
*5. database > connect > code copy
*
*-------------------------------------
* CRUD Operation
*-------------------------------------
*1. node mongodb CRUD > Fundamentals 
*2. create async run function
*-------------------------------------
Integrate sending data from client to server
*-------------------------------------
*1. Client-side : Create form
*2. on submit get form data and create user object/ object of that data
*3. On server-site: create user post to receive data on the backend
*4. pm client-side : set fetch with POST, headers, body
*5. make sure you return a json from the  post API (Backend).
*-------------------------------------------
Load Data to the Client side from database
*-------------------------------------------
* 1. create get api in server-site with the same name like post method
* 2. add query obj [logical or null]
* 3. collection.find(query) : find in userCollection via query to cursor veriable
* 4. cursor.toArray() : await the cursor variable to toArray function and store it in users veriable  
* 5. res.send(users) : send the API (return the result)
* from client use useEffect and display as we done before
*---------------------------------
*Delete Proecss from DB and Ul
*---------------------------------
*
*
*
*
*/