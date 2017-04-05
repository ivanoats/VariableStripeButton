var stripe = require('stripe')

module.exports = function (ctx, req, res) {
  var companyName = 'Acme Widgets'
  stripe(ctx.secrets.stripeSecretKey).charges.create({
    amount: req.amount,
    currency: 'usd',
    source: ctx.body.stripeToken,
    description: `${companyName} purchase`
  }, function (error, charge) {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/html'} )
      return res.end(`<h1>${error.message}</h1>`)
    } else {
      res.writeHead(
        301,
        {
          Location:
          `https://variable-stripe-pay.aerobatic.io/thankyou.html?amount=${req.amount}`
        }
      )
    }
  })
}
