function medianofArrs(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    if (m > n) {
        return medianofArrs(nums2, nums1);
    }
    let iMin = 0;
    let iMax = m;
    while (iMin <= iMax) {
        let i = Math.floor((iMin + iMax) / 2);
        let j = Math.floor((m + n + 1) / 2) - i;
        if (i < iMax && nums2[j - 1] > nums1[i]) {
            iMin = i + 1;
        } else if (i > iMin && nums1[i - 1] > nums2[j]) {
            iMax = i - 1;
        } else {
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = nums2[j - 1];
            } else if (j === 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }
            if ((m + n) % 2 === 1) {
                return maxLeft;
            }
            let minRight = 0;
            if (i === m) {
                minRight = nums2[j];
            } else if (j === n) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums1[i], nums2[j]);
            }
            return (maxLeft + minRight) / 2;
        }
    }
}

console.log(medianofArrs([1, 2], [3,4]));