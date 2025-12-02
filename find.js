// find select element based on conditon and it doesnot return the same value again.it return only onw value but filter return an array .if no one match then return undefined

const players=[15,50,65,47,85,78,125,125,80,75];

const value=players.find(p=> p>60);
console.log(value)
const noMatch=players.find(p=> p>150);
console.log(noMatch)