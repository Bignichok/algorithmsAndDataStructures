const binarySearchTree = require('../BinarySearchTree/BinarySearchTree');

//root
binarySearchTree.insert(10)
//left
binarySearchTree.insert(6)
binarySearchTree.insert(5)
binarySearchTree.insert(7)
//right
binarySearchTree.insert(16)
binarySearchTree.insert(15)
binarySearchTree.insert(17)

//BFS
const breadthFirstTraversing = (tree) => {
    if(!tree.root) return null;
    let result = [];
    let queue = [];
    let node = tree.node;
    
    queue.push(tree.root)
    while(queue.length){
        node = queue.shift()
        result.push(node.value)
        if(node.left){
            queue.push(node.left)  
        } 
        if(node.right){
            queue.push(node.right)
        } 
    }

    return result;
}

console.log(breadthFirstTraversing(binarySearchTree))
//         TREE
//          10
//      6       16
//   5    7  15    17
//   AFTER BFS traversing
//[10,6,16,5,7,15,17]