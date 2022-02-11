const http = require('http');
const app=require('./app');


const config = require('./config');

const { port } = config;

const server = http.createServer(app);

server.listen(port || 8080, () => {
  console.log(`Server Running on Port ${port}`);
});
