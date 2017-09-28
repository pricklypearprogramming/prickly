// routes/index.js
const noteRoutes = require('./note_routes');

module.exports = function(exp, db) {
  noteRoutes(exp, db);
  // Other route groups could go here, in the future
};
