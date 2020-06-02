import express from 'express';

const app = express();

app.get('/users', (request, response) => {

  response.json([
    'Antônio',
    'Francisco'
  ]);
  
});

app.listen(3333);