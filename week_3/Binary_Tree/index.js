class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(val) {
		let newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (val === current.val) return undefined;
			if (current.val < val) {
				if (!current.right) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			} else {
				if (!current.left) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			}
		}
	}
}

module.exports = { BinarySearchTree, Node };
