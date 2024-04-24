const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    marks: []
})
const MarkSchema = new mongoose.Schema({
    date: Number,
    mark: Number,
    subjects: []
})
const SubjectSchema = new mongoose.Schema({
    title: String,
    teachers: []
    
})
const TeacherSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    groups: String,
})

const student = mongoose.model("Student", StudentSchema, "studentsReto2");
const mark = mongoose.model("Mark", MarkSchema, "marksReto2");
const subject = mongoose.model("Subject", SubjectSchema, "subjectsReto2");
const teacher = mongoose.model("Teacher", TeacherSchema, "teachersReto2");

module.exports = {student, mark, subject, teacher}
 