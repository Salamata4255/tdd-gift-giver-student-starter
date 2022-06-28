const app = require("./app")

const port = process.env.PORT || 3000

// app.get('/test', (req,res) => {
//   //console.log(`🚀 Server listening at http://localhost:${port}`)
//   res.send('Hello Test!')
// })

app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`)
})
