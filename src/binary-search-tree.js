const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
    class TreeNode {
      constructor(data){
    this.left = null;
    this.right = null;
      }
    }



class BinarySearchTree {

  root() {
    return this.treeRoot;
  }

  add(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.treeRoot) {
      return;
    } else {
      let node = this.treeRoot;
      while (node.left) {
        node = node.left;
      }
      return node.data;
    }
  }

  max() {
    if (!this.treeRoot) {
      return;
    } else {
      let node = this.treeRoot;
      while (node.right) {
        node = node.right;
      }
      return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};