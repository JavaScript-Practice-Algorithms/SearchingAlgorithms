

var Tree = function(value){
  this.value = value;
  this.children = [];
};


Tree.prototype.depthFirstSearch = function(filter){
  //We create our results array
  var result = [];
  //Next we create our inner recursive function
  var subroutine = function(node, depth){
    //we see if the filter function returns a truthy value
    if(filter(node.value, depth)){
      //if it does we add it to our array
      result.push(node.value);
    }
    //then we check to see if it has any children
    if(node.children.length > 0){
      //if it does we recursively call our inner function with the child node and our depth increased by one
      for(var i = 0; i < node.children.length; i++){
        subroutine(node.children[i], depth + 1);
      }
    }
  };
  //we make sure to call the inner function to kick off the process
  subroutine(this, 0);
  //and then we return the result
  return result;
};

//Don't worry about anything below here

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

 