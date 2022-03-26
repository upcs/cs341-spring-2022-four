var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var popRecHikesRouter = require('./public/posting/popRecHikes.js');

var popHikePageRouter = require('./public/posting/popHikePage.js');
var popSearchHikesRouter = require('./public/posting/popSearchHikes.js');
var filterRouter = require('./routes/init/filterPost'); //for filtering
var nameRouter = require('./routes/init/namePost'); //for filtering
var profileRouter = require('./routes/profile_load');
var profileHikeListRouter = require('./routes/profile_hike_list');
var userLoginRouter = require('./routes/user_login');
var userAddRouter = require('./routes/user_add');
var trailsRetrieveRouter = require('./routes/trails_retrieve'); // retrieve the trails from the DB

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/popRecHikes', popRecHikesRouter);
app.use('/popHikePage', popHikePageRouter);
app.use('/popSearchHikes', popSearchHikesRouter);
app.use('/filterPost', filterRouter); //for filtering
app.use('/namePost', nameRouter); //for filtering
app.use('/profile_load', profileRouter);
app.use('/profile_hike_list', profileHikeListRouter)
app.use('/user_login', userLoginRouter);
app.use('/user_add', userAddRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
