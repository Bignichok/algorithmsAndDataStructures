//use Binary heap to implement PriorityQueue (MinBinaryHeap)

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(values = []) {
        this.values = values
    }

    swap(idx1, idx2) {
        [this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]]
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swappedIndex = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swappedIndex = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swappedIndex === null && rightChild.priority < element.priority) ||
                    (swappedIndex !== null && rightChild.priority < leftChild.priority)
                ) {
                    swappedIndex = rightChildIdx;
                }
            }
            if (swappedIndex === null) break;
            this.swap(swappedIndex, index)
            index = swappedIndex;
        }
    }

    enqueue(value,priority) {
        const newNode = new Node(value, priority)
        this.values.push(newNode)
        let index = this.values.length - 1;
        let elementPriority = this.values[index].priority;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parentPriority = this.values[parentIndex].priority;
            if (elementPriority >= parentPriority) break;
            this.swap(index, parentIndex)
            index = parentIndex;
        }

        return this;
    }

    dequeue() {
        if (this.values.length === 1) return this.values.pop();
        this.swap(0, this.values.length - 1);
        const oldRoot = this.values.pop();
        this.sinkDown();
        return oldRoot;
    }
}

const priorityQueue = new PriorityQueue()

// const nodes = [
//     ['common cold',4],
//     ['gunshot wound',1],
//     ['high fever',2],
//     ['broken arm',2],
//     ['glass in foot',3],
// ];
// nodes.forEach(node => priorityQueue.enqueue(node[0],node[1]))
// console.log(priorityQueue)

// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())

module.exports = priorityQueue;