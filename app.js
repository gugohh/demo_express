const express = require('express')
const pages = require('./routes/pages')

const app = express()
const port = 3000

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/',pages)

app.get('*',(req ,res)=>{
    res.status(404).send('404 Not Found!!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})