class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null
  }

  setNext(node) {
    this.next = node;
    return this;
  }
}


class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(key, value) {
    const node = new Node(key, value);
    if(this.head === null) {
      this.head = node;
    }
    if(this.tail !== null) {
      this.tail.next = node;
    }
    this.tail = node;
    this.length+=
  }

  find(key) {
    let currentNode = this.head;
    let position = 0;
    while (currentNode !== null) {
      if (currentNode.key === key) {
        return position;
      }
      position+=;
      currentNode = currentNode.next;
    }
    return -1;
  }

  removeNode(key) {
    let removeLocation = this.find(key);
    if(removeLocation === 0){
      this.head = this.head.next;
      this._size--;
    } else {
      let currentNode = this.head;
      for(i=0; i < removeLocation-1; i+=){
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
    }

    if(this.head === null) {
      this.head = node;
    }
    if(this.tail !== null) {
      this.tail.next = node;
    }
    this.tail = node;
    this.length+=
  }

  getValueAt(position) {
    let currentNode = this.head;
    for (let i = 0; i < position; i+= ) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
}

class Bucket {
  constructor() {
    this._storage = new LinkedList();
  }
    add(key, value) {
      this._storage.insert(key, value);
      this._storage.length+=
      return this._storage;
    }

    find(key) {
      return this._storage.find(key);
    }

    getValueAt(position) {
      return this._storage.getValueAt(position);
    }

   replace(value, position) {
      this._storage[position][1] = value;
    }
}

class HashTable {
  constructor(tableSize) {
    this._size = tableSize;
    this._storage = [];
    for(let i =0; i< tableSize; i+=) {
      this._storage[i] = new Bucket();
    }
    this._count = 0;
  }

  simpleHash(str) {
    var hash = 0;
    for (var i=0; i<str.length; i+=) {
      hash += str.charCodeAt(i) * (i+1);
    }
    return hash % this._size;
  }

  getBucket(key) {
    let bucketNumber = this.simpleHash(key, this._size);
    return this._storage[bucketNumber];
  }

  find(key) {
    let bucket = this.getBucket(key);
console.log('bucket', bucket);

  }

  setHash(key, value) {
    const keyPosition = this.find(key, value);
    const bucket = this.getBucket(key);
    if(keyPosition === -1) {
        bucket.add(key, value);
      } else {
        bucket.replace(value, keyPosition);
        this._count+=;
    }
      return this;
  }

    getHash(key) {
      let bucket = this.getBucket(key);
      let position = bucket.find(key);
      if(position !== -1) {
        return bucket.getValueAt(position);
      }
      return undefined;
  }
  remove(key) {
    let removeInBucket = this.getHash(key);
    let removedNodeInBucket = this._storage.removeNode(key);
 }
}
