function sum(num1,num2){
    const total=num1+num2;
    console.log(total)
}
sum(10,20)

// defacult parmeter
function k(x,y=0) {
    const a=x+y;
    console.log(x,y,a)
    
}
k(10)


// mul
function mul(r=1,s=1) {
 const result=r*s;
 console.log(result)    
}
mul(10)


// string
function fullName(first,last= '') {
    const z=first+last;
    console.log(z);

    
}
fullName('kamaluddin')