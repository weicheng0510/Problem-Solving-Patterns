// add whatever parameters you deem necessary
// constructNote('abc', 'dcba') // true

function charCount(str) {
    const result = new Map();
    for (let char of str) {
        let val = result.get(char) + 1 || 1;
        result.set(char, val);
    }
    return result;
}

function constructNote(message, letters) {
    const messageCount  = charCount(message);
    const lettersCount = charCount(letters);
    for (let [key, value] of messageCount) {
        if (!lettersCount.has(key)) return false;
        if (lettersCount.get(key) < value ) return false;
    }
    return true;
}

