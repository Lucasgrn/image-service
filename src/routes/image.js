import { Router } from "express";
import { addPerfilImg, addPostImg, viewPostImg } from "../controllers/imageController.js";
import { upload } from "../config/multer.js";

const router = Router()

router.post('/perfil/img/add', upload.single('file'), addPerfilImg)
router.post('/post/img/add', upload.single('file'), addPostImg)
router.get('/post/img/:post', viewPostImg)

export { router }