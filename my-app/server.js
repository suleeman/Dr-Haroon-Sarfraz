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
