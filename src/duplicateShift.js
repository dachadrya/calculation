export const duplicateShift = function (arr) {
   // arr = [1, 0, 2, 3, 0, 4, 5, 0]
    console.log(arr.length);

    const arrlength = arr.length;
    for (let i = 0; i < arrlength; i++) {

        if (arr[i] === 0) {

            arr.splice(i, 0, 0);
            arr.splice(arrlength, 1);
            //arr.pop();
            i = i + 1;

        }
    }
    arr.join(", ");
    
}