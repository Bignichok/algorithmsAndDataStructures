const stack = require('../Stacks/Stack')

class Graph {
    constructor() {
        this.adjacencyList = {}
    };
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
        return this
    }
    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            this.adjacencyList[vertex].forEach((item) => {
                this.removeEdge(vertex, item)
            })
            delete this.adjacencyList[vertex]
        }
        return this;
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
        return this
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((item) => item !== vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((item) => item !== vertex1)
        }
        return this
    }
    depthFirstRecursive(start) {
        //Depth first Graph Traversal with recursive
        const result = [];
        const visitedNodes = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visitedNodes[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbor) => {
                if (!visitedNodes[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start)
        return result
    }

    depthFirstIterative(start) {
        const result = []
        const visitedNodes = {}
        stack.push(start)
        while (stack.size) {
            const vertex = stack.pop().value
            if (!visitedNodes[vertex]) {
                visitedNodes[vertex] = true;
                result.push(vertex);
                this.adjacencyList[vertex].forEach((neighbor) => stack.push(neighbor))
            }
        }
        return result
    }
}

const graph = new Graph();

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

console.log(graph.depthFirstIterative('A'))

//          A       
//       /    \     
//     B       c    
//     |       |    
//     D ----- E    
//      \     /     
//         F        
