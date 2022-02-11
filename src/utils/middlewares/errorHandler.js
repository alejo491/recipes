const boom=require('@hapi/boom');
const config = require('../../config/index.js');

const withErrorStack = (err, stack) => {
  if (config.env !== 'PRODUCTION') {
    return { err, stack };
  }

  return err;
};

const notFoundHandler = (req, res) => {
  const {
    output: { statusCode, payload },
  } = boom.notFound();

  res.status(statusCode).json(payload);
};

const logError = (err, req, res, next) => {
  if (err.isBoom) {
    res.status(err.output.statusCode).json({
      error: true, message: err.output.payload.message,
    });
  } else {
    res.status(500).json({
      error: true, message: err.message.trim() || 'Internal server error',
    });
  }
};

module.exports = {
  logError,
  notFoundHandler,
  withErrorStack
}