# Front-End set up
Create Project folder

cd into the project folder
# Create client(react) app
in client terminal

    npx create-react-app client

# install dependencies
    npm i axios react-router-dom
    npm install react-bootstrap bootstrap
    //to run app
    //cd into client
    npm start
# Back End Set up

inside make a server folder for the backend

cd into the server folder

once inside run the following

    npm init -y

    npm i express mongoose cors dotenv

next we have to make our folder structure

# CRUD FOLDERS

* config/
  * mongoose.config.js

        const mongoose = require("mongoose");
        const username = process.env.ATLAS_USERNAME;
        const pw = process.env.ATLAS_PASSWORD;
        const dbName = "";

        const uri = `mongodb+srv://${username}:${pw}@cluster0.uybyvcv.mongodb.net/${dbName}?retryWrites=true&w=majority`;

        mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Established a connection to the database"))
        .catch((err) =>
            console.log("Something went wrong when connecting to the database", err)
        );


* controllers

* models

* routes
# After that 
make an env file inside the server folder and store our db info

    # mongo atlas connection
    ATLAS_USERNAME=admin
    ATLAS_PASSWORD=fDTP9ZTGfDiiuQ6j


make a server.js file & connect it to mongoose

then run the following to check connection
        
    nodemon server.js

# Models & Routes Set up