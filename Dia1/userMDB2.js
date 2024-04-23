const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: {
      type: String,
    }, 
    password: { type: String,
                validate: [
                function(password){
                    return password.length = 8;
                    },
                    "Se requieren mínimo 8 carácteres"],
                    select: false
                }
})
const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: {type: String,
                enum: ["González", "Pérez", "Hernández", "Jiménez", "Rodríguez"]
            },
    dateOfBirth: Number,
    comments: String,
    rol: String
})
const CreedentialsSchema = new mongoose.Schema({
    address: String,
    phone: { type: Number,
            min: 99999999,
            max: 1000000000
        },
    email: String
})

ProfileSchema.pre('save', function(next)
{
    console.log("Middleware de entrada");
    if (this.dateOfBirth < 2006){
        console.log('Edad correcta')
        next();
    }
else  
    console.log('Debes ser mayor de edad para entrar')
});

const user = mongoose.model("User", UserSchema, "users");
const profile = mongoose.model("Profile", ProfileSchema, "profiles");
const credentials = mongoose.model("Creedentials", CreedentialsSchema, "creedentials");

module.exports = {user, profile, credentials}