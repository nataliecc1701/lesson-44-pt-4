function bubbleSort(arr) {
    let swapped = false;
    
    // optimization: after n passes, there are at least n sorted entries at the
    // end of the array.
    let sortedTailLength = 0;
    // using a do-while so that it runs once and then finishes when it does a pass
    // without swapping
    do {
        // haven't swapped anything this pass, so set it to false
        swapped = false;
        
        // iterate over the array
        let i = 0;
        while(i+1+sortedTailLength < arr.length) {
            // compare; if they're out of order, make the swap and record that we did it
            if(arr[i] > arr[i+1]) {
                swapped = true;
                [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ]
            }
            // increment the iterator now that we're done with it
            i++;
        }
        // now that we've pushed the next-highest entry into place, increment the tail
        sortedTailLength++;
    } while (swapped)
    return arr;
}

module.exports = bubbleSort;