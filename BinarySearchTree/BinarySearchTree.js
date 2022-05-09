class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) {
                current.count++;
                return this;
            }
            if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            } else {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            }
        }
    }

    find(value) {
        if (!this.root) {
            return false;
        }

        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return false;
        return current;
    }
}

module.exports =  new BinarySearchTree();