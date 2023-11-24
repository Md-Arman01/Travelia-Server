const allErrorHandler = (err, _req, res, _next) => {
    // format error
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
  };
  
  module.exports = allErrorHandler;
  