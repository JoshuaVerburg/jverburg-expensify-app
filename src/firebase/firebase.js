import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};

// database.ref('expenses').on('child_removed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// });



// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // }, (e) => {
// //     console.log('Error fetching', e);
// // });

// // database.ref('expenses').once('value').then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // });


// database.ref('expenses').push({
//     description: 'Coffe',
//     note: 'Why so expensive',
//     amount: 2000,
//     createdAt: 'March 2, 2018'
// });





// // database.ref('notes/-LJBOYBgS-YClW3UesXE').remove();
// // database.ref('notes').push({
// //     title: 'first note!',
// //     body:' react native'
// // });


// // database.ref('notes').set(notes);
// // database.ref('notes/12')

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // }, (e) => {
// //     console.log('Error fetching', e);
// // });

// // setTimeout(() => {
// //     database.ref('job/title').set('Manager')
// // }, 3500);




// // database.ref('location/city').once('value').then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// // }).catch((e) => {
// //     console.log(e);
// // });

// // database.ref().set({
// //     name: 'Joshua Verburg',
// //     age: 26,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Facebook'
// //     },
// //     location : {
// //         city: 'Calgary',
// //         country: 'Canada'
// //     },
// // }).then(() => {
// //     console.log('data is saved')
// // }).catch((e) => {
// //     console.log('this failed', e)
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     "job/company": 'Amazon',
// //     "location/city": 'Seattle'
// // });

// // database.ref().set("This is my data");

// // database.ref('attributes').set({
// //     height: 190,
// //     weight: 80
// // }).then(() => {
// //     console.log('Attributes set');
// // }).catch((e) => {
// //     console.log('oh no it broke', e)
// // });

// // database.ref('isSingle').set(null);

// // database.ref('isSingle').remove().then(() => {
// //         console.log('data is removed')
// //     }).catch((e) => {
// //         console.log('this failed', e)
// //     });