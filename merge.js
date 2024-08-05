function merge(arr, brr) {
    let [i, j] = [0, 0];
    const res = []
    while (i < arr.length && j < brr.length) {
        if (arr[i] < brr[j]) {
            res.push(arr[i]);
            i++;
        }
        else {
            res.push(brr[j]);
            j++;
        }
    }
    while (i < arr.length) {
        res.push(arr[i]);
        i++;
    }
    while (j < brr.length) {
        res.push(brr[j]);
        j++;
    }
    return res;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const midpoint = Math.floor(arr.length/2);
    return merge(mergeSort(arr.slice(0,midpoint)), mergeSort(arr.slice(midpoint)))
}

module.exports = { merge, mergeSort};