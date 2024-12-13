// add whatever parameters you deem necessary
function freqCount(num) {
    const numArr = num.toString().split('');
    const result = new Map;
    for (i = 0; i < numArr.length; i++) {
        let value = result.get(numArr[i]) + 1 || 1;
        result.set(numArr[i], value);
    }
    return result;
}

function sameFrequency(num1, num2) {
    let num1Count = freqCount(num1);
    let num2Count = freqCount(num2);
    for (let [key, value] of num1Count) {
        if (num2Count.get(key) !== value) return false;
    }
    return true;
}
