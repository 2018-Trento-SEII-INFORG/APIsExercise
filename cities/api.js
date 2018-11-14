
const fetch = require("node-fetch");
const express = require('express')
var bodyParser = require('body-parser')

const app = express()
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000

const MAPQUEST_KEY = process.env.MAPQUEST_KEY || 'QfaOpqqv7GuiJ2FcsTzxGeG03VCOnuTF'

const MAPQUEST_URL = 'http://www.mapquestapi.com/geocoding/v1/address?key=' + MAPQUEST_KEY + '&location='//Washington,DC
const SUN_URI = 'https://api.sunrise-sunset.org/json'
var cities_supported= [] //{name: 21, state: 'HCI'},






app.get('/', (req, res) => res.send('Hello World!'))

app.get('/cities/:id', async (req, res) => {

    const index = courses_offered.findIndex((item) => {return item.id===req.params.id})
    if (index===-1) {
        res.sendstatus(404)
        return
    }

})

app.get('/cities', async (req, res) => {

    try {

        res.status(200)
        res.send(sun_results)
    } catch (error) {
        console.log('\n\nerror', error)
        res.sendstatus(500)

    }
})




app.post('/cities', (req, res) => {
    // there are a million checks we should do here, but let's assume all works fine
    const city_name = req.body.name
    const city_state = req.body.state

    const city_id = city_name.replace(/\s/g, '')+'---'+city_state
    const city =  {id:city_id, name:city_name, state: city_state}
    cities_supported.push(city)

    res.status(201)
    res.json(city)
    console.log(cities_supported)
})



app.listen(PORT, () => console.log('Example app listening on port '+ PORT))





