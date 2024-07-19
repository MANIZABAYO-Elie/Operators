// strings 
const myStr = "hello world"
console.log(myStr);
const myName = "Elie"
// numbers 
const sum1 = 20+50;
console.log(sum1);
const cities2 = ["Manchester", "Liverpool",17,30,60];
for (let i = 0; i < cities2.length; i++) {
    
    if (typeof cities2[i] ==="number")
        console.log(cities2[i]);
}
    
let fruit = 'apple';

switch (fruit) {
    case 'apple':
        console.log('You selected an apple.');
        break;
    case 'banana':
        console.log('You selected a banana.');
        break;
    case 'orange':
        console.log('You selected an orange.');
        break;
    default:
        console.log('Fruit not available.');
}
//