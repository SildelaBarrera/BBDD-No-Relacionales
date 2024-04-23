const mongoose = require("mongoose");
const models = require("./userMDB2");

mongoose.connect("mongodb+srv://sil_delabarrera:Atl4sdb0723.@silbc.g7pamq1.mongodb.net/",
{useNewUrlParser: false, useUnifiedTopology: false})

let userDocument = new models.user ({
    login: "Adriana98",
    password: 1234,
})
// let profileDocument = new models.profile ({
//     name: "Adriana",
//     surname: "Pérez",
//     dateOfBirth: 2001,
//     comments: "Pelo rizado y oscuro",
//     rol: "User"
// })
// let creedentialsDocument = new models.credentials ({
//     address: "Calle Acacias 28, Madrid",
//     phone: 665968741,
//     email: "adriana@hotmail.com"
// })
userDocument.save()
.then((data) => {
    console.log(data)
    console.log('documento guardado')
})
.catch((err) => {
    console.log(err)
})
// profileDocument.save()
// .then((data) => {
//     console.log(data)
//     console.log('documento guardado')
// })
// .catch((err) => {
//     console.log(err)
// })
// creedentialsDocument.save()
// .then((data) => {
//     console.log(data)
//     console.log('documento guardado')
// })
// .catch((err) => {
//     console.log(err)
// })