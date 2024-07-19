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
// switdh statement
function getPlanet(id){
let name;
switch (id) {
    case 1:
      name = "MERCURY"  
        break;
      case 2:
        name = "VENUS" 
        break;
        case 3:
      name = "EARTH"
      break;
      case 4:
      name = "JUPTER" 
      break; 
      case 5:
        name = "NEPTUNE" 
      break; 
        case 6:
      name = "URANUS"  
      break;
      case 7:
      name = "STURN"  
        
}
return name;
}
console.log(getPlanet(4));
/// arrays operators

const numbers = [34, -10, 0, 99, 3];
function getSmallestNumber(numbers){
    if(numbers.length===0){
        return undefined;
    }else{
        return Math.min(...numbers)
    }

}

let SmallestNumber = getSmallestNumber(numbers)
console.log(SmallestNumber);