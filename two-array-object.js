// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    const result = {};
    for (i = 0; i < arr1.length; i++) {
        if (i >= arr2.length) {
            result[arr1[i]] = null;
        }
        else {
            result[arr1[i]] = arr2[i];
        }
    };
    return result;
}
