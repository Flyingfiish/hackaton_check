const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "hbs");
 
app.use("/", function(request, response){
     
    response.render("layouts/layout.hbs");
});

app.get("/event", function(request, response){
    response.sendfile("public/event.html");
});

app.use(express.static("static"));

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});
