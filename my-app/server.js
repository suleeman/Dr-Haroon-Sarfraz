const http = require("http");
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");



// const {User} = require("./src/schemas");
console.log();


const server = http.createServer((req, res) => {
  
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};
const requestInfo = req.url;




  if (req.method === "GET") {
    staticRequestResponse(req.url, res);
  }
  if (req.method === "POST") {
    postRequestResponse();
  }





  // function staticRequestResponse(requestInfo, res) {
  //   const filePath = path.join(__dirname, "build", 'index.html');
  //   const fileName = requestInfo === "/" ? filePath : requestInfo.slice(1); // Handle root request '/' and other paths
  //  const 
  //    console.log(filePath);
  //  console.log(requestInfo);


  //   fs.readFile(filePath, "utf8", (err, data) => {
  //     if (err) {
  //       res.writeHead(404, { "Content-Type": "text/plain" });
  //       res.end("Page not found");
  //       return;
  //     }

  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(data);
  //   });
  // const fallbackPath = path.join(filePath);
  //     fs.readFile(fallbackPath, (err, content) => {
  //       if (err) {
  //         console.error('Error reading fallback index.html');
  //         res.writeHead(500, { 'Content-Type': 'text/plain' });
  //         res.end('Internal Server Error');
  //       } else {
  //         res.writeHead(200, { 'Content-Type': 'text/html' });
  //         res.end(content);
  //       }
  //     });


  //   }

  

  // });

function staticRequestResponse(requestInfo, res) {
  const buildPath = path.join(__dirname, 'build');
  let urlPath = requestInfo.split('?')[0];

  // Remove trailing slash
  if (urlPath.length > 1 && urlPath.endsWith('/')) {
    urlPath = urlPath.slice(0, -1);
  }

  let filePath = path.join(buildPath, urlPath === '/' ? 'index.html' : urlPath);

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath);
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      fs.readFile(filePath, (err, content) => {
        if (err) {
          console.error('Error reading file:', filePath);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content);
        }
      });
    } else {
      // Log what was not found
      console.warn('File not found, falling back to index.html:', filePath);

      const fallbackPath = path.join(buildPath, 'index.html');
      fs.readFile(fallbackPath, (err, content) => {
        if (err) {
          console.error('Error reading fallback index.html');
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
    }
  });
}

});


server.listen(3000,  '0.0.0.0',() => {
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
