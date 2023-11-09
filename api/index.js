require('dotenv').config();
const express = require('express');
const cors = require('cors');
const AssistantService = require('./services/assistantService');


const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.port;

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/assistant', async (req, res) => {
  console.log(req.body);
  const question = req.body.question;
  const response = await AssistantService.getResponse(question);
  res.json({ answer: response });
});
