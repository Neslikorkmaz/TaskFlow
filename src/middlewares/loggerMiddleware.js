const loggerMiddleware = (req, res, next) => {
    const currentDate = new Date().toLocaleString("tr-TR");

    console.log(
        `${req.method} ${req.originalUrl} - ${currentDate}`
    );

    next();
};

module.exports = loggerMiddleware;