var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  // your code here
  newTree.children = null;  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var childTree = Tree(value);
  if (!this.children) {
    this.children = [];
  }
  this.children.push(childTree);
};

treeMethods.contains = function(target){
  //start at top node
  var found = false;
  if( this.value === target) {
    found = true;
  } else if (this.children) {
    //recurse through children with contains()
    for( var i = 0; i < this.children.length; i++ ) {
      if(found) {
        break;
      }
      found = this.children[i].contains(target);
    }
  }
  //return false
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?

treeMethods.addChild = O(1);
treeMethods.contains = O(n);


 */

