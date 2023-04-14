const db = require('./config/db');

//connect db
db.connect();

// const http = require('http');
const PORT = 3000;

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

const express = require("express");
const app = express();  

app.use(express.json());


//GET method
app.get("/", (req, res) => {
  res.send(JSON.stringify({
    success: true,
    notice: "Lấy dữ liệu thành công",
    data: mockData
  }));
});
app.get("/api/mockData/:id", (req, res) => {
  const data = mockData.find(
    (mockData) => mockData.id === parseInt(req.params.id)
  );
  if (!data) {
    res.status(404).send("can find this ID");
  } else {
    res.send(req.params.id);
  }
});

//POST method
app.post("/api/mockData/add", (req, res) => {
  const addData = {
    id: req.body.id,
    name: req.body.name,
  };
  console.log(addData);
  mockData.push(addData);
  res.send(
    JSON.stringify({
      success: true,
      notice: "Thêm mới thành công",
      data: mockData,
    })
  );
});

//PUT method
app.put("/api/mockData/edit/:id", (req, res) => {
    const data = mockData.find(mockData => mockData.id === parseInt(req.params.id))
    data.name = req.body.name;
    res.send(
        JSON.stringify({
        success: true,
        notice: "Sửa thành công",
        data: mockData,
        })
    );
});

//DELETE method
app.delete("/api/mockData/delete/:id", (req, res) => {
    const data = mockData.find(mockData => mockData.id === parseInt(req.params.id))
    if(!data){
        res.status(404).send(`Không có id ${req.params.id}`)
    }
    let index = mockData.indexOf(data)
    mockData.splice(index, 1)
    res.send(
        JSON.stringify({
        success: true,
        notice: "Xóa thành công",
        data: mockData,
        })
    );
});
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
