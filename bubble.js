function bubbleSort(arr) {
    let swapped = false;
    do {
        swapped = false;
        let i = 0;
        while(i+1 < arr.length) {
            if(arr[i] > arr[i+1]) {
                swapped = true;
                [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ]
            }
            i++;
        }
    } while (swapped)
    return arr;
}

module.exports = bubbleSort;