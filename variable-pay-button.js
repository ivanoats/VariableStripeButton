var stripe = require('stripe')

module.exports = function (ctx, req, res) {
  var companyName = 'Acme Widgets'
  stripe(ctx.secrets.stripeSecretKey).charges.create({
    amount: req.amount,
    currency: 'usd',
    source: ctx.body.stripeToken,
    description: `${companyName} purchase`
  }, function (error, charge) {
    var status = error ? 400 : 200
    var message = error ? error.message : `Thanks for purchasing from ${companyName}!`
    res.writeHead(status, { 'Content-Type': 'text/html' })
    return res.end('<h1>' + message + '</h1>')
  })
}