

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this[node] = {};
  this[node].value = node;
};


// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  if(this[node]) {
    return true;
  }
  
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this[fromNode].edge) {
    for(var i = 0; i < this[fromNode].edge.length; i++) {
      if( this[fromNode].edge[i] === toNode) {
        return true;
      }
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  if(!this[fromNode].edge) {
    this[fromNode].edge = [];
  }
  if(!this[toNode].edge) {
    this[toNode].edge = [];
  }  

  this[fromNode].edge.push(toNode);
  this[toNode].edge.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  //iterate through fromNode
  for(var i = 0; i < this[fromNode].edge.length; i++) {
    //if edge name matches toNode, remove toNode from array
    if( this[fromNode].edge[i] === toNode) {
      this[fromNode].edge.splice(i, 1);
    }
    if( this[toNode].edge[i] === fromNode) {
      this[toNode].edge.splice(i, 1);
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  //traverse each key in 'this'
  for ( var key in this ) {
    //execute callback with each value per key
    if (this.hasOwnProperty(key)) {
      cb( this[key].value );
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    
    .addNode is O(1);
    .contains is O(1);
    .removeNode is O(1);
    .hasEdge is O(n);
    .addEdge is O(1);
    .removeEdge is O(n^2);
    .forEachNode is O(n);

 */



