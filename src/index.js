const express = require('express');

const {PORT} = require('./config/serverConfig.js')

const setUpAndStartServer = async () =>{

    //create the express object
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    })
}

setUpAndStartServer();