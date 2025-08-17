const http = require("http");
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");
const {createUser} = require('./src/crudControllerUserSchemas')


const {User} = require("./src/schemas");


const server = http.createServer((req, res) => {
  const requestInfo = req.url;

  if (req.method === "GET") {
    staticRequestResponse(req.url, res);
  }
  if (req.method === "POST") {
    postRequestResponse();
  }

  function staticRequestResponse(requestInfo, res) {
    const fileName = requestInfo === "/" ? "home.html" : requestInfo.slice(1); // Handle root request '/' and other paths
    const filePath = path.join(__dirname, "src", "pages", fileName);

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  
  function postRequestResponse() {
  }
});

server.listen(3000, () => {
  console.log(`working on 30000`);
});

const uri =
  "mongodb+srv://suleemansarfraz:w4xtGwlof67YiRBt@cluster0.ae738xk.mongodb.net/";

const client = new MongoClient(uri, {
  useUnifiedTopology: true, // This enables the new server discovery and monitoring engine
});

async function connectToDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection failed", error);
  }
}

connectToDB();
