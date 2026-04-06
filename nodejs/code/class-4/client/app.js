fetch("http://localhost:1000", {
  method: "GET",
}).then((res) => console.log(res));

fetch("http://localhost:1000", {
  method: "POST",
}).then((res) => console.log(res));

fetch("http://localhost:1000", {
  method: "PUT",
}).then((res) => console.log(res));

fetch("http://localhost:1000", {
  method: "DELETE",
}).then((res) => console.log(res));
