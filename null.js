//Null ke ami nije difened korbo

const students = {
    name : 'Mirbahul Khanon',
    age : 23,
    addres : 'Dhaka',
    location : null
}
// console.log(students.location);

const fathar = {
    Name : 'Abul Kalam Azad',
    Ocupation : 'As a farmer',
    Thana : 'Islampur',
    Districk : 'Jamalpur',
    'Home-Address' : {
        Home : 'ChinarCharr',
        Dhaka : 'Benuar Char',
        Place : 'Jhograr Char',
    },
};
console.log('My fathars Identity',fathar["Home-Address"]);
