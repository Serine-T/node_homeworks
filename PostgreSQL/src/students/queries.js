const getStudentsQuery = "SELECT * FROM students"
const getStudentByIdQuery = "SELECT * FROM students WHERE id = $1"
const addStudentQuery = "INSERT INTO students (first_name, last_name, enrollment_date, email) VALUES ($1, $2, $3, $4)";
const checkEmailExistsQuery = "SELECT s FROM students s WHERE s.email = $1"
const deleteStudentQuery = "DELETE FROM students WHERE id = $1";
const updateStudentQuery = "UPDATE students SET first_name = $1 WHERE id = $2";

module.exports = {
    getStudentsQuery,
    getStudentByIdQuery,
    addStudentQuery,
    checkEmailExistsQuery,
    deleteStudentQuery,
    updateStudentQuery
}