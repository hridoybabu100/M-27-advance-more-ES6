// Scope Function

const pi = 3.22 ;
// const sum = 20 ;
add(10,30);
function add ( a, b ){
    const scope = 10 ;
    const result = ( a + b ) * scope + pi ;
    return result ;
}
// const totalResult = add(10,30);
// console.log(totalResult);
// scope vaire theke acces kora jainna

// er mne ami scope e bitore vitorer variable kew chnage korte pari.
const ki = 2.37 ;
function name( x, y ){
    const run = 20 ;
    const result = ( x + y ) * run + ki ;
    return result 
}
const allResult = name( 20, 40 );
console.log(allResult);
