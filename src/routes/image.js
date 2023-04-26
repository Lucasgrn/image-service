import { Router } from "express";
import { addPerfilImg } from "../controllers/imageController.js";
import { upload } from "../config/multer.js";

const router = Router()

router.post('/perfil/img', upload.single('file'), addPerfilImg)

export { router }