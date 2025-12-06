function sum(a,b,c)  //paramater
{
    const args=[...arguments]
    console.log(args)
    const result=a+b+c;
    return result;
}
const total=sum(1,2,3,4,5,5,8,9);  //arguments
console.log(total)