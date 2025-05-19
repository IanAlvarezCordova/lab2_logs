const {createLogger, format, transports} = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file'); // <-- Agrega esta línea
const path = require('path');


//carpeta donde se guardan los logs
const logDir = path.join(__dirname, '..', 'logs');

//configurar el transporte con rotación diaria
const dailyRotateTransport = new transports.DailyRotateFile({
  filename: 'aplicacion-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  dirname: logDir,
  maxSize: '20m',
  maxFiles: '14d'
});

//configurar el logger
const logger = createLogger({
    level: 'silly',
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => `${timestamp}
         [${level.toUpperCase()}] : ${message}`
        )
    ),
    transports: [
        
        new transports.Console(),
        dailyRotateTransport,
        new transports.File({
            filename: path.join(logDir, 'error.log'),
            level: 'error',
           
        }),
            
    ]
})

//exportar
module.exports = logger;