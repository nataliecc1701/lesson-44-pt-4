function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        // keep track of our lowest-seen-value and its index;
        let min = arr[i];
        let mindex = i;
        
        for (j = i; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                mindex = j
            }
        }
        if (mindex !== i) {
            [ arr[i], arr[mindex] ] = [ arr[mindex], arr[i] ]
        }
    }
    return arr;
}

module.exports = selectionSort;