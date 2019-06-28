const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const keys = require('./config/keys');
var cors = require("cors");
const mongoose = require('mongoose');
const User = require('./models/User');
const withAuth = require('./middleware');


// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));


  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());

  // Set up a whitelist and check against it:
  var whitelist = ['http://plantdat.com', 'http://plantdat2.com']
  var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
  // for production, specify whitelisted domains for CORS
  // https://daveceddia.com/access-control-allow-origin-cors-errors-in-react-express/
  // app.use(cors(corsOptions));
  app.use(cors());

  mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, function(err) {
    if (err) {
      throw err;
    } else {
      console.log(`Successfully connected to ${keys.mongoURI}`);
    }
  });


  app.get('/checkToken', withAuth, function(req, res) {
    res.sendStatus(200);
  });

  var apiRouter = require('./api');
  app.use('/api', apiRouter);


  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
}
