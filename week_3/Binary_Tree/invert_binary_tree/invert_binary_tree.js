// Given the root of a binary tree, invert the tree, and return its root.
const { Node } = require("../index");
/**
 * @param {Node} root
 * @return {Node}
 */
const invertTree = (root) => {
	if (root == null) {
		return root;
	}
	invertTree(root.left);
	invertTree(root.right);

	const temp = root.left;
	root.left = root.right;
	root.right = temp;
	return root;
};

module.exports = invertTree;
