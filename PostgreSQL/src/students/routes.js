const { Router } = require('express')
const {getStudents, getStudentById, addStudent, deleteStudent, updateStudent} =require('./controllers');
const router = Router();

router.get('/', getStudents)
router.get('/:id', getStudentById)
router.post('/', addStudent)
router.delete('/:id', deleteStudent)
router.put('/:id', updateStudent)

module.exports = router