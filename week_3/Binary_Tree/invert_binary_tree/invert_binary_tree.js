// Given the root of a binary tree, invert the tree, and return its root.

/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
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
