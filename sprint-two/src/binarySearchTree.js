var BinarySearchTree = function(value){
  var treeNode = Object.create(BinarySearchTree.prototype);
  treeNode.value = value;
  treeNode.left = null;
  treeNode.right = null;
  return treeNode;
};

//implement insert
BinarySearchTree.prototype.insert = function(value) {
// create an instance of BinarySearchTree
  var childNode = BinarySearchTree(value);
    
  if (childNode.value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = childNode;
    }
  } else if (childNode.value < this.value) {
        if (this.left) {
      this.left.insert(value);
    } else {
      this.left = childNode;
    }
  } 
};


//implement contains
BinarySearchTree.prototype.contains = function(value) {
  var ifFound = false;

  if (this.value === value) {
    ifFound = true;
    return ifFound;
  } else {
    if (this.right) {
      ifFound = this.right.contains(value);
      if (ifFound) {
        return ifFound;
      }
    }
    if (this.left) {
      ifFound = this.left.contains(value);
      if (ifFound) {
        return ifFound;
      }
    }
  }

  return ifFound;
};

//implement depthFirstLog
BinarySearchTree.prototype.depthFirstLog = function(callback) {
  //call .depthFirstLog(callback) on this.value
  callback(this.value);
  //check if .right exists
  if(this.right) {
    this.right.depthFirstLog(callback);
  }

  if(this.left) {
    this.left.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
   .insert and .contains are O(log(n)
   .depthFirstLog is O(n)

 */