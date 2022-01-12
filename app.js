
const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');


app.listen(PORT, () => {
    console.log("hola")
})
app.use(express.static(__dirname + "/public2"));