var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lastIndex = 0;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
 this.storage[this.lastIndex] = value;
 this.lastIndex++;
};

Queue.prototype.dequeue = function() {
  var copy = this.storage[this.lastIndex - this.size()];
  delete this.storage[this.lastIndex - this.size()];
  return copy;
};
 
var someInstance = new Queue();


