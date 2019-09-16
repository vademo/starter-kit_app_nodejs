import errors from '../errors';

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  let returnError = err;
  let meta;
  if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
    meta = {
      stack: err.stack,
    };
    if (err.message === 'validation error') {
      meta = err.errors;
    }
  }
  if (err.name === 'BadRequestError' || err.name === 'CastError') {
    returnError = errors.badRequest({
      identifier: req.id,
      type: req.originalUrl,
      meta,
    });
  }
  if (err.message === 'validation error') {
    returnError = errors.badRequest({
      title: err.field ? err.field : 'Validation Error',
      identifier: req.id,
      detail: err.errors || '',
      type: req.originalUrl,
      meta,
    });
  }
  if (returnError.status) {
    return res.status(returnError.status).json({
      ...returnError,
      identifier: req.id,
      code: err.status || -1,
      type: req.originalUrl,
    });
  }
  return res.status(500).json(errors.internalServerError({
    title: 'Something went wrong',
    type: req.originalUrl,
    detail: returnError.message,
    identifier: req.id,
    code: -1,
    meta,
  }));
}

export default errorHandler;
