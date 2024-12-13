// add whatever parameters you deem necessary
function longestFall(arr) {
    let count = 1;
    let maxCount = 0;
    if (arr.length === 0) {
        return 0;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            count++;
            maxCount = Math.max(count, maxCount);
        } else {
            count = 1;
        }
    }
    return maxCount || 1;
}
