//Using JavaScript create a method that given a filter function will search a tree using a depth first technique and return an array of the resulting values
//Depth first search is a method to search a tree or graph data structures, it works by searching down each branch before backtracking
//We have created a basic tree data sructure so that you can test our your answer

//Example:
/*var tree = new Tree(1);
  var branch2 = tree.addChild(2);
  var branch3 = tree.addChild(3);
  var leaf4 = branch2.addChild(4);
  var leaf5 = branch2.addChild(5);
  var leaf6 = branch3.addChild(6);
  var leaf7 = branch3.addChild(7);
  tree.DFSelect(function (value, depth) {
   return value % 2;
  })
  // [1, 5, 3, 7]

  tree.DFSelect(function (value, depth) {
   return depth === 1;
  })
  // [2, 3]
*/

var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.depthFirstSearch = function(filter){
  //your code here!
};


//Don't wory about anything below here, just know that it works and does what you think it does.

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return child;
};


Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        return true;
      }
    }
    return false;
  }
};


Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
