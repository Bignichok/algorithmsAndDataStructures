

class HashTable {
    constructor(size = 21) {
        this.keyMap = new Array(size);
    }

    _hash = (key) => {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const index = this._hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        };

        this.keyMap[index].push([key, value])

        return this;
    }
    get(key) {
        const index = this._hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i]
                }
            }
        }
        return undefined;
    }

    keys() {
        return this.keyMap.reduce((acc, item) => {
            item && item.forEach(i => {
                acc.push(i[0])
            })
            return acc
        }, [])
    }

    values() {
        return this.keyMap.reduce((acc, item) => {
            item && item.forEach(i => {
                acc.push(i[1])
            })
            return acc
        }, [])
    }
};

const hashTable = new HashTable(5);
hashTable.set('black', '#000')
hashTable.set('red', '#ff0000')
hashTable.set('green', '#00ff00')
hashTable.set('blue', '#0000ff')
console.log(hashTable.keys())
console.log(hashTable.values())