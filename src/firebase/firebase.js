import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// //child_removed
// database.ref('expenses').on('child_removed', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', snapshot => {
// 	const expenses = [];
// 	snapshot.forEach(childSnapshot => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val(),
// 		});
// 	});
// 	console.log(expenses);
// });

// database.ref('expenses').push({
// 	description: 'rent',
// 	amunt: 30000,
// 	createdAt: 0,
// 	note: 'February',
// });

// database.ref('notes/-LKpUCnLfHGWvj-Mq0pi').remove();

// database.ref('notes').push({
// 	title: 'Course topics',
// 	body: 'react native',
// });

// database.ref('notes').set(notes);

// database.ref().on('value', snapshot => {
// 	console.log(snapshot.val());
// });

// database
// 	.ref('location/city')
// 	.once('value')
// 	.then(snapshot => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch(e => {
// 		console.log('Error fetching data', e);
// 	});

// database
// 	.ref()
// 	.set({
// 		name: 'Evlogi Aleksandrov',
// 		age: 24,
// 		isSingle: true,
// 		location: {
// 			city: 'Sofia',
// 			country: 'Bulgaria',
// 		},
// 	})
// 	.then(() => {
// 		console.log('data is saved');
// 	})
// 	.catch(error => {
// 		console.log('this failed', error);
// 	});

// database.ref().update({
// 	name: 'Mike',
// 	age: 29,
// 	job: 'Software Developer',
// });
