function StudentMiddleware(req, res, next) {
    const { role } = req.user;
    if (role === "student") {
        next();
    }
    else {
        console.log("Token got expired ")
        return res.status(500).json({
            message: "You are not allowed to access student material ",
            success: false
        })
    }

}
module.exports = StudentMiddleware;