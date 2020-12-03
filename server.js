const app = require('express');
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const db = require('./models');
const routes = require('./routes');
const express = require('express'); 


//middleware
Middleware
app.use(bodyParser.json());
 

app.use('/', routes.views); //any request made will have to filter through this. 


app.use('/api/v1', routes.api);


app.use('/api/*', (req, res) => {
  res.status(404).json({status: 404, error: 'Sorry, resource not found! '})
});


app.use('*', (req, res) => {
  res.send('<h2>Error 404: Not Found</h2>');
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
