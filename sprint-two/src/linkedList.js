var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if (list.tail) {
      list.tail.next = node;
    }
    list.tail = node;

    if (!list.head) {
      list.head = node;
    }
  };

  list.removeHead = function(){
    // set list.head to whatever head is pointing to
    var copy = list.head.value;
    list.head = list.head.next;
    return copy;
  };

  list.contains = function(target){
    // itterate over list
    var node = list.head;
    do {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    } while (node);

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 .addToTail - O(1)
 .removeHead - O(1)
 .contains - O(n)
 */
