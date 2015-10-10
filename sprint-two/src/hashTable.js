var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var alreadyInsert = false;

  if (!this._storage[i]) {
   this._storage[i] = [];
  }
  
  for (var j = 0; j < this._storage[i].length; j++) {
    if (k === this._storage[i][j][0]) {
      this._storage[i][j][1] = v;
      alreadyInsert = true;
    }
  }

  if (!alreadyInsert) {
    this._storage[i].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  if (!this._storage[i]) {
    return this._storage[i];
  }

  /// iterate over the bucket array
  for (var j = 0; j < this._storage[i].length; j++) {
    // check if 0 index of each tuple === k
    if (this._storage[i][j]) {
      if (k === this._storage[i][j][0]) {
        return this._storage[i][j][1];
      }
    }  
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  for (var j = 0; j < this._storage[i].length; j++) {
    if (k === this._storage[i][j][0]){
      this._storage[i][j] = null;
    }
  
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

   Amortized O(1) for all functions;
 */