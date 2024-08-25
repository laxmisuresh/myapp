// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response body "Hello, World!"
  res.end('Hello, World! Docker v1.0/\n');
});

// The server listens on port 8080
server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080/');
});