const pool = require('../../db')
const {getStudentsQuery, getStudentByIdQuery, checkEmailExistsQuery, addStudentQuery, deleteStudentQuery, updateStudentQuery} = require('./queries')

const getStudents = (req, res) => {
    pool.query(getStudentsQuery, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(getStudentByIdQuery, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const addStudent = (req, res) => {
    const {first_name, last_name, enrollment_date, email } = req.body
    // check if email exists
    pool.query(checkEmailExistsQuery, [email], (error, results) => {
        if(results.rows.length) {
            res.send('Email already exists!')
        }

        pool.query(addStudentQuery, [first_name, last_name, enrollment_date, email], (error, results)=> {
            if(error) throw error;
            res.status(201).send('Student Created Successfully')
            console.log('Student has been created successfully!')
        })
    })
}

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);  
    pool.query(getStudentByIdQuery, [id], (_, results)=> {
        if(!results.rows.length) {
            res.send('No students found in databas. Can not be removed')
        }

        pool.query(deleteStudentQuery, [id], (error, results)=> {
            if(error) throw error;
            res.send('Student has been deleted!');
        })
    })
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);  
    const {first_name} = req.body;

    pool.query(getStudentByIdQuery, [id], (error, results) => {
        if(!results.rows.length) {
            res.send('Student does not exists in database')
        }

        pool.query(updateStudentQuery, [first_name, id], (err, results)=> {
            if(err) throw err;
            res.send('Student succesfully updated!')
        })
    })
}

module.exports = { 
    getStudents, getStudentById, addStudent, addStudent, deleteStudent, updateStudent
}