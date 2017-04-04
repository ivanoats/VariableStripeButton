module.exports = function (ctx, req, res) {
  console.log('-----------------------DATA--------')
  console.log(ctx.data.amount)
  const amount = ctx.data.amount
  res.writeHead(
    301,
    {
      Location:
      `https://variable-stripe-pay.aerobatic.io/thankyou.html?amount=${amount}`
    }
  )
  res.end('redirecting')
}
