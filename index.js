const express = require('express');
const app = express();
const port = 3000;
const http = require('http');

app.use(express.static('public'));

const http_server = http.createServer(app);

http_server.listen(port, () => {
	console.log("Poto escuchando en puerto 3000");
});


