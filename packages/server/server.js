const express = require('express');
const expressGQL = require('express-graphql');
const cors = require('cors');
const bodyParser = require('body-parser');

const schema = require('./schema');
const restify = require('./rest');

const PORT = process.env.PORT || 4000;
const DEV = process.env.NODE_ENV !== 'production';

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(
  '/graphql',
  expressGQL({
    schema,
    graphiql: DEV,
  }),
);

restify(app);

app.listen(PORT, () => {
  console.log('Server is running on port :', PORT);
});
