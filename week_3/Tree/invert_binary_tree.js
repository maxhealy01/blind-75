/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
	console.log(root);
	let end = root[0].length * 2;
	console.log(root[0].length);
	return root.slice(0, end);
};

console.log(invertTree([1, 2, 3]));
