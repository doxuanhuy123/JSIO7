bài1
const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
for (let i = 0; i < arrayNumber.length; i++ ) {
    if (i % 2 == 0){
        for ( let j = 0; j < arrayNumber[i].length; i++){
            if (j % 2 != 0){
                console.log(sum[arrayNumber[i][j]])
            }
        }
    }
}
____________
const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
const max = Math.max(...arrayNumber);
console.log(max);
_______________________
const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
const min = Math.min(...arrayNumber);
console.log(min);
_______________________
const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
const nguyenTo = arrayNumber.filter(myFunction);
function myFunction(value) {
    console.log(value % 2 != 0);

bài2
let mang = [1,34,45,647,5,25,87,59,90,10];
mang.sort(function(a, b) {
    return a - b;
});
console.log(mang);
_______________________
let mang = [1,34,45,647,5,25,87,59,90,10];
mang.sort(function(a, b) {
    return b-a;
});
console.log(mang);


bài3
let a = prompt("Nhập số");
for (let i = 2; i < a; i+=2){

}


bài5
let mang = [,1,2,3,4,5,,6,7,8,9,1,2,3,4,5,6,7,8,9];
var thaySo = mang.filter(function(value){
    return value % 3 == 0
});
console.log(mang);