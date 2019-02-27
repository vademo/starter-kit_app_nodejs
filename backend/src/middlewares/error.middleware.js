import uuid from 'uuid';

function logError(logger, identifier, err) {
  logger.error(`${identifier} stack:`, err.stack);
  logger.error(`${identifier} error: `, err);
}

function getErrorStatus(err) {
  if (err.status) {
    return err.status;
  }

  switch (err.name) {
    case 'ValidationError':
    case 'CastError':
    case 'BadRequestError':
      return 400;
    case 'NotFoundError':
      return 404;
    default:
      return 500;
  }
}

function formatErrorOutput(errorProperties) {
  const status = getErrorStatus(errorProperties);
  return {
    type: errorProperties.type || 'about:blank',
    title: errorProperties.title || errorProperties.name,
    detail: errorProperties.message,
    url: errorProperties.originalUrl,
    status,
    identifier: errorProperties.identifier,
    code: errorProperties.code || status,
  };
}

function errorHandler(options) {
  const errorHandlerOptions = options || {};
  const logger = errorHandlerOptions.logger || false;

  return function errorMiddleware(err, req, res, next) {
    if (!err) {
      return next();
    }

    const errorProperties = Object.assign({}, err);
    errorProperties.url = req.originalUrl;
    errorProperties.identifier = err.identifier || uuid.v4();

    if (logger) {
      logError(logger, errorProperties);
    }

    const outPutError = formatErrorOutput(errorProperties);

    res.setHeader('Content-Type', 'application/problem+json');

    return res.status(outPutError.status).json(outPutError);
  };
}

export default errorHandler;
