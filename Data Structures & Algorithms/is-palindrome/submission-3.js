class Solution {
    isPalindrome(s) {
        let cleanedStr = s.replace(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "");

        let copyStr = this.reverseString(cleanedStr);

        if (cleanedStr.toLocaleLowerCase() === copyStr.toLocaleLowerCase()) {
            return true;
        }

        return false;
    }

    reverseString(str) {
        return str.split("").reverse().join("");
    }
}
