
var binarySearch = function(array, target){
  //first we need to set some pointers: left, right, and middle
  var left = 0;
  var right = array.length - 1;
  var middle = Math.floor(array.length / 2);
  //the way this is written we need to check the starting and ending index, otherwise since this is an exclusive search those two indicies won't get checked
  if(array[left] === target || array[right] === target){
    //if one of the above two conditions returns true
    //we use a ternary statement to return the correct index
    return array[left] === target ? left : right;
  }
  //then we enter our loop
  while(left !== right){
    if(array[middle] === target){
      return middle;
    }
    //if the middle index doesn't contain the target
    //we do one of the following
    //moving our pointers and searching again until we hit our 'base case' of the left pointer equalling the right pointer
    if(array[middle] < target){
      left = middle + 1;
      middle = Math.floor((middle + right) / 2);
    }
    if(array[middle] > target){
      right = middle - 1;
      middle = Math.floor(middle / 2);
    }
  }
  //if the above doesn't return the index we return -1
  return -1;
};
