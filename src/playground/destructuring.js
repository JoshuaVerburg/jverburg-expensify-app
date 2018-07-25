/*
const person = {
    name: 'Josh',
    age: 22,
    location: {
        city: 'calgary',
        temp: 30
    }
};
const {name = 'Anon', age} = person;

/!*const name = person.name;
const age = person.age;*!/


console.log(`${name} is ${age}`);

const{city, temp: temperature} = person.location;
if(city && temperature){
    console.log(`its ${temperature} in ${city}`);
}
*/

/*const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name:'Penguin'
    }
};*/
/*

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);*/

//array destructuring

const address = ['299 south juniper street', 'Calgary', 'Alberta', '12352'];

const [street, city, state= 'BC', zip] = address;


const item = ['Coffee', '$2.00', '$2.50', '$3.00'];

const [type, , medium, large] = item;
console.log(`A medium ${type} costs ${medium}`);