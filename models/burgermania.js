// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let burger = {
  all: function(cb) {
    orm.all("burgermania", function(res) {
      cb(res);
    });
  },
  
  create: function(cols, vals, cb) {
    orm.create("burgermania", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgermania", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgermania", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burgermania;