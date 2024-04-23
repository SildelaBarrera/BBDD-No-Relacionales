const models = require("./userMDB2");
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://sil_delabarrera:Atl4sdb0723.@silbc.g7pamq1.mongodb.net/', 
                {useNewUrlParser: false, useUnifiedTopology: false }  ) 


let mark1 = new models.mark({
    date: 2022,
    mark: 8
})
let mark2 = new models.mark({
    date: 2022,
    mark: 5
})
let mark3 = new models.mark({
    date: 2022,
    mark: 6
})
let mark4 = new models.mark({
    date: 2022,
    mark: 4
})
let mark5 = new models.mark({
    date: 2022,
    mark: 3
})
let mark6 = new models.mark({
    date: 2022,
    mark: 9
})

// models.mark.insertMany([mark1, mark2, mark3, mark4, mark5, mark6])
// .then(function()
// {
//     console.log("Documentos guardado")
//     mongoose.disconnect();
// })
// .catch(function()
// {
//     console.log("Error al guardar")
// })

let subject1 = new models.subject({
    title: "Maths",
})
let subject2 = new models.subject({
    title: "Art",
})
let subject3 = new models.subject({
    title: "Science",
})
let subject4 = new models.subject({
    title: "History",
})
let subject5 = new models.subject({
    title: "Geography",
})
let subject6 = new models.subject({
    title: "French",
})

// models.subject.insertMany([subject1, subject2, subject3, subject4, subject5, subject6])
// .then(function()
// {
//     console.log("Documentos guardado")
//     mongoose.disconnect();
// })
// .catch(function()
// {
//     console.log("Error al guardar")
// })

let teacher1 = new models.teacher({
    firstname: "Amy",
    lastname: "Strong",
    groups: "1B"
})
let teacher2 = new models.teacher({
    firstname: "Helena",
    lastname: "Goodman",
    groups: "2A"
})
let teacher3 = new models.teacher({
    firstname: "Jerry",
    lastname: "Singleman",
    groups: "1A"
})
let teacher4 = new models.teacher({
    firstname: "John",
    lastname: "Star",
    groups: "1B"
})

// models.teacher.insertMany([teacher1, teacher2, teacher3, teacher4])
// .then(function()
// {
//     console.log("Documentos guardado")
//     mongoose.disconnect();
// })
// .catch(function()
// {
//     console.log("Error al guardar")
// })

let student1 = new models.student ({
    firstname: "Jaime",
    lastname: "de la Barrera",
    marks: [mark1, mark2, mark3],
    subjects: [subject2. subject3, subject4],
    teachers: [teacher3, teacher4]
})
let student2 = new models.student ({
    firstname: "Gabriela",
    lastname: "Causin",
    marks: [mark1, mark4, mark5],
    subjects: [subject3, subject5],
    teachers: [teacher2, teacher4]
})
let student3 = new models.student ({
    firstname: "Fede",
    lastname: "Palacios",
    marks: [mark2, mark5, mark6],
    subjects: [subject2, subject5, subject6],
    teachers: [teacher1, subject4]
})
let student4 = new models.student ({
    firstname: "Alicia",
    lastname: "de la Barrera",
    marks: [mark2, mark3, mark5],
    subjects: [subject1, subject4, subject5],
    teachers: [teacher2, teacher3]
})

// models.student.insertMany([student1, student2, student3, student4])
// .then(function()
// {
//     console.log("Documentos guardado")
// })
// .catch(function()
// {
//     console.log("Error al guardar")
// })

// Mostrar por consola:
// Todas las notas de un alumno.

console.log(student2.marks[0].mark , student2.marks[1].mark, student2.marks[2].mark)

// Todos las asignaturas de un alumno.

console.log(student3.subjects[0].title, student3.subjects[1].title, student3.subjects[2].title)

// Todos los profesores de un alumno.

console.log(student4.teachers[0].firstname, student4.teachers[1].firstname)
