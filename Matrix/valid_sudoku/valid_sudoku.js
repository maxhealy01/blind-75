/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
	let row = new Set();
	let column = new Set();
	let box = new Set();

	// Check all the rows
	for (let i = 0; i < 9; i++) {
		row.clear();
		for (let j = 0; j < 9; j++) {
			let square = board[i][j];
			if (square != ".") {
				if (row.has(square)) return false;
				row.add(square);
			}
		}
	}

	// Check all the columns
	for (let j = 0; j < 9; j++) {
		column.clear();
		for (let i = 0; i < 9; i++) {
			let square = board[j][i];
			if (square != ".") {
				if (column.has(square)) return false;
				column.add(square);
			}
		}
	}
	const indices = [
		[0, 3],
		[3, 6],
		[6, 9],
	];
	indices.forEach((pair) => {
		for (let i = pair[0]; i < pair[1]; i++) {
			for (let j = 0; j < 9; j++) {
				if (j === 3 || j === 6) {
					console.log("CLEAR!!!", i, j);
					box.clear();
				}
				let square = board[j][i];
				if (square != ".") {
					if (box.has(square)) return false;
					box.add(square);
				}
			}
		}
	});

	return true;
};

console.log(
	isValidSudoku([
		["8", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"],
	])
);
