const cors=require('cors');
const express=require('express');

const apiRouter=require('./components/router');
const {logError, notFoundHandler} = require('./utils/middlewares/errorHandler');


const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE',
  );
  return next();
});

app.use('/api', apiRouter);

app.use('/healthcheck', (req, res) => res.sendStatus(200));
app.use('*', (req, res) => res.sendStatus(404));

app.use(logError);

process.on('uncaughtException', (reason) => {
  console.error('uncaughtException: ', reason);
});

process.on('unhandledRejection', (reason, p) => {
  console.error('unhandledRejection: ', reason, ', ', p);
});

module.exports = app
