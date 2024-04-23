const mongoose = require("mongoose");
const Photo = require("./photoMDB");

mongoose.connect('mongodb+srv://sil_delabarrera:Atl4sdb0723.@silbc.g7pamq1.mongodb.net/',
{useNewUrlParser: false, useUnifiedTopology: false})

let photo1 = new Photo ({
    name: "Andrea",
    url: "photocampoverano.jpg",
    title: "Julio2023",
    description: "Tarde de paseo en el pueblo"
})
let photo2 = new Photo ({
    name: "Andrea",
    url: "photoplayaverano.jpg",
    title: "Julio2023",
    description: "Chiringuito de Benidorm" 
})
let photo3 = new Photo ({
    name: "Carmen",
    url: "photobruselas.jpg",
    title: "Familia en Bruselas 2018",
    description: "Posando en el centro de Bruselas"
})
let photo4 = new Photo ({
    name: "Carmen",
    url: "photoparis.jpg",
    title: "Viaje a Paris 2022",
    description: "Junto al Louvre"
})

// photo1.save()
// .then((data) => {
//     console.log(data)
//     console.log('documento guardado')
// })
// .catch((err) => {
//     console.log(err)
// })
// photo2.save()
// .then((data) => {
//     console.log(data)
//     console.log('documento guardado')
// })
// .catch((err) => {
//     console.log(err)
// })
// photo3.save()
// .then((data) => {
//     console.log(data)
//     console.log('documento guardado')
// })
// .catch((err) => {
//     console.log(err)
// })

// Subida de fotos: Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’.

// function subirFoto(){
//     Photo.create(photo4)         
//         .then(function()
//             { console.log("Documento guardado")
//             })
//         .catch( function()
//             {console.log("Error al subir el documento")       
//         })
// }
// subirFoto()

// Obtener fotos: Dado un usuario obtener todas sus fotos.

// function obtenerFoto(){
//     Photo.find({}).where({name: photo2.name})         
//         .then(function(info)
//             { console.log(info)
//             })
//         .catch( function()
//             {console.log("error")       
//         })
// }
// obtenerFoto()

// Modificar fotos: Dado el titulo de una foto y una descripción modificar su descripción.

// function modificarFoto(){
//     Photo.updateOne({title: photo1.title}, {description: " "})         
//         .then((info) =>
//         {
//             console.log("Documento modificado");
//             console.log(info)
//         })
//         .catch((error) =>
//         {
//             console.log(error)
//         })            
// }
// modificarFoto()

// Eliminar Foto: Dado un usuario y un titulo de foto eliminar su foto.

// function eliminarFoto(){
//     Photo.deleteOne({name: photo2.name, title: photo2.title})         
//         .then(function(info)
//         { 
//             console.log(info)
//             console.log("Documento borrado")
//         })
//         .catch( function()
//         {
//             console.log("error")       
//         })
// }
// eliminarFoto()

// Eliminar todas las Fotos: Dado un usuario eliminar todas sus fotos.

// function eliminarFotos(){
//     Photo.deleteMany({name: photo3.name})         
//         .then(function(info)
//         { 
//             console.log(info)
//             console.log("Documento borrado")
//         })
//         .catch( function()
//         {
//             console.log("error")       
//         })
// }
// eliminarFotos()