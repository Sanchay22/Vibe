import mongoose from "mongoose";
const UserSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    lastName:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    email:{
        type:String,
        required:true,
        max:50,
    },
    password:{
        type:String,
        required:true,
        min:5,
        max:50,
    },
    picturePath:{
        type:String,
        default: "",
    },friends: {
        type: Array,
        default: [],
    },
    location: String,
    occupation:String,
    viwedProfile: Number,
    impressions: Number,
},{
    timestamps:true
});
const User= mongoose.model("User",UserSchema);
export default User;


// isme i want to integrate  age it could be a good tracker aur allow only 13+ age people 