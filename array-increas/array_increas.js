function makeIncreaseSequence(array) {
    let count = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            count += (array[i - 1] - array[i] + 1);
            array[i] += (array[i - 1] - array[i] + 1);
        }
    }
    return count;
}

