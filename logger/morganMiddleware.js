const morgan = require('morgan');
const logger = require('./index');

//configurar stream para que Morgan escriba log usando Winston

const stream = {
    write: (message) => {
        logger.http(message.trim());
    },
}

//crear el middleware de Morgan con un formato personalizado
const morganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms', 
    {stream}
);

//exportar el middleware
module.exports = morganMiddleware;