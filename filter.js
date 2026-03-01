// Filter hocce Map er motoi . tbe eita shes ekta condition Thkabe. ekhn ki conditopn dibo eita amr upor depends kore . filter mainly khuja . seacrch kora. findoutOut kora

// Filter mainly jotogula sorto fillup hbe sob gula kei dibe.


// 1. kichu songkha jeikhne amr sudu jur songkha lagbe.
 const numbers = [ 1, 3, 2, 4, 5, 7, 8, 34, 87, 75, 45, 9, 98 ];
 const evenNumber = numbers.filter( even => even % 2 === 0 );
//  console.log('This is a Even Number', evenNumber); 



// 2. Amr kichu String ba name ache jeikhne namer fisrt letter (N) ache oirokom name gula ke ami chai..

const allStd = ['Milon', 'Nahid', 'Rahim', 'Niloy', 'Babu'];

const nName = allStd.filter( n => n[0] === 'N' );
// console.log('This is the first letter n - >', nName);


// 3. kichu studen name & age age. kintu eikhne age er ekta condition dite chai. filter die.

const allStudents = [
    { Name : 'Hridoy Aknada', Age : 23 },
    { Name : 'Lal Babu', Age : 30 },
    { Name : 'Hasan ', Age : 40 },
    { Name : 'Mister ak', Age : 10 },
    { Name : 'Jecika', Age : 26 },
    { Name : 'Taramon', Age : 32 },
    { Name : 'Sundor Ali', Age : 17 },
]

const studentAge = allStudents.filter( age => age.Age >= 30 );
console.log('Now You are most Adult', studentAge);

 