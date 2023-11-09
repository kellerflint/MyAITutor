require('dotenv').config();
const express = require('express');
const AssistantService = require('./services/assistantService');


const app = express();
app.use(express.json())

const port = process.env.port

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.listen(port, () => {
  console.log('Server is running on port 3000');
});

app.post('/assistant', async (req, res) => {
  console.log(req.body)
  const question = req.body.question;
  const response = await AssistantService.getResponse(question);
  res.send(response);
});
