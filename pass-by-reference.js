// Pass by Reference

function firstSum ( arr1, arr2 ){

    arr1[0] = 100 ;
    arr2[0] = 200 ;

    const first = arr1[0];
    const second = arr1[0];
    return first + second ;

};
const number1 = [ 1, 2, 3 ];
const number2 = [ 4, 5, 6 ];
console.log('Before The Number', number1, number2);
firstSum(number1, number2)
console.log('After The Number', number1, number2);

// Jodi Kun Funtion er modde kuno Obj or arry pathaye man cng kori tahole jeikhne pathaichi oitar man cng hbe.er jonnei eitake pass by value bole.