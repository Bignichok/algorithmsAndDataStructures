##Traversing a TREE
- Breadth-first Search
- Depth-first Search

###Breadth-first Search - preOrder
Steps - Iteratively
- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
    1. Dequeue a node from the queue and push the value of the node into
    the variable that stores the nodes
    2. If there is a left property on the node dequeued - add it to the queue
    3. If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values

###Depth-First Search - preOrder
Steps - recursively
- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
    1. push the value of the node to the variable that stores the values
    2. If the node has a left property, call the helper function with the left property of the node
    3. If the node has a right property, call the helper function with the right property of the node
- Invoke the helper function with the current variable
- Return the array of values 

###Depth-First Search - postOrder
Steps - recursively
- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
    1. If the node has a left property, call the helper function with the left property of the node
    2. If the node has a right property, call the helper function with the right property of the node
    3. push the value of the node to the variable that stores the values
- Invoke the helper function with the current variable
- Return the array of values 

###Depth-First Search - inOrder
Steps - recursively
- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
    1. If the node has a left property, call the helper function with the left property of the node
    2. push the value of the node to the variable that stores the values
    3. If the node has a right property, call the helper function with the right property of the node
- Invoke the helper function with the current variable
- Return the array of values 