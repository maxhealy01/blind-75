const canConstruct = require("../Hash_Table/ransom_note");

test("ransom_note works", () => {
	expect(canConstruct("aa", "aab")).toBe(true);
});
