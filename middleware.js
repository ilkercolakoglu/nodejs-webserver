
var middleware = {
    requireAuthentication : function(req, res, next) {
        console.log("Özel route girildi!!!");
        next();
    },
    logger : function (req, res, next) {
        console.log(req.method);
        next();
    }
}

module.exports = middleware;