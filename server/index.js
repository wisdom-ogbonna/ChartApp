import express from 'express';
import http from 'http';
import { Server } from "socket.io";

const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer);

app.get('/', (req, res) => {
  res.send({data: "HEllo world from socket"});
});

io.on('connection', (socket) => {
  console.log('a user connected');
  // Add more debugging here if needed
});


httpServer.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});