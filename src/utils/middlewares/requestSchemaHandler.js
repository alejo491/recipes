import boom from '@hapi/boom';
import Joi from 'joi';

function validate(data, schema) {
  if (!Joi.isSchema(schema)) {
    schema = Joi.object(schema);
  }
  const { error } = schema.validate(data);
  return error;
}

function validateRequestSchema(schema, check = 'body') {
  return function (req, res, next) {
    const error = validate(req[check], schema);
    error ? next(boom.badRequest(error)) : next();
  };
}

export default validateRequestSchema;
