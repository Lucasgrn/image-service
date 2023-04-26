import { db } from "../database/mongo.js";
const ObjectId = db.Schema.ObjectId
const PerfilSchema = new db.Schema({
  user: {
    type: ObjectId,
    ref: 'User'
  },
  src: {
    type: String,
    require: true
  }
})
const Perfil = db.models.Perfil || db.model('Perfil', PerfilSchema)
export { Perfil }