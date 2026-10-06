class Solution {
    isAnagram(s, t) {

        if(s.length !== t.length)
            return false;

        let flag = true;
        let map = new Map();
        for (let i = 0; i < s.length; i++) {
            if(map.has(s[i])){
                let cnt = map.get(s[i]);
                map.set(s[i], cnt+=1);
            }else{
                map.set(s[i], 1);
            }
        }
        for(let i = 0; i < t.length; i++){
            if(map.has(t[i])){
                let el = map.get(t[i]);
                if(el > 0){
                    map.set(t[i], el-=1)
                }else{
                    flag = false;
                } 
            }else{
                flag = false;
                break
            }
        }

        return flag;
    }
}
