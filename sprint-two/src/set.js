var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // check if this._storage is undefined
  if(!this._storage) {
    this._storage = {};  
  }

  // add the item as a property to  the object with item as the key and value
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  return (item in this._storage);
};

setPrototype.remove = function(item){
  //delete item from storage
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
  
    All three methods are O(1);

 */
