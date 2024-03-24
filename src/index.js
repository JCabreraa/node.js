//Importacion de Modulos
import express from "express"
// import ejs from "ejs"
import { dirname, join } from "path" 
import { fileURLToPath } from "url"
import indexRoutes from './routes/index.js'
const port = 3000

//Const de direccionamiento
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname, 'views'))

//Set de Vistas
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))

//Enrutamiento
app.get('/', (req, res) => res.render('index', {title: 'Este es el index'}))
app.get('/about', (req, res) => res.render('about'))
app.get('/contact', (req, res) => res.render('contact'))

//Escucha del Server
app.listen(port)
console.log("App Online on Server port:", 3000);
