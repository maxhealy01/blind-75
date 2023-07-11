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
 * @return {number}
 */

const maxDepth = (root) => {
	if (root === undefined || root === null) {
		return 0;
	}
	// The given Definition above is helpful in understanding the solution.
	// A tree looks like this: [3,9,20,null,null,15,7]
	// where 1, 2 are children, 3,4 are the children of 1 and 5,6 the children of 2
	// then 3-7/8, 4-9/10, 5-11/12, 6-13/14. The children are always
	// [x + 1 * 2, ((x+1)*2)-1]

	// This function keeps traversing each right and left node until it returns 0 and recursion stops
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
