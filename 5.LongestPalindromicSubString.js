/**
 * @param {string} s
 * @return {string}
 */

// Sliding window approach

 var longestPalindrome = function(s) {
  function isPal(i, j)
     {
         while(i < j){
             if(s[i] != s[j])
                 return false;
             i++;
             j--;
         }
         return true;
     }
     let n = s.length;
     for(let k = 0; k < n;k++)
     {
         let j = n - 1 - k;
         let i = 0;
         while(j < n)
         {
             if(isPal(i,j))
                 return s.substring(i, j + 1);
             i++;
             j++;
         }
     }
     return s;
     
 }