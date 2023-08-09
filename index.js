const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const port = 80
app.use(express.static('public'))


// app.get('/', (req, res) => {
//     res.redirect('/')
//   res.sendFile(path.join(__dirname,'./index.html'))
  
// })
app.get('/', function(req, res) {
    
      res.redirect('/?q=all&p=1');
    })

app.get('/api', async(req, res) => {
    
    let r = await axios.get(`https://newsapi.org/v2/everything?${req._parsedUrl.query}`)
    // let r = await axios.get(`https://newsapi.org/v2/everything?q=${req._parsedUrl.query}&apiKey=9a9d8799d8c24a99978e01a92fcd9d34`)
    let a = r.data
    res.json(a)
  
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})