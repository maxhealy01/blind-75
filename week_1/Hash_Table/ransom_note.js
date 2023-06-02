const canConstruct = (rN, mag) => {
	if (mag.length < rN) return false;

	const map = {};

	// Map every letter in the magazine
	for (i = 0; i < mag.length; i++) {
		map[mag[i]] ? map[mag[i]]++ : (map[mag[i]] = 1);
	}
	// Subtract every letter from ransomNote -- if < 0, it'll become an error
	for (i = 0; i < rN.length; i++) {
		if (map[rN[i]] > 0) map[rN[i]]--;
		else return false;
	}

	return true;
};

console.log(canConstruct("aa", "aab"));
