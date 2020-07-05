const globalio = io => {
    return function(req, res, next) {
        req.io = io;
        next();
    };
};

module.exports = globalio;
