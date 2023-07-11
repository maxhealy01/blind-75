const backspaceCompare = require("./backspace_string_compare");

describe("backspace_string_compare", () => {
	test("empty strings with different number of backspaces", () => {
		expect(backspaceCompare("###a##c##d#", "#")).toBe(true);
	});
	test("different backspace placement", () => {
		expect(backspaceCompare("###a", "aa#")).toBe(true);
	});
});
