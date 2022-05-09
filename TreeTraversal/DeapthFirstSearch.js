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


//DFS preOrder
const DFSPreOrder = (tree) => {
    let result = [];
    const helper = (node) => {
        result.push(node.value)
        if (node.left) helper(node.left)
        if (node.right) helper(node.right)
    }
    helper(tree.root)
    return result;
}

//DFS postOrder
const DFSPostOrder = (tree) => {
    let result = [];
    const helper = (node) => {
        if (node.left) helper(node.left)
        if (node.right) helper(node.right)
        result.push(node.value)
    }
    helper(tree.root)
    return result;
}

//DFS inOrder
const DFSInOrder = (tree) => {
    let result = [];
    const helper = (node) => {
        if (node.left) helper(node.left)
        result.push(node.value)
        if (node.right) helper(node.right)
    }
    helper(tree.root)
    return result;
}

//         TREE
//          10
//      6       16
//   5    7  15    17
console.log(DFSPreOrder(binarySearchTree))
//   AFTER DFSPreOrder traversing
//[10,6,5,7,16,15,17]
console.log(DFSPostOrder(binarySearchTree))
//   AFTER DFSPostOrder traversing
//[5,7,6,15,17,16,10]
console.log(DFSInOrder(binarySearchTree))
//   AFTER DFSInOrder traversing
//[5,6,7,10,15,16,17]