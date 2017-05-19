class Treenode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }


  getData() {
    return this.value;
  }

  getLeft() {
    return this.left;
  }

  setLeft(treenode) {
    this.left = treenode;
  }

  getRight() {
    return this.right;
  }

  setRight(treenode) {
    this.right = treenode;
  }
}

module.exports = Treenode;
