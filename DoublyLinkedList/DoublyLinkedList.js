class Node {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return null;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.length) return null;
        let shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }

        this.length--;
        return shiftedNode;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = null;
        let count = null;
        if (index <= this.length / 2) {
            current = this.head;
            count = 0;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            current = this.tail;
            count = this.length - 1;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, value) {
        let node = this.get(index);
        if (!node) return false;
        node.value = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return null;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);
        let newNode = new Node(value);
        let prevNode = this.get(index - 1);
        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.next = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current.next) {
            arr.push({
                prev: current.prev && current.prev.value,
                current: current.value,
                next: current.next && current.next.value,
            });
            current = current.next;
        }
        console.log(arr);
    }
}

const doublyLinkedList = new DoublyLinkedList();
