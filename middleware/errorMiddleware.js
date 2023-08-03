const errorMiddleware = (err,req,res,next) => {
    console.log('middle');
    // const statusCode = res.statusCode ? statusCode : 500;
    // res.status(statusCode);
    res.json({message: err.message, stack: process.env.NODE_ENV === "development" ? err.stack : null});

}

module.exports = errorMiddleware;