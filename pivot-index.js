// add whatever parameters you deem necessary
function pivotIndex(arr) {
    let rightSum = arr.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    let pivotIdx = -1;
    for (let i = 0; i< arr.length; i++) {
        rightSum -= arr[i];
        if (leftSum === rightSum) {
            pivotIdx = i;
            break;
        }
        leftSum += arr[i];
    }
    return pivotIdx;
}
