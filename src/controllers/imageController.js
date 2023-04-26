import { PostImg } from "../models/PostImg.js";
import { Perfil } from "../models/Perfil.js";

const addPerfilImg = async (req, res) => {
  try {

    const { user } = req.body
    const file = req.file
    const perfil = await Perfil.create({ user, src: file.path })
    res.status(200).json(perfil)

  } catch (error) {
    res.status(500).json(error)
  }

}

export { addPerfilImg }