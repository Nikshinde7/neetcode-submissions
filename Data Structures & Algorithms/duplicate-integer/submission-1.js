class Solution {
    hasDuplicate(nums) {
        let flag = false;
        let map = new Map();

        for(let i=0;i<nums.length;i++){
            if(i==0){
                map.set(nums[i], true);
            } else if(map.get(nums[i]))
                flag = true;
            else    
                map.set(nums[i], true)
        }

        return flag;
    }
}
