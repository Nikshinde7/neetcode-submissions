class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length)
            return false;

        const alphabets = Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            alphabets[getIndex(s[i])] += 1;
        }
        for (let i = 0; i < t.length; i++) {
            alphabets[getIndex(t[i])] -= 1;
        }

        for (let i = 0; i < 26; i++) {
            if (alphabets[i] !== 0) {
                return false;
            }
        }
        return true;

        function getIndex(char) {
            return char.charCodeAt(0) - 'a'.charCodeAt(0);
        }
    }
}
