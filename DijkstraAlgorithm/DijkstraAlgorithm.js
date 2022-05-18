const priorityQueue = require('../Heaps/PriorityQueue/PriorityQueue')

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            this.adjacencyList[vertex].forEach((item) => {
                this.removeEdge(vertex, item.node)
            })
            delete this.adjacencyList[vertex]
        }
        return this;
    }
    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({ node: vertex2, weight })
            this.adjacencyList[vertex2].push({ node: vertex1, weight })
        }
        return this
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex2]
                .filter(({ node }) => node !== vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex1]
                .filter(({ node }) => node !== vertex1)
        }
        return this
    }
    dijkstraAlgorithm(startVertex, endVertex) {
        const distances = {};
        const previous = {};
        let path = []; // to return 
        let smallest;
        //build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === startVertex) {
                distances[vertex] = 0;
                priorityQueue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                priorityQueue.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }

        //as long as there is something to visit
        while (priorityQueue.values.length) {
            smallest = priorityQueue.dequeue().value;
            if (smallest === endVertex) {
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest]
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        priorityQueue.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

const weightedGraph = new WeightedGraph();

weightedGraph.addVertex('A');
weightedGraph.addVertex('B');
weightedGraph.addVertex('C')
weightedGraph.addVertex('D')
weightedGraph.addVertex('E')
weightedGraph.addVertex('F')
weightedGraph.addEdge('A', 'B', 4)
weightedGraph.addEdge('A', 'C', 2)
weightedGraph.addEdge('B', 'E', 3)
weightedGraph.addEdge('C', 'D', 2)
weightedGraph.addEdge('C', 'F', 4)
weightedGraph.addEdge('D', 'E', 3)
weightedGraph.addEdge('D', 'F', 1)
weightedGraph.addEdge('F', 'E', 1)
console.log(weightedGraph.dijkstraAlgorithm("A", "E"))
