const express = require('express');

const indexRouter = require('./routes/index');

const app = express();

// ADD CORS
let cors = require('cors');
app.use(cors());

// db connection
const db = require('./helpers/db-connect')();

// middleware
const verifyToken = require('./middleware/verify-token');

app.use('/', indexRouter);
app.use('/api', verifyToken);

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
    res.json({ error : { message : err.message, code : err.code } });

});

module.exports = app;