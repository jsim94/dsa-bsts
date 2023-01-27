class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currNode = this.root;

    while (currNode) {
      if (val > currNode.val) {
        if (currNode.right) {
          currNode = currNode.right;
        } else {
          currNode.right = newNode;
          currNode = null;
        }
      } else if (val < currNode.val) {
        if (currNode.left) currNode = currNode.left;
        else {
          currNode.left = newNode;
          currNode = null;
        }
      }
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    const insertHelper = (currNode = this.root) => {
      if (val > currNode.val) {
        if (currNode.right) return insertHelper(currNode.right);
        else currNode.right = newNode;
      }
      if (val < currNode.val) {
        if (currNode.left) return insertHelper(currNode.left);
        else currNode.left = newNode;
      }
    };

    insertHelper();
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;

    let currNode = this.root;

    while (currNode)
      if (currNode.val > val) currNode = currNode.left;
      else if (currNode.val < val) currNode = currNode.right;
      else if (currNode.val === val) return currNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return undefined;
    debugger;

    const findHelper = (val, currNode = this.root) => {
      if (!currNode) return undefined;
      if (currNode.val > val) return findHelper(val, currNode.left);
      else if (currNode.val < val)
        return findHelper(val, currNode.right);
      else if (currNode.val === val) return currNode;
    };

    return findHelper(val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const arr = [];
    if (!this.root) return arr;

    const traverse = (node, callback) => {
      callback(node.val);
      if (node.left) traverse(node.left, callback);
      if (node.right) traverse(node.right, callback);
    };

    traverse(this.root, (val) => arr.push(val));
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const arr = [];
    if (!this.root) return arr;

    const traverse = (node, callback) => {
      if (node.left) traverse(node.left, callback);
      callback(node.val);
      if (node.right) traverse(node.right, callback);
    };

    traverse(this.root, (val) => arr.push(val));
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const arr = [];
    if (!this.root) return arr;

    const traverse = (node, callback) => {
      if (node.left) traverse(node.left, callback);
      if (node.right) traverse(node.right, callback);
      callback(node.val);
    };

    traverse(this.root, (val) => arr.push(val));
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const arr = [];
    if (!this.root) return arr;

    let queue = [this.root];

    while (queue.length) {
      let current = queue.shift();

      arr.push(current.val);

      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
