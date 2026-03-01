// Filter mainly sob array kei dei . 

// find muloto jekuno ekta ke dibe. jodi seita na thake tahole undefined dibe. 
//jodi akadik thake tobuo se ekta kei dibe jeita se first e pabe.

// Find mainly jekuno ekta ke khuje ber korbe.

const allStudents = [
    { Name : 'Hridoy Akanda', Age : 23 },
    { Name : 'Lal Babu', Age : 30 },
    { Name : 'Hasan ', Age : 40 },
    { Name : 'Mister ak', Age : 10 },
    { Name : 'Jecika', Age : 26 },
    { Name : 'Taramon', Age : 32 },
    { Name : 'Sundor Ali', Age : 17 },
]

const studentName = allStudents.filter( age => age.Name === 'Hridoy Akanda' );
console.log(' I am a ', studentName);