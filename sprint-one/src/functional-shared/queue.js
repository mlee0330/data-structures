var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.lastIndex = 0;

  _.extend(someInstance, queueMethods);

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
  //key for first property is lastIndex - size
  //make copy of first property
  var copy = this.storage[this.lastIndex - this.size()];
  //remove key and value from storage
  delete this.storage[this.lastIndex - this.size()];
  //return value
  return copy;
};