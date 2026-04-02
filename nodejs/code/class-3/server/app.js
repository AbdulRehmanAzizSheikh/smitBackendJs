import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.json({
    status: true,
    data: [
      {
        username: "hasanCoder66",
        firstName: "Muhammad Hasan",
        lastName: "Muhammad Ashraf",
        age: 23,
        exp: 2,
        designation: "Frontend Developer",
        jobType: "Remote",
      },
      {
        username: "shayan",
        firstName: "Muhammad Shayan",
        lastName: "Khan",
        age: 18,
        exp: "Fresher",
        designation: "Student",
        jobType: "study",
      },
      {
        username: "muhammad_husnain",
        firstName: "Muhammad Hasnain",
        lastName: "Muhammad Ali",
        age: 18,
        exp: "Fresher",
        designation: "Student",
        jobType: "study",
      },
      {
        username: "muhammad_husnain",
        firstName: "Muhammad Hasnain",
        lastName: "Muhammad Ali",
        age: 18,
        exp: "Fresher",
        designation: "Student",
        jobType: "study",
      },
    ],
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 3000");
});
