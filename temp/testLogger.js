const logger = require('../logger');

logger.silly('Mensaje de nivel mas bajo');
logger.debug('Mensaje es un mensaje de tipo debug');
logger.verbose('Mnsj de evento general mas detallado ipo verbose');
logger.info('Mensaje de infomracion');
logger.warn('Mensaje de advertencia, wrn algo ocurrio mal');
logger.error('Mensaje de error, fallo imporatnte');