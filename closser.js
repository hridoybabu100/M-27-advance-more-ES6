// // Closser javaScript

// function outSide (){
//     function inSide (){
//         console.log('This is a inside');
//     }
//     return inSide
// }
// const result = outSide();
// // result(); 
// // console.log(result);


// // Closure is most Important
// //Only Rahim

// function counter (){
//     let count = 0 ;
//     function closure (){
//         console.log('Rahim is a closer', count);
        
//     }
//     return closure
// // }
// const result1 = counter();
// // result1();
// // console.log(result1);


// //counter 
// function counter (own){
//     let count = 0 ;
//     function closure (){
//         count = count + 1 ;
//         console.log('Rahim is a counter No ->',own, count);
        
//     }
//     return closure
// }
// const babuCounter = counter('Babu');
// babuCounter();
// babuCounter();
// babuCounter();
// babuCounter();
// babuCounter();
// // console.log(result1);
// const jecikacuunter = counter('jecika');
// jecikacuunter();
// jecikacuunter();
// jecikacuunter();

function outSite (){
    function inSite (){
        console.log('I am a Insite', inSite); 
        function overSite (){
            console.log('I am Over Site', overSite);           
        } 
        return overSite;
    }
    return inSite;
}
const totalresult = outSite('hello');
totalresult();
const newResult = inSite('This');
newResult();

