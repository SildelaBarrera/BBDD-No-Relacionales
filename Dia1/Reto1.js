const mongoose = require("mongoose");
const User = require("./userMDB");

mongoose.connect("mongodb+srv://sil_delabarrera:Atl4sdb0723.@silbc.g7pamq1.mongodb.net/",
{useNewUrlParser: false, useUnifiedTopology: false})

let userDocument = new User ({
    name: "Adriana",
    email: "adriana@hotmail.com",
    role: "Admin",
    verified: true
})

let userDocument2 = new User ({
    name: "Ana",
    email: "ana@hotmail.com",
    role: "User",
    verified: false
})
let userDocument3 = new User ({
    name: "Sonia",
    email: "sonia@hotmail.com",
    role: "Teacher",
    verified: false
})
let userDocument4 = new User ({
    name: "Sergio",
    email: "sergio@hotmail.com",
    role: "Teacher",
    verified: true
})
let userDocument5 = new User ({
    name: "Pablo",
    email: "pablo@hotmail.com",
    role: "User",
    verified: false
})

userDocument.save()
.then((data) => {
    console.log(data)
    console.log('documento guardado')
})
.catch((err) => {
    console.log(err)
})
userDocument2.save()
.then((data) => {
    console.log(data)
    console.log('documento guardado')
})
.catch((err) => {
    console.log(err)
})
userDocument3.save()
.then((data) => {
    console.log(data)
    console.log('documento guardado')
})
.catch((err) => {
    console.log(err)
})
userDocument4.save()
.then((data) => {
    console.log(data)
    console.log('documento guardado')
})
.catch((err) => {
    console.log(err)
})
userDocument5.save()
.then((data) => {
    console.log(data)
    console.log('documento guardado')
})
.catch((err) => {
    console.log(err)
})