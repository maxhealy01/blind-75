const invertTree = require("./invert_binary_tree");
const BinarySearchTree = require("../class");

test("invert_binary_tree works", () => {
	let bst = new BinarySearchTree();
	bst.insert(10);
	bst.insert(15);
	bst.insert(6);
	bst.insert(3);
	bst.insert(8);
	bst.insert(20);
	expect(invertTree(bst)).toBe([10, 15, 6, null, 20, 3, 8]);
});
