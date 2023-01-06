const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const config = require('./config/static')
const webRouter = require('./Router/web')
const { Configuration, OpenAIApi } = require("openai");
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

config(app)
webRouter(app)



// const configuration = new Configuration({
//   apiKey: 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,
// });
// const openai = new OpenAIApi(configuration);

// const completion = await openai.createCompletion({
//   model: "text-davinci-002",
//   prompt: "Hello world",
// });
// console.log(completion.data.choices[0].text);


app.listen(port, ()=>{
    console.log("Connected to server !!!")
})