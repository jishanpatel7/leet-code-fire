//Given an index k, return the kth row of the Pascal's triangle.
//Pascal's triangle : To generate A[C] in row R, sum up A[C] and A[C-1] from previous row R - 1.
//Example:
//Input: 3
//Output: [1,3,3,1]
//Note:
//Could you optimize your algorithm to use only O(k) extra space?

const getRow = function(rowIndex) {
    let row = [1];
    for(let i = 1; i <= rowIndex; i++) {
        let newRow = [1];
        for(let j = 1; j < row.length; j++) {
            newRow.push(row[j] + row[j - 1]);
        }
        newRow.push(1);
        row = newRow;
    }
    return row;
}
console.log(getRow(3));