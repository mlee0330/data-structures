 var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tupleCount = 0;
};

HashTable.prototype.insert = function(k, v){
  // get the index for 'k'
  var i = getIndexBelowMaxForKey(k, this._limit);
  var found = false;
  // retrieve bucket
  var bucket = this._storage.get(i);

  // if !bucket, create it
  if (!bucket) {
   bucket = [];
   this._storage.set(i, bucket);
  }
  
  // iterate over bucket
  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    // check if key exists in bucket
    if (k === tuple[0]) {
      // overwrite value
      tuple[1] = v;
      found = true;
      break;
    }
  }
  
  // if key was not found in the bucket
  if (!found) {
    // add tuple to bucket
    bucket.push([k, v]);
    this._tupleCount++;
    // resize if tupleCount is greater than 0.75 of limit
    if(this._tupleCount >= 0.75* this._limit) {
      this.resize(this._limit*2);
    }
  }

};

HashTable.prototype.retrieve = function(k){
  // get the index for 'k'
  var i = getIndexBelowMaxForKey(k, this._limit);
  // retrieve bucket
  var bucket = this._storage.get(i);
  // if !bucket, return null;
  if (!bucket) {
    return null;
  }

  /// iterate over the bucket array
  for (var j = 0; j < bucket.length; j++) {
    // check if 0 index of each tuple === k
    var tuple = bucket[j];
    if (tuple) {
      // check if key exists in bucket
      if (k === tuple[0]) {
        return tuple[1];
      }
    }  
  }

  return null;
};

HashTable.prototype.remove = function(k){
  // get the index for 'k'
  var i = getIndexBelowMaxForKey(k, this._limit);
  // retrieve bucket
  var bucket = this._storage.get(i);
  // iterate over bucket
  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    // check if key exists in bucket
    if (k === tuple[0]){
      bucket.splice(j,1);
      this._tupleCount--;
    // resize if tuple count is less than 0.25 of limit
    if(this._tupleCount <= 0.25* this._limit) {
      this.resize(this._limit/2);
    }
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.resize = function(limit){
  var tableCopy = this._storage;
  this._limit = limit;
  this._storage = LimitedArray(this._limit);

  //loop over tableCopy
  this._storage.each(function(bucket) {
    for(var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};

/*
 * Complexity: What is the time complexity of the above functions?

   Amortized O(1) for all functions;
 */