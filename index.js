import http from "http";

const port = 3000;

const grades = [
  {
    studentName: "Jorge",
    subject: "Chinês",
    grade: "9",
  },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (url == "/grades" && method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(grades));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found." }));
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}!!`);
});
