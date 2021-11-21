// starter code for MVC homework
const path = require('path');

require('dotenv').config();

const express = require('express');
const routes = require('./controllers/');
// sql 
const sequelize = require('./config/connection');
// handlebars for front-end
const exphbs = require('express-handlebars')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

// initialize handlebars for the html templates
const hbs = exphbs.create({ helpers });
const sess = {
    secret: process.env.DB_SESSION_SECRET,
    cookie: { maxAge: 720000 },
    resave: false,
    saveUninitialized: ,
    store: new SequelizeStore({
      db: sequelize
    })
  };
const app = express();
const PORT = process.env.PORT || 3001;

// server => public directoryy
app.use(express.static(path.join(__dirname, 'public')));

// handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// string data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
app.use(routes);

// console.log 'now listening'
sequelize.sync({ force: false }).then(() => {
    app..listen(PORT, () => console.log('Now listening'));
  });
  // end of code
