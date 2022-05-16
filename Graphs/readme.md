##Graphs
- Graph - is a data structure consists of a finite (and possibly mutable)
  set of vertices or nodes or points, together with a set of unordered pairs
  of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

  ###Graph terms
  -Vertex - a node
  -Edge - connection between nodes
  -Weighted/Unweighted - values assigned to distances between vertices
  -Directed/Undirected - directions assigned to distanced between vertices

  ### use cases
  - social networks
  - location / mapping
  - routing algorithms
  - visual hierarchy
  - file system optimizations
  - everywhere

  ### Depth first Graph Traversal with recursive
  -The function should accept a starting node
  -Create a list to store the end result, to be returned at the very end
  -Create a helper function which accepts a vertex
    1. The helper function should return early if the vertex is empty
    2. The helper function should place the vertex it accepts into the 
    visited object and push that vertex into the result array
    3. Loop over all of the values in the adjacencyList for that vertex
    4. If any of those values have not been visited, recursively invoke the
    helper function with that vertex