import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "get request successfull!",
    data: [
      {
        id: 1,
        name: "John Doe",
        age: 30,
        email: "[EMAIL_ADDRESS]",
      },
      {
        id: 2,
        name: "Jane Doe",
        age: 25,
        email: "[EMAIL_ADDRESS]",
      },
    ],
  });
});

app.post("/", (req, res) => {
  res.json({
    status: 200,
    message: "post request successfull!",
    data: [
      {
        id: 3,
        name: "John Doe",
        age: 30,
        email: "[EMAIL_ADDRESS]",
      },
      {
        id: 4,
        name: "Jane Doe",
        age: 25,
        email: "[EMAIL_ADDRESS]",
      },
    ],
  });
});

app.put("/", (req, res) => {
  res.json({
    status: 200,
    message: "put request successfull!",
    data: [
      {
        id: 5,
        name: "John Doe",
        age: 30,
        email: "[EMAIL_ADDRESS]",
      },
      {
        id: 6,
        name: "Jane Doe",
        age: 25,
        email: "[EMAIL_ADDRESS]",
      },
    ],
  });
});

app.delete("/", (req, res) => {
  res.json({
    status: 200,
    message: "delete request successfull!",
    data: [
      {
        id: 7,
        name: "John Doe",
        age: 30,
        email: "[EMAIL_ADDRESS]",
      },
      {
        id: 8,
        name: "Jane Doe",
        age: 25,
        email: "[EMAIL_ADDRESS]",
      },
    ],
  });
});

app.listen(1000, () => {
  console.log("Server is running on port 1000");
});
