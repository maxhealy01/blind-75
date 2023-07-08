const invertTree = require("./invert_binary_tree");
const BinarySearchTree = require("../index");

test("invert_binary_tree accurately inverts the given binary tree", () => {
	let bst = new BinarySearchTree();
	bst.insert(10);
	bst.insert(15);
	bst.insert(6);
	bst.insert(3);
	bst.insert(8);
	bst.insert(20);
	invertTree(bst);
	expect(JSON.stringify(invertTree(bst.root))).toBe(
		'{"val":10,"left":{"val":15,"left":{"val":20,"left":null,"right":null},"right":null},"right":{"val":6,"left":{"val":8,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}}}'
	);
});
