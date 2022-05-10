class MaxBinaryHeap {
    constructor(values = []) {
        this.values = values
    }
    swap(idx1, idx2) {
        [this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]]
    }

    insert(value) {
        this.values.push(value)
        let index = this.values.length - 1;
        let element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.swap(index, parentIndex)
            index = parentIndex;
        }

        return this;
    }

    sinkDown(){
        let index = 0;
        while(true){
            const leftChildIdx = 2 * index + 1;
            const rightChildIdx = 2 * index + 2;
            const element = this.values[index]
            const leftChild = this.values[leftChildIdx]
            const rightChild = this.values[rightChildIdx]
            let swappedIndex = null;
            if (leftChild > element && rightChild > element) {
                if (leftChild > rightChild) {
                    swappedIndex = leftChildIdx
                } else {
                    swappedIndex = rightChildIdx
                }
            } else if (leftChild > element) {
                swappedIndex = leftChildIdx
            } else if (rightChild > element) {
                swappedIndex = rightChildIdx
            }
            if(swappedIndex === null) break;
            this.swap(swappedIndex,index)
            index = swappedIndex;
        }
    }

    extractMax() {
        if(this.values.length === 1) return  this.values.pop();
        this.swap(0, this.values.length - 1);
        const oldRoot = this.values.pop();
        this.sinkDown();
        return oldRoot;
    }
}

