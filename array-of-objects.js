const products=[
    {id:1, name:'Lenevo',price:50000},
    {id:2, name:'hp',price:40000},
    {id:3, name:'Macbook',price:150000}
]

//map
const names=products.map(p=> p.name)
console.log(names)
// filter
const expensive=products.filter(p=> p.price>40000)
console.log(expensive)
// find 
const  affordable=products.find(p=> p.price <150000 )
console.log(affordable)