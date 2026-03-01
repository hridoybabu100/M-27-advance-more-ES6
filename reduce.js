// eita mainly reduce kore.
// eita always duita paramiter nei.
// Even Number jonne khetree 0 value nei.


const numbers = [ 1, 3, 5, 6, 98, 23, 76, 87 ];
// let sum = 0 ;

// for ( const number of numbers ){
//     sum = sum + number;

// }
// console.log('This is a sum Number', sum);

const totalSum = numbers.reduce((acc, num ) => acc + num, 0) ;
console.log('Total sum Numner is', totalSum);


// Sob gula manke eksathe jug kore ante chaile eitai holo reduce

