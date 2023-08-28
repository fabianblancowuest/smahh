const express = require('express');
const server = express();
const PORT = 3001;

const morgan = require("morgan")

server.use(morgan("dev"));
server.use(express.json());

// Middleware: Configuración de CORS
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

// http://localhost:3001/health-check

server.get("/health-check", (req, res)=>{
   res.send("Working")
})



server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

module.exports = { 
    server
  }