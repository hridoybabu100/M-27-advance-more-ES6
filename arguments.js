// Arguments mulotoi array like object. eitar behave object er moto bt objevt nah

// function add (numb1, numb2){
//     console.log('Arguments', arguments );
//     return numb1 + numb2 ;
    
// }
//  const result = add(1, 2, 54, 87, 34, 20);
//  console.log('This ia a Result', result);


 // Tbe amra chaile array thake objecet e ante pari....
 
function add (numb1, numb2){
    console.log('Arguments', arguments );
    const obj = [...arguments];
    console.log(obj);
    
    return numb1 + numb2 ;
    
}
 const result = add(1, 2, 54, 87, 34, 20);
 console.log('This ia a Result', result);


 // Explian pass by value or pass by refrence (chgt)