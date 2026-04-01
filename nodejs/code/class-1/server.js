const fs = require("fs");
const http = require("http");

// readWriteFile();
createServer();

function readWriteFile() {
  const readFileReturn = fs.readFile("./server.txt", "utf-8", (err, data) => {
    console.log(data);
  });
  fs.writeFileSync("./server.txt", "7pkr" + " readWriteFile");
}

function createServer() {
  const server = http.createServer((req, res) => {
    const pathname = req.url;
    if (pathname !== "") {
      res.end(`${pathname} wala page`);
    } else {
      console.log("something went wrong❗");
    }
    // res.end("server is running -->");
  });
  server.listen(8000, "127.0.0.1", () => {
    console.log("server is listening 🎉");
  });
}
