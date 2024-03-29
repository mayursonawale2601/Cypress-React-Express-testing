const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


const users = [];

app.post('/form', (req, res) => {
  const { fname, lname, email, phone } = req.body;

  users.push({ fname, lname, email, phone });

  res.status(200).send({message:"Form Submitted Successfully!"});
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});