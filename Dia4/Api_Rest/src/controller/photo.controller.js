const { request } = require("../app");
const PhotoModel = require("../model/photo")

// GET /photos. Dado un usuario obtiene todas sus fotos.

function getPhoto(request, response){
        // console.log(request.query.name)
        PhotoModel.find({name: request.query.name})         
        .then(function(photo)
        { 
            console.log(photo)
            response.send (photo)
        })
        .catch( function()
        {
            console.log("error") 
        })
}

// POST /photos. Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección.

// function postPhoto(){
//     console.log(request.body)
//     PhotoModel.create({name: request.body.name,
//                         url: request.body.url,
//                         title: request.body.title,
//                         description: request.body.description})         
//         .then(function()
//             { console.log("Documento guardado")
//             })
//         .catch( function()
//             {console.log("Error al subir el documento")       
//         })
// }
function postPhoto(request, response)
{
    console.log(request.body);      
    
    let photo = new PhotoModel({name: request.body.name,
                                    url: request.body.url,
                                    title: request.body.title,
                                    description:request.body.description})
    photo.save()
    .then( (photo) =>
    {
        console.log("Usuario guardado correctamente")
        console.log(photo);
        response.send(photo);
    })
    .catch( (error) =>
    {
        console.log(error)
    })
}

// PUT /photos. Dado el titulo de una foto y una descripción modificar su descripción.

function putPhoto(request, response)
{
    PhotoModel.updateOne({id: request.body.id}, {name:request.body.name, 
                        url: request.body.url,
                        title: request.body.title,
                        description: request.body.description})
    .then( (photo) =>
    {
        console.log("Usuario actualizado correctamente")
        response.send(photo);
    })
    .catch( (error) =>
    {
        console.log(error)
    })
}
// DEL /photos. Dado un usuario y un titulo de foto eliminar su foto.
// DEL /photos. Dado un usuario eliminar todas sus fotos.

function deletePhoto(request, response){

    console.log(request.body)
    
    // if({name: request.body.name}, {title: request.body.title})
    
    // {
        PhotoModel.deleteOne({name: request.body.name, title: request.body.title})         
        .then((photo) =>
        { 
            console.log("Documento borrado")
            response.send(photo)
        })
        .catch((error) =>
        {
            console.log(error)       
        })
    // }
    // else if({name: request.body.name})
    // {
        // PhotoModel.deleteMany({name: request.body.name})         
        // .then(function(info)
        // { 
        //     console.log(info)
        //     response.send("Documentos borrados")
        // })
        // .catch( function()
        // {
        //     console.log("error")       
        // })
// }
}

module.exports = {getPhoto, postPhoto, putPhoto, deletePhoto};
