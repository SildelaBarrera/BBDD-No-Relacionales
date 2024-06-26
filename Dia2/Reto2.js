const models = require("./userMDB2");
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://sil_delabarrera:Atl4sdb0723.@silbc.g7pamq1.mongodb.net/', 
                {useNewUrlParser: false, useUnifiedTopology: false }  ) 


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

let subject1 = new models.subject({
    title: "Maths",
    teachers: [teacher1, teacher2]
})
let subject2 = new models.subject({
    title: "Art",
    teachers: [teacher4, teacher3]
})
let subject3 = new models.subject({
    title: "Science",
    teachers: [teacher3, teacher4]
})
let subject4 = new models.subject({
    title: "History",
    teachers: [teacher3, teacher4]
})
let subject5 = new models.subject({
    title: "Geography",
    teachers: [teacher2, teacher3]
})
let subject6 = new models.subject({
    title: "French",
    teachers: [teacher1, teacher3]
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

let mark1 = new models.mark({
    date: 2022,
    mark: 8,
    subjects: [subject3]
})
let mark2 = new models.mark({
    date: 2022,
    mark: 5,
    subjects: [subject1]
})
let mark3 = new models.mark({
    date: 2022,
    mark: 6,
    subjects: [subject4]
})
let mark4 = new models.mark({
    date: 2022,
    mark: 4,
    subjects: [subject2]
})
let mark5 = new models.mark({
    date: 2022,
    mark: 3,
    subjects: [subject5]
})
let mark6 = new models.mark({
    date: 2022,
    mark: 9,
    subjects: [subject6]
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

let student1 = new models.student ({
    firstname: "Jaime",
    lastname: "de la Barrera",
    marks: [mark1, mark2, mark3],
})
let student2 = new models.student ({
    firstname: "Gabriela",
    lastname: "Causin",
    marks: [mark1, mark4, mark5],
})
let student3 = new models.student ({
    firstname: "Fede",
    lastname: "Palacios",
    marks: [mark2, mark5, mark6],
})
let student4 = new models.student ({
    firstname: "Alicia",
    lastname: "de la Barrera",
    marks: [mark2, mark3, mark5],
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

models.student.find({ firstname: student2.firstname})
    .then(function (students) {
        students.forEach(student => {
            student.marks.forEach(mark => {
                console.log(mark.mark)
            })
        })
    })

// Todos las asignaturas de un alumno.

models.student.find({ firstname: student3.firstname})
    .then(function (students) {
        students.forEach(student => {
            student.marks.forEach(mark => {
                mark.subjects.forEach(subject => {
                    console.log(subject.title)
                })    
            })
        })
    })

// Todos los profesores de un alumno.

models.student.find({ firstname: student4.firstname})
    .then(function (students) {
        students.forEach(student => {
            student.marks.forEach(mark => {
                mark.subjects.forEach(subject => {
                    subject.teachers.forEach(teacher => {
                        console.log(teacher.firstname);
                    })   
                })    
            })
        })
    })


