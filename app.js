const express = require('express');
// создаем объект приложения
const app = express();
const port = 3000;

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){

    response.sendfile("public/index.html");
});
app.get("/event", function(request, response){

    response.sendfile("public/event.html");
});



app.use(express.static('public'));
// начинаем прослушивать подключения на 3000 порту
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});
