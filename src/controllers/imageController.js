import { PostImg } from "../models/PostImg.js";
import { Perfil } from "../models/Perfil.js";

const addPerfilImg = async (req, res) => {
  const { user } = req.body
  const file = req.file
  try {

    const perfil = await Perfil.create({ user, src: file.path })
    res.status(201).json(perfil)

  } catch (error) {
    res.status(500).json(error)
  }
}

const addPostImg = async (req, res) => {
  const { post } = req.body
  const file = req.file
  try {
    const postImg = await PostImg.create({ post, src: file.path })
    res.status(201).json(postImg)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const viewPostImg = async (req, res) => {
  const { post } = req.params
  try {
    const postImg = await PostImg.find({ post: post })
    res.status(200).json(postImg)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export { addPerfilImg, addPostImg, viewPostImg }