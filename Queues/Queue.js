//we can create queue with an array (push + shift || unshift + pop) but we have a bad bigO complexity

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.size) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++
        return this
    }
    dequeue() {
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

module.exports = new Queue();