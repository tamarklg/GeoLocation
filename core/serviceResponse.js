module.exports = {
  success: (res, payload) => {
    res.status(200).json(payload);
  },
  successNoContent: (res) => {
    res.status(204).end();
  },
  successCreated: (res, payload) => {
    res.status(201).json(payload);
  },
  badRequest: (res, msg) => {
    const message = msg;
    res.status(400)
      .json({
        code: 'Bad request',
        message,
      });
  },
  errorUnauthorized: (res, msg) => {
    const message = msg || 'No authentication provided';
    res.status(401)
      .json({
        code: 'Unauthorized',
        message,
      });
  },
  errorForbidden: (res, msg) => {
    const message = msg || 'You don\'t have permission to this resource';
    res.status(403)
      .json({
        code: 'Forbidden',
        message,
      });
  },
  errorNotFound: (res, msg) => {
    const message = msg || 'The resource not found';
    res.status(404)
      .json({
        code: 'Not Found',
        message,
      });
  },

  conflict: (res, msg) => {
    const message = msg || 'The request could not be completed due to a conflict';
    res.status(409)
      .json({
        code: 'Conflict',
        message,
      });
  },

  errorGeneral: (res, err) => {
    res.status(500)
      .json({
        code: 'Internal Server Error',
        message: err.message,
        error: err,
      });
  },
  error: (res, err) => {
    res.status(err.status || 500)
      .json({
        code: err.code || 'Internal Server Error',
        message: err.message,
        details: err.details,
        stack: err.stack,
      });
  },
};

