class Solution {
    twoSum(nums, target) {
        let map = new Map();

        for(let i=0;i<nums.length;i++){
            let targ = target - nums[i];
            if(map.has(targ)){
                return [i, map.get(targ)]
            }else{
                map.set(nums[i], i)
            }
        }
    }
}
