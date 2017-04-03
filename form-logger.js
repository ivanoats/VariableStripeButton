module.exports = function (ctx, req, res) {
  console.log("----------------------CONTEXT---------")
  console.log(ctx)
  console.log("----------------------REQUEST---------")
  console.log(req)
  var message = `Thanks for submitting a form`;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  return res.end('<h1>' + message + '</h1>');
};
