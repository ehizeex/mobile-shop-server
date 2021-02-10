function errorHandler(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({message: "The user is not authorized"})
    }

    if (err.name === 'ValidationError') {
        //  validation error
        return res.status(401).json({message: err})
    }

    // default to 500 server error
    return res.status(500).json(err);
}

module.exports = errorHandler;


/*Based on the type of our error, we can classify our error
the error with name 
validation error 

if you ask for API Without any token from the front end, you will get unauthorised error]
if you upload a pdf when you are surpose to upload image to the server, you will get validatioon error 
if there is no classified error, which mean if error occures but not having either unathorised or validation, we will get server error 

*/