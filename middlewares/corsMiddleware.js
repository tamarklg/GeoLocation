module.exports = ((req, res, next) => {
  //Enabling CORS 
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization');
  // if ((req.headers.referer + "").indexOf("app.akcelconstruction") >= 0) { hProd = true; }
  next();
});
