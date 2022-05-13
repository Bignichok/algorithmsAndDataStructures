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
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            this.adjacencyList[vertex].forEach((item)=>{
                this.removeEdge(vertex, item)
            })
            delete this.adjacencyList[vertex]
        }
        return this;
    }
    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
        return this
    }
    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((item) => item !== vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((item) => item !== vertex1)
        }
        return this
    }
}

const graph = new Graph();

graph.addVertex('Tokyo')
graph.addVertex('New York')
graph.addVertex('Dallas')
console.log(graph)

graph.addEdge('Tokyo', 'New York')
graph.addEdge('Tokyo', 'Dallas')
console.log(graph)

graph.removeVertex('Dallas')
console.log(graph)