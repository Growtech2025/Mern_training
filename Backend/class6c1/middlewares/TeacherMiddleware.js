function TeacherMiddleware(req, res, next) {
    const { role } = req.user;
    if (role === "teacher") {
        next();
    }
    else {
        console.log("Token got expired ")
        return res.status(500).json({
            message: "You are not allowed to access teacher material ",
            success: false
        })
    }
}
module.exports = TeacherMiddleware;