class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        if(s.length < 0 || s.length % 2 === 1){
            return false;
        }

        for(let i=0;i<s.length;i++){
            let el = s[i];

            if(el === "(" || el === "[" || el === "{"){
                stack.push(el);
            } else if(el === ")" && stack[stack.length-1] === "("){
                stack.pop("(")
            } else if(el === "]" && stack[stack.length-1] === "["){
                stack.pop("[")
            }else if (el === "}" && stack[stack.length-1] === "{"){
                stack.pop("{")
            } else {
                return false;
            }
        }

        console.log(stack, "stack")
        if(stack.length === 0)
            return true
        else
            return false
    }
}
