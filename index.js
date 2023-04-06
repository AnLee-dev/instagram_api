// const http = require('http');
const PORT = 3000

const mockData = [
    {id: 1, name: 'JS'},
    {id: 2, name: 'React'},
    {id: 1, name: 'Express'},
    {id: 2, name: 'C#'},
]
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

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('what r u looking for?')
})
app.get('/api/mockData/:id', (req, res) => {
    const data = mockData.find(mockData => mockData.id === parseInt(req.params.id))
    if(!data){
        res.status(404).send('can find this ID')
    }else{

        res.send(req.params.id)
    }
})
app.listen(PORT, () => console.log(`server running on port ${PORT}`));