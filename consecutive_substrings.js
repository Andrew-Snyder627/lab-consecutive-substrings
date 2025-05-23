function consecutiveSubstrings(string) {
  // type your code here
  const result = [];
  // Outer loop for each start position of the string
  for (let start = 0; start < string.length; start++) {
    // Inner loop for each possible end position after the start
    // We got up to string.length because we need to capture the substrings that end at the last character
    for (end = start + 1; end <= string.length; end++) {
      // Add substring from start to end
      result.push(string.slice(start, end));
    }
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(""));

  // Longer string to test
  console.log(
    "Expecting: ['w', 'wa', 'wat', 'wate', 'water', 'a', 'at', 'ate', 'ater', 't', 'te', 'ter', 'e', 'er', 'r']"
  );
  console.log("=>", consecutiveSubstrings("water"));
}

module.exports = consecutiveSubstrings;
