const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const PORT = 7749;
const db = require("./config/db");

//connect db
db.connect();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//HTTP logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  handlebars.engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

// const http = require('http');

const route = require("./routes");
app.set("views", path.join(__dirname, "resources", "views"));

//router init
route(app);
const mockData = [
  { id: 1, name: "JS" },
  { id: 2, name: "React" },
  { id: 3, name: "Express" },
  { id: 4, name: "C#" },
];
// const server = http.createServer((req, res) => {
//     // res.setHeader('Content-type', 'application/json')
//     res.writeHead(404, {
//         'Content-type': 'application/json',
//         'X-Powered-By': 'Node.js'
//     })
//     res.statusCode = 404;
//     // res.end(JSON.stringify({
//     //     success: true,
//     //     data: mockData
//     // }));
//     res.end(JSON.stringify({
//         success: false,
//         error: 'NOT FOUND',
//         data: null
//     }));
// })

//GET method

// app.get("/api/mockData/:id", (req, res) => {
//   const data = mockData.find(
//     (mockData) => mockData.id === parseInt(req.params.id)
//   );
//   if (!data) {
//     res.status(404).send("can find this ID");
//   } else {
//     res.send(req.params.id);
//   }
// });

//POST method
// app.post("/api/mockData/add", (req, res) => {
//   const addData = {
//     id: req.body.id,
//     name: req.body.name,
//   };
//   console.log(addData);
//   mockData.push(addData);
//   res.send(
//     JSON.stringify({
//       success: true,
//       notice: "Thêm mới thành công",
//       data: mockData,
//     })
//   );
// });

//PUT method
// app.put("/api/mockData/edit/:id", (req, res) => {
//     const data = mockData.find(mockData => mockData.id === parseInt(req.params.id))
//     data.name = req.body.name;
//     res.send(
//         JSON.stringify({
//         success: true,
//         notice: "Sửa thành công",
//         data: mockData,
//         })
//     );
// });

//DELETE method
// app.delete("/api/mockData/delete/:id", (req, res) => {
//     const data = mockData.find(mockData => mockData.id === parseInt(req.params.id))
//     if(!data){
//         res.status(404).send(`Không có id ${req.params.id}`)
//     }
//     let index = mockData.indexOf(data)
//     mockData.splice(index, 1)
//     res.send(
//         JSON.stringify({
//         success: true,
//         notice: "Xóa thành công",
//         data: mockData,
//         })
//     );
// });
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
