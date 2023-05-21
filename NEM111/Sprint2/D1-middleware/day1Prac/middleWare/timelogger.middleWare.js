const timeLogger = (req, res, next) => {
    let startTime = new Date().getTime()
    next()
    let endTime = new Date().getTime()
    console.log(endTime - startTime)
}

module.exports = timeLogger