var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.lastIndex = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function(value) {
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
};

queueMethods.dequeue = function() {
  var copy = this.storage[this.lastIndex - this.size()];
  delete this.storage[this.lastIndex - this.size()];
  return copy;
};