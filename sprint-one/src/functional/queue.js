var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var lastIndex = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    //index by lastIndex
    storage[lastIndex] = value;
    lastIndex++;
  };

  someInstance.dequeue = function(){
    //index by lastIndex-size
    var copy = storage[lastIndex - someInstance.size()];
    delete storage[lastIndex - someInstance.size()];
    return copy;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
