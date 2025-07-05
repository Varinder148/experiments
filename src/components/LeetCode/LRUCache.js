class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  toString() {
    return `{${this.key} ${this.value}}`;
  }
}

class LRUCache {
  map = {};
  totalNodesInList = 0;
  head = null;
  end = null;

  constructor(capacity) {
    this.capacity = capacity;
  }

  #moveToFirstPosition(node) {
    if (this.end === node && this.end.prev) {
      this.end = node.prev;
    }
    if (this.head === node) {
      return;
    }

    if (node?.next && node.prev) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    } else if (node.prev) {
      node.prev.next = null;
    } else if (node.next) {
      node.next.prev = null;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.head.prev = null;
  }

  #removeLastNode() {
    let key = this.end.key;
    delete this.map[key];

    let secondLast = this.end.prev ?? this.end;
    this.end = secondLast;
    if (secondLast.next) {
      secondLast.next.prev = null;
    }
    secondLast.next = null;
  }

  put(...args) {
    const [key, value] = args;
    if (!this.map[key]) {
      this.map[key] = new ListNode(key, value);

      this.totalNodesInList++;
    } else {
      this.map[key].value = value;
      //   this.map[key].key = key;
    }
    if (!this.head) {
      this.head = this.map[key];
      this.end = this.map[key];
    }

    if (!this.head) {
      this.head = this.map[key];
      this.end = this.map[key];
    } else {
      this.#moveToFirstPosition(this.map[key]);
    }
    if (this.totalNodesInList > this.capacity) {
      //remove the lastNode
      this.#removeLastNode();

      this.totalNodesInList--;
    }
  }

  get(key) {
    if (this.map[key]) {
      //move it to first place;
      this.#moveToFirstPosition(this.map[key]);
      return this.map[key].value;
    }
    return -1;
  }
}

// let lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1); // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2); // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1); // return -1 (not found)
// lRUCache.get(3); // return 3
// lRUCache.get(4); // return 4

// let lRUCache = new LRUCache(2);
// lRUCache.put(2, 1);
// lRUCache.put(2, 2);
// lRUCache.get(2); // should return 2
// lRUCache.put(1, 1);
// lRUCache.put(4, 1);
// lRUCache.get(2);

// let lRUCache = new LRUCache(2);
// lRUCache.put(2, 1);
// lRUCache.put(1, 1);
// lRUCache.put(2, 3);
// lRUCache.put(4, 1);
// lRUCache.get(1); // should return -1 (not found)
// lRUCache.get(2); // should return 3

let lRUCache = new LRUCache(2);
lRUCache.put(2, 1);
lRUCache.put(3, 2);
lRUCache.get(3); // should return 2
lRUCache.get(2); // should return 1
lRUCache.put(4, 3);
lRUCache.get(2); // should return 1
lRUCache.get(3); // should return -1 (not found)
lRUCache.get(4); // should return 3
