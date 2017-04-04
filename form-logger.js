module.exports = function (ctx, req, res) {
  console.log('-----------------------DATA--------')
  console.log(ctx.query.amount)
  const amount = ctx.query.amount
  res.writeHead(
    301,
    {
      Location:
      `https://variable-stripe-pay.aerobatic.io/thankyou.html?amount=${amount}`
    }
  )
  res.end('redirecting')
}
