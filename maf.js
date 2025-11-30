const number=[4,5,7,8,6];
const doubled=[];
for( const num of number){
    const double=num*2;
    doubled.push(double);
}
console.log(doubled)

// using map

const doubleIT(number){
    const result =number *2;
    return result;
}

const result =number.map(doubleIT)