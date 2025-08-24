class Node {
  constructor(val, stringEnd = false) {
    this.val = val;
    this.stringEnd = stringEnd;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node(-1);
  }

  insert(word) {
    const wordArr = word.split("");

    let currNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!currNode.children[wordArr[i]]) {
        currNode.children[wordArr[i]] = new Node(wordArr[i]);
      }
      currNode = currNode.children[wordArr[i]];
    }
    currNode.stringEnd = true;
  }

  startsWith(word) {
    const wordArr = word.split("");

    let currNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!currNode.children[wordArr[i]]) {
        return false;
      }
      currNode = currNode.children[wordArr[i]];
    }
    return true;
  }

  search(word) {
    const wordArr = word.split("");
    let currNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!currNode.children[wordArr[i]]) {
        return false;
      }

      currNode = currNode.children[wordArr[i]];
    }
    return currNode.stringEnd;
  }
}

const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true

trie.insert("app");
console.log(trie.search("app")); // true
