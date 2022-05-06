//we can create stack with array but it is not good because of bigO complexity of adding or removing from the beginning of array
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        const newNode = new Node(value)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next =  this.first;
            this.first = newNode;
        }
        this.size++
        return this;
    }

    pop(){
        if(!this.first) return null;
        const poppedNode = this.first
        this.first = this.first.next;
        this.size--
        if(this.size === 1) this.last = null;
        return poppedNode;
    }

    print(){
        let arr = [];
        let current = this.first;
        while(current){
            current = current.next;
            arr.push(current)
        }
        console.log(arr);
    }
}
