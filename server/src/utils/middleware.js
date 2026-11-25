exports.justPrint = async(req, res, next) => {
    console.log("")
    return res.json({
        success: "fail",
        message: "not received"
    })
    next();
}