const addStudentCode = (req, res, next) => {
    req.body.studentcode = `fs23_${Math.random()}.`
    next()
}
module.exports = addStudentCode