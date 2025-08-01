import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  cartItems: {
    type: Object,
    default: {},
  }
}, {
  minimize: false,
  timestamps: true
});


const User = mongoose.models.user || mongoose.model("user", userSchema);    
export default User;