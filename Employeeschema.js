const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    dateofbirth: {
        type: String,
        required: true,

    },
    gender: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    employeeid: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    dateofjoining: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    },
    isactive: {
        type: Boolean,
        default: true
    },
    image: {
        type: Object,
        required: true
    },
    

});

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;