// requiring express
const express = require("express");

// initialize my app
const app = express();

app.get("/detail", (req, res) => {
    res.send("My first Nodejs connection");
});

// initialize the PORT
const PORT = process.env.PORT || 4000;

// listening to the port
app.listen(PORT, function(){
    console.log(`Server is running at port: ${PORT}`)
})