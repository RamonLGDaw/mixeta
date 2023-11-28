const express = require('express')
const app = express()
const puerto = 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/fotos', (req, res) => {
    res.render('fotos')
})

app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(puerto, () => {
    console.log(`Servidor activo en el puerto: ${puerto}`)
})