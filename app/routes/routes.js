const routesBase = require('../routes/base-routes');
const routesBook = require('../routes/book-routes');

module.exports = (app) => {
    routesBase(app);
    routesBook(app);             
};