class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return null;
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if (!this.head) return null;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (!this.length) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let currentNode = this.head;
        while (index--) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    set(index, value) {
        let currentNode = this.get(index);
        if (currentNode) {
            currentNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);
        const newNode = new Node(value);
        let prev = this.get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;

        this.length++;
        return true;
    }

    delete(index) {
        if (index < 0 || index > this.length) return null;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        const prev = this.get(index - 1);
        const removedNode = prev.next;
        prev.next = prev.next.next;
        this.length--;
        return removedNode;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }
}

const list = new SinglyLinkedList();
