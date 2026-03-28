const fs = require("fs");

readWriteFile();

async function readWriteFile() {
  const readFileReturn = await fs.readFile(
    "./server.txt",
    "utf-8",
    (err, data) => {
      console.log(data);
    },
  );
  fs.writeFileSync("./server.txt", "7pkr");
}
