const number=[4,5,7,8,6];
// const doubled=[];
// for( const num of number){
//     const double=num*2;
//     doubled.push(double);
// }
// console.log(doubled)

// map loop through each element of the array  and do the operation that you passed in the call back function and hold the result form each operation in an array and finally returns the array

function double2(num){
    console.log('num now', num)
    return num*2;
}
const result =number.map(double2)
console.log(result)

// using arrow
const doubleIT=(n)=>n*2;
const output =number.map(doubleIT)
console.log(output)