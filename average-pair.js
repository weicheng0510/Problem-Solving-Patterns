// add whatever parameters you deem necessary
// [-20,-2, 1, 3, 4, 8]  target=2  =>  true


function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let result = arr[left] + arr[right] / 2;
        if (result === target) return true;
        if (result > target) {
            right --;
        }
        if (result < target) {
            left ++;
        }
    }
    return false;
}
