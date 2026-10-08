class Solution {
    groupAnagrams(strs) {
        let rsArr = [];
        let map = new Map();
        let keys = new Set();

        for(let i=0;i<strs.length;i++){
            let sortedShit = [...strs[i]].sort().join("");

            if(!map.has(sortedShit)){
                map.set(sortedShit, [strs[i]])
            }else{
                let el = map.get(sortedShit);
                map.set(sortedShit, [...el, strs[i]])
            }
        }

        return map.values().toArray();
    }
}
