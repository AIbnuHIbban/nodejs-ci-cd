const express 	= require('express')
const app 		= express()
const port 		= 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/me', (req, res) => {
  res.json({
  	'status'	: 'ok',
  	'content'	: 'Hi Abdullah!'
  })
})

app.get('/you', (req, res) => {
  res.json({
  	'status'	: 'ok',
  	'content'	: 'YOU'
  })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

module.exports = app