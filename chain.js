// data acccess 
const data=[{id: 1,name: 'sohanur',address:'Rajshahi'}]
console.log(data)
console.log(data[0].address)

const products={
    count:500,
    data:[
        {id:1, name:'Lenovo Laptop', price:50000},
        {id:2, name:'Macbook', price:150000}
    ]
}


// second product price
console.log(products.data[1].price)


const user={
    id:1005,
    name:'Sohanur Rahman',
    address:
    {
        street: {
            first:'11 Bagha',
            second:'15 Bagha',
            third:'420 Bagha'
        },
        city:'Rajshahi'
    }
}

// access  user address second street

console.log(user.address.street.second)