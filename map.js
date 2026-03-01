// Kuno array elements gulu ke nie kichu ekta kore kuno output pete chai ba kichu ekta korte chai...........
const numbers = [ 1, 2, 3, 4, 5, 6 ];

// const double = [];

// for ( const number of numbers ){
//     double.push( number * 2);
// }
// console.log('This a double Number', double);



// eita ke amra array Fumntion die 2 line e korte pari

const doubleIt = num => num * 2 ; // Array Funtion die code komanu jai.
// const double = numbers.map(doubleIt); 
// console.log('This a double Number', double);


// Eita abr map die elk line ew kora jai.

// const double = numbers.map(add => add * 2);
// console.log('This a double Number', double);

// const double = numbers.map( num => num * 2);
// console.log('This a double Number', double);

// eita die  mainly all operatior kora jabe.

const squr = numbers.map( sq => sq * sq );
// console.log('This is a SQ number', squr); 


// ami Chaile String diew korte parbo map. map mane holo ektar por arekta chai r ki

 const students = ['Babu', 'Bipul', 'Rahim', 'Jecika', 'Israt'];

 const stdInf = students.map( std => std[3])
//  console.log(stdInf); 

// Tbe sob gula aarar modde 
const product = [
    { name : 'Ipone', price : 4546},
    { name : 'Ipone', price : 6573},
    { name : 'Ipone', price : 10546},
];
const pdc = product.map( pd => pd);
// console.log('Product Price', pdc); 

// Multiline . tbe multiline Obossoi return korte hbe

// const pdf = product.map( pd => {
//     const uppueCase = pd.name.toUpperCase();
//     return uppueCase
    
// })
// console.log(pdf); 

// Duita paramiter .......... or koto gula index ache
// const pdf = product.map( (pd, index ) => {
//     const uppueCase = pd.name.toUpperCase();
//     console.log(index, uppueCase);
    
//     return uppueCase
    
// })
// console.log(pdf); 


// # ta para Miter 
const pdf = product.map( (pd, index, productArray ) => {
    const uppueCase = pd.name.toUpperCase();
    console.log(index, uppueCase, productArray);
    
    return uppueCase
    
})
console.log(pdf); 
 
 


