// Usando objetos express
const express = require('express')
const res = require('express/lib/response')

// App de express
const app = express()

// Puerto que vamos a utilizar para ver nuestra all: localhost:3000
const port = 3000

// Path inicial, respondera a la URL localhost:3000
app.get('/', (req, res) => {
    res.send('Helo World!')
})

// Agregando una ruta adicional
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a LaunchX')
})

// Con esto inicializaremos la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Regresando un objeto 
// localhost:3000/exploresInNode
app.get('/explorersInNode', (req, res)=>{
    const explorer = {
        name: "Explorer",
        msg: "Hello"
    }
    res.send(explorer)
})

//Query Params: Recibir parametros por la URL
// Ejemplo: http://localhost:3000/explorers/carlo
// req.params= {"explorerName: "carlo"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})