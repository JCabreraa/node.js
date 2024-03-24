import { Router } from "express"
const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'Este es el index'}))
router.get('/about', (req, res) => res.render('about', {title: 'Página about me'}))
router.get('/contact', (req, res) => res.render('contact', {title: 'Página contact me'}))

export default router