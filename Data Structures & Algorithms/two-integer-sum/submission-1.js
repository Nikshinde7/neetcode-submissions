class Solution {
    twoSum(nums, target) {
        let map = new Map();
        let f;

        for(let i=0;i<nums.length;i++){
            let targ = target - nums[i];
            console.log(targ, map.has(targ))
            if(map.has(targ)){
                f = [i, map.get(targ)]
            }else{
                map.set(nums[i], i)
            }
            // console.log(targ, map ,"targ")

        }

        console.log(f)
        return f;
    }
}
