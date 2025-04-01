const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/books") {
    console.log("Inside if.");
    res.end("My books.");
  } else if (req.method == "GET" && req.url == "/products") {
    console.log("Inside if.");
    res.end("My products.");
  } else {
    console.log("Inside else.");
    res.end("Not books url.");
  }
});

const backendPort = 8000;

server.listen(backendPort, () =>
  console.log(`Server is listening on port ${backendPort}`)
);