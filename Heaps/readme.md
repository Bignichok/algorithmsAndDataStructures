##Binary Heap
- Very similar to a binary search tree, but with some different rules
    1. In a MaxBinaryHeap, parent nodes are always larger than child nodes.
    2. In a MinBinaryHeap, parent nodes are always smaller than child nodes.
- Each parent has at most two child nodes
- A binary heap is as compact as possible. All the children of each node are as
  full as they can be and left children are filled out first.


### MaxBinaryHeap
- The value of each parent node is always greater than it child nodes
- In a max Binary heap the parent is greater than the children, but there are no
  guarantees between sibling nodes.
-For any child node at index - n, its parent is at index Math.floor((n-1)/2)
-For any parent node at index - n, its child is at index (2n+1) for the left and (2n+2) for the right

### MinBinaryHeap
- The value of each parent node is always smaller than it child nodes
- In a min Binary heap the parent is smaller than the children, but there are no
  guarantees between sibling nodes.

### Use cases 
- Binary Heaps are used to implement Priority Queues, which are very commonly used data structures.
- used with graph traversal algorithms