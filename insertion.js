function insertionSort(arr) {
    // keep track of the last index of the sorted head of the array
    let sortedEnd = 0;
    
    // repeat this whole process until the array is sorted
    while (sortedEnd+1 < arr.length) {
        // console.log(`sortedEnd: ${sortedEnd} holding value ${arr[sortedEnd]}`,)
        // console.log(`next value: ${arr[sortedEnd+1]}`)
        if (arr[sortedEnd] > arr[sortedEnd+1]) {
            // console.log("must be inserted into sorted section")
            
            // store the value to sort in a temporary variable
            let valToSort = arr[sortedEnd+1];
            
            // start at the sorted end and iterate backwards
            // if the number we find is bigger than the one we're placing, bubble it forward
            // arr[j+1] is always a spot containing a double for a value left behind
            // by a previous operation so we can overwrite it safely
            let j = sortedEnd;
            while (j >= 0 && arr[j] > valToSort) {
                // console.log(`placing value: j=${j}, arr[j]=${arr[j]}, arr[j+1] was ${arr[j+1]}`)
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = valToSort;
        }
        sortedEnd++;
    }
    return arr;
}

module.exports = insertionSort;