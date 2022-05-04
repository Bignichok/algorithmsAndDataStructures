class Node {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;     
        }

        this.length++
        return this;
    }

    pop(){
        if(!this.length) return null
        let poppedNode = this.tail
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null
            poppedNode.prev = null;
        }
        
        this.length--
        return poppedNode;
    }
}

const doublyLinkedList = new DoublyLinkedList();

console.log(doublyLinkedList.push('FIRST ITEM'))
console.log(doublyLinkedList.push(2))
console.log(doublyLinkedList.push(3))
console.log(doublyLinkedList.push("LAST ITEM"))
console.log('----------------')
console.log(doublyLinkedList.pop(),'POP')
console.log(doublyLinkedList.pop(),'POP')