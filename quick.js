/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start=0, end=arr.length-1){
    const pvt = arr[start]
    let pvtIdx = start;
    
    for (let i=start+1; i <= end; i++) {
        if(arr[i] < pvt) {
            // move the target value to next to the pivot
            [ arr[pvtIdx+1], arr[i] ] = [ arr[i], arr[pvtIdx+1 ] ];
            
            // swap the pivot and the target value
            [ arr[pvtIdx], arr[pvtIdx+1 ] ] = [ arr[pvtIdx+1], arr[pvtIdx] ];
            
            // could do that in one line, but not sure what the result would be
            // when i === pvtIdx+1
            // [ arr[pvtIdx], arr[pvtIdx+1], arr[i] ] = [ arr[i], arr[pvtIdx], arr[pvtIdx+1] ]
            
            // update the pivot index;
            pvtIdx++;
        }
    }
    return pvtIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, start=0, end=arr.length-1) {
    if (end-start <= 0) return arr;
    
    const pindex = pivot(arr, start, end);
    // console.log(`pivoting on ${arr[pindex]}; start: ${start}, pindex: ${pindex}, end: ${end}`)
    // console.log(`section=${arr.slice(start,end+1)}`)
    
    // left half: from start to pindex-1
    
    const leftLength = pindex - start;
    const rightLength = end - pindex;
    // console.log(`left side length: ${leftLength}, right side: ${rightLength}`)
    
    if (leftLength > 1) {
        // console.log("recursing on left");
        quickSort(arr, start, pindex-1);
    }
    if (rightLength > 1) {
        // console.log("recursing on right");
        quickSort(arr, pindex+1, end);
    }
    
    return(arr);
}

module.exports = { pivot, quickSort };