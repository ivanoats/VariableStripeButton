module.exports = function (ctx, req, res) {
  console.log('----------------------CONTEXT---------')
  console.log(ctx)
  console.log('----------------------REQUEST---------')
  console.log(req)
  res.redirect(301, 'https://variable-stripe-pay.aerobatic.io/thankyou.html')
}
