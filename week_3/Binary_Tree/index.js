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
		let comp = this.root;
		while (true) {
			if (val === comp.val) return undefined;
			if (comp.val < val) {
				if (!comp.right) {
					comp.right = newNode;
					return this;
				}
				comp = comp.right;
			} else {
				if (!comp.left) {
					comp.left = newNode;
					return this;
				}
				comp = comp.left;
			}
		}
	}
}

module.exports = BinarySearchTree;
