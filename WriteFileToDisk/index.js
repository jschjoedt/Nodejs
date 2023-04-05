const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Only POST is supported, have a nice day!')
})

app.post('/write', (req, res) => {
		
		// Loop files in json array
		for(var file of req.body.files) {
			// Write file to local folder
			fs.writeFile('./FileTarget/'+ file.name, file.data, function(err) {
				if(err) {
					// Write error to console
					console.log(err)
				}
			})
		}		
		
		// send OK status back to sender
		res.sendStatus(200)		
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/**
 * run: node index.js to test
 * if nodemon is installed run npx nodemon index.js (restart app after every change to file - nice)
 */