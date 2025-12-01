const numbers=[5,7,8,9,3];
const doubled=numbers.map(num=>num *2)
console.log(doubled)

const fiveBonus=numbers.map(num=>(num*2)+5)
console.log(fiveBonus)


const friends=['sohnaur','rahman','sohag','mahfuz'];

const length=friends.map(frnd=>frnd.length)
console.log(length)
// show first letter
const firsrtLetter=friends.map(frnd=>frnd[0])
console.log(firsrtLetter)


