class Solution {
    groupAnagrams(strs) {
        const map = new Map();
        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
        const MAX = 1000000007;

        strs.forEach(str => {
            let key = 1;
            for (const char of str) {
                key = key * primes[(char.charCodeAt(0) - 'a'.charCodeAt(0))] % MAX;
            }
            const anagramArray = map.get(key) ?? map.set(key, []).get(key);
            map.set(key, [...anagramArray, str]);
        });

        return map.values().toArray();
    }
}
