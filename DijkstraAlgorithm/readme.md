## Dijkstra Algorithm
- Finds the shortest path between two vertices on a graph

###The approach
- every time we look to visit a new node, we pick the node with
the smallest know distance to visit first.
- Once we have moved to the node we are going to visit,
we look at each of its neighbors
- For each neighboring node, we calculate the distance by summing
the total edges that lead to the node we are checking from
the starting node.
- If the new total distance to a node is less than the previous total,
we store the new shorter distance for that node.

###Pseudo code
-this function should accept a starting and ending vertex
-create an object (we will call it distances) and set each key to be every vertex in the
adjacency list with a value of infinity, except for the starting vertex which should
have a value of 0
- after setting a value in the distances object, add each vertex with a priority of Infinity
to the priority queue, except the starting vertex, which should have a priority of 0 because
that is where we begin.
-Create another object called previous and set each key to be every vertex in the adjacency
list with a value of null
-Start looping as long as there is anything in the priority queue
    1.Dequeue a vertex from the priority queue
    2. If that vertex is the same as the ending vertex - we are done!
    3. Otherwise loop through each value in the adjacency list at that vertex
        3.1 Calculate the distance to that vertex from the starting vertex
        3.2 If the distance is less than what is currently stored in our distances object
            3.2.1 update the distances object with new lower distance
            3.2.2 update the previous object to contain that vertex
            3.2.3 enqueue the vertex with the total distance from the start node

###Use cases
-GPS - finding fastest route
-Network Routing - finds open shortest path for data
-Biology - used to model the spread of viruses among humans
-Airline tickets - finding cheapest route to your destination
-Biology - used to model the spread of viruses among humans