import { db } from "../database/mongo.js";
const ObjectId = db.Schema.ObjectId
const PostImgSchema = new db.Schema({
  post: {
    type: ObjectId,
    ref: 'post'
  },
  src: {
    type: String,
    require: true
  }
})
const PostImg = db.models.PostImg || db.model('PostImg', PostImgSchema)
export { PostImg }