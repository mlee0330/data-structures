var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.size = stackMethods.size;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;

  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

stackMethods.push = function(value) {
  this.storage[this.size()] = value;
};

stackMethods.pop = function() {
  //make copy of last object
  var copy = this.storage[this.size() - 1];
  //delete last object
  delete this.storage[this.size() - 1];
  //return copy
  return copy;
};

