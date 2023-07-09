const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const UserSchema = new Schema({
    username: {type: String, required:true, min: 4, unique: true},
    password: {type: String, required:true},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;

//mongodb+srv://aviraj:Xvv*&84733@cluster0.1xjmdfw.mongodb.net/