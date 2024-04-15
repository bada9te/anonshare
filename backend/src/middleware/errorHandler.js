module.exports = (err, req, res, next) => {
    //console.error(err);
    return res.status(err.status || 500).json({
        ok: false,
        error: err.message || "Unexpected error",
    });
}