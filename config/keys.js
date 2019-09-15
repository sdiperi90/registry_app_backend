console.log('environment', process.env.NODE_ENV)
if (process.env.NODE_ENV != 'production') {
    module.exports = require('./development_keys');
} else {
    module.exports = require('./production_keys');

}



